import { NextResponse } from 'next/server';
import { sendEmail, formatFormDataToHtml } from '@/lib/email';

interface InterventionsFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  appareilType: string;
  urgency: string;
  issueType: string;
  customIssueType?: string;
  description: string;
  preferredDate?: string;
  preferredTime?: string;
  [key: string]: string | undefined;
}

export async function POST(request: Request) {
  try {
    console.log('Received interventions form submission');
    
    // Check if the request is FormData or JSON
    const contentType = request.headers.get('content-type') || '';
    
    let body: InterventionsFormData;
    
    if (contentType.includes('multipart/form-data')) {
      // Handle FormData
      const formData = await request.formData();
      
      // Convert FormData to a regular object
      body = {} as InterventionsFormData;
      formData.forEach((value, key) => {
        body[key] = value as string;
      });
      
      console.log('Interventions form data (FormData):', Object.keys(body));
    } else {
      // Handle JSON data
      body = await request.json() as InterventionsFormData;
      console.log('Interventions form data (JSON):', Object.keys(body));
    }
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'appareilType', 'issueType', 'description'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    // Special validation for 'other' issue type
    if (body.issueType === 'other' && !body.customIssueType) {
      missingFields.push('customIssueType');
    }
    
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
    
    // Prepare email data
    const emailData = {
      'Nom': body.name,
      'Email': body.email,
      'Téléphone': body.phone,
      'Adresse': body.address,
      'Type d\'appareil': body.appareilType,
      'Urgence': body.urgency === 'urgent' ? 'Urgente' : 'Normale',
      'Type de problème': body.issueType === 'other' ? `${body.customIssueType} (personnalisé)` : body.issueType,
      'Description du problème': body.description,
      'Date préférée': body.preferredDate || 'Non spécifiée',
      'Heure préférée': body.preferredTime || 'Non spécifiée',
    };

    try {
      // Send email via Nodemailer
      const htmlContent = formatFormDataToHtml(emailData);
      await sendEmail(
        process.env.EMAIL_TO || 'info@dmd-ascenseur.com',
        'Nouvelle demande d\'intervention',
        htmlContent,
        body.email
      );
      
      console.log('Interventions form email sent successfully via Nodemailer');
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande d\'intervention a été envoyée avec succès'
      });
    } catch (emailError) {
      console.error('Error sending email but form data was valid:', emailError);
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande a été reçue avec succès',
        emailSent: false
      });
    }
  } catch (error) {
    console.error('Error processing interventions form:', error);
    
    // Get more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error details:', { message: errorMessage, stack: errorStack });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors du traitement de votre demande d\'intervention. Veuillez réessayer plus tard.', 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}
