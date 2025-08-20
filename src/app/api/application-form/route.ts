import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/email';

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message?: string;
  resume?: File;
  coverLetter?: File;
  [key: string]: string | File | undefined;
}

export async function POST(request: Request) {
  try {
    console.log('Received application form submission');
    
    // Handle FormData with file attachments
    const formData = await request.formData();
    
    // Convert FormData to a regular object
    const body: ApplicationFormData = {} as ApplicationFormData;
    formData.forEach((value, key) => {
      body[key] = value as string | File;
    });
    
    console.log('Application form data:', Object.keys(body));
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'position'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      console.warn('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Veuillez remplir tous les champs obligatoires.', 
          missingFields 
        },
        { status: 400 }
      );
    }
    
    // Check for resume file
    if (!body.resume || !(body.resume instanceof File)) {
      console.warn('Missing resume file');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Veuillez joindre votre CV.'
        },
        { status: 400 }
      );
    }
    
    // Format email content
    const subject = 'Nouvelle candidature';
    
    const text = `
      Nouvelle candidature:
      
      Prénom: ${body.firstName}
      Nom: ${body.lastName}
      Email: ${body.email}
      Téléphone: ${body.phone}
      Poste: ${body.position}
      Expérience: ${body.experience}
      
      Message:
      ${body.message || 'Aucun message'}
      
      Pièces jointes: CV et lettre de motivation (voir pièces jointes)
    `;
    
    const html = `
      <h2>Nouvelle candidature</h2>
      <p><strong>Prénom:</strong> ${body.firstName}</p>
      <p><strong>Nom:</strong> ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Téléphone:</strong> ${body.phone}</p>
      <p><strong>Poste:</strong> ${body.position}</p>
      <p><strong>Expérience:</strong> ${body.experience}</p>
      <p><strong>Message:</strong><br>${(body.message || 'Aucun message').replace(/\n/g, '<br>')}</p>
      <p><strong>Pièces jointes:</strong> CV et lettre de motivation (voir pièces jointes)</p>
    `;

    // Prepare attachments
    const attachments = [];
    
    // Add resume if provided
    if (body.resume && body.resume instanceof File) {
      const resumeBuffer = Buffer.from(await body.resume.arrayBuffer());
      attachments.push({
        filename: body.resume.name,
        content: resumeBuffer
      });
    }
    
    // Add cover letter if provided
    if (body.coverLetter && body.coverLetter instanceof File) {
      const coverLetterBuffer = Buffer.from(await body.coverLetter.arrayBuffer());
      attachments.push({
        filename: body.coverLetter.name,
        content: coverLetterBuffer
      });
    }
    
    try {
      // Try to send email but don't block success response on failure
      const info = await sendEmail({
        subject,
        text,
        html,
        attachments
      });
      console.log('Application form email sent successfully:', info.messageId);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre candidature a été envoyée avec succès',
        messageId: info.messageId
      });
    } catch (emailError) {
      // Log email sending error but still return success to the client
      console.error('Error sending email but form data was valid:', emailError);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre candidature a été reçue avec succès',
        emailSent: false
      });
    }
  } catch (error) {
    console.error('Error processing application form:', error);
    
    // Get more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error details:', { message: errorMessage, stack: errorStack });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors du traitement de votre candidature. Veuillez réessayer plus tard.', 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}
