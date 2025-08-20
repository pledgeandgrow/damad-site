import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/email';

interface PartenariatFormData {
  // Step 1: Entreprise
  companyName: string;
  siret: string;
  address: string;
  city: string;
  services: string;
  
  // Step 2: References
  project1Title?: string;
  project1Date?: string;
  project1Location?: string;
  project1Amount?: string;
  project2Title?: string;
  project2Date?: string;
  project2Location?: string;
  project2Amount?: string;
  project3Title?: string;
  project3Date?: string;
  project3Location?: string;
  project3Amount?: string;
  
  // Step 3: Documents
  insurance?: File;
  fiscalCertificate?: File;
  kbis?: File;
  
  // Step 4: Contact
  contactName: string;
  contactFirstName: string;
  email: string;
  phone: string;
  
  [key: string]: string | File | undefined;
}

export async function POST(request: Request) {
  try {
    console.log('Received partenariat form submission');
    
    // Check if the request is FormData or JSON
    const contentType = request.headers.get('content-type') || '';
    
    let body: PartenariatFormData;
    
    if (contentType.includes('multipart/form-data')) {
      // Handle FormData with file attachments
      const formData = await request.formData();
      
      // Convert FormData to a regular object
      body = {} as PartenariatFormData;
      formData.forEach((value, key) => {
        body[key] = value as string | File;
      });
      
      console.log('Partenariat form data (FormData):', Object.keys(body));
    } else {
      // Handle JSON data
      body = await request.json() as PartenariatFormData;
      console.log('Partenariat form data (JSON):', Object.keys(body));
    }
    
    // Validate required fields for each step
    // Step 1: Entreprise
    const step1Fields = ['companyName', 'siret', 'address', 'city', 'services'];
    // Step 2: References - at least one project title is required
    const step2Fields = ['project1Title']; // Only require at least one project reference
    // Step 3: Documents
    const step3Fields = ['insurance', 'fiscalCertificate', 'kbis'];
    // Step 4: Contact
    const step4Fields = ['contactName', 'contactFirstName', 'email', 'phone'];
    
    // Combine all required fields
    const requiredFields = [...step1Fields, ...step2Fields, ...step3Fields, ...step4Fields];
    
    // Special handling for project references - only need one of them
    const hasProjectReference = body.project1Title || body.project2Title || body.project3Title;
    
    // Filter out missing fields, with special handling for project references
    const missingFields = requiredFields.filter(field => {
      // Skip project2Title and project3Title as they're optional
      if (field === 'project1Title' && hasProjectReference) {
        return false;
      }
      return !body[field];
    });
    
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
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Veuillez entrer une adresse email valide.',
          invalidFields: ['email']
        },
        { status: 400 }
      );
    }
    
    // Format email content
    const subject = 'Nouvelle demande de partenariat';
    
    const text = `
      Nouvelle demande de partenariat:
      
      Nom de l'entreprise: ${body.companyName}
      SIRET: ${body.siret || 'Non fourni'}
      Adresse: ${body.address || 'Non fournie'}
      Ville: ${body.city || 'Non fournie'}
      Services proposés: ${body.services || 'Non spécifiés'}
      
      Contact:
      Nom: ${body.contactName || 'Non fourni'}
      Prénom: ${body.contactFirstName || 'Non fourni'}
      Email: ${body.email}
      Téléphone: ${body.phone}
      
      Projets réalisés:
      ${body.project1Title ? `1. ${body.project1Title} (${body.project1Date || 'Date non spécifiée'}) - ${body.project1Location || 'Lieu non spécifié'} - ${body.project1Amount || 'Montant non spécifié'}` : 'Aucun projet spécifié'}
      ${body.project2Title ? `\n2. ${body.project2Title} (${body.project2Date || 'Date non spécifiée'}) - ${body.project2Location || 'Lieu non spécifié'} - ${body.project2Amount || 'Montant non spécifié'}` : ''}
      ${body.project3Title ? `\n3. ${body.project3Title} (${body.project3Date || 'Date non spécifiée'}) - ${body.project3Location || 'Lieu non spécifié'} - ${body.project3Amount || 'Montant non spécifié'}` : ''}
    `;
    
    const html = `
      <h2>Nouvelle demande de partenariat</h2>
      <h3>Informations sur l'entreprise</h3>
      <p><strong>Nom de l'entreprise:</strong> ${body.companyName}</p>
      <p><strong>SIRET:</strong> ${body.siret || 'Non fourni'}</p>
      <p><strong>Adresse:</strong> ${body.address || 'Non fournie'}</p>
      <p><strong>Ville:</strong> ${body.city || 'Non fournie'}</p>
      <p><strong>Services proposés:</strong> ${body.services || 'Non spécifiés'}</p>
      
      <h3>Contact</h3>
      <p><strong>Nom:</strong> ${body.contactName || 'Non fourni'}</p>
      <p><strong>Prénom:</strong> ${body.contactFirstName || 'Non fourni'}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Téléphone:</strong> ${body.phone}</p>
      
      <h3>Projets réalisés</h3>
      ${body.project1Title ? `<p><strong>1.</strong> ${body.project1Title} (${body.project1Date || 'Date non spécifiée'}) - ${body.project1Location || 'Lieu non spécifié'} - ${body.project1Amount || 'Montant non spécifié'}</p>` : '<p>Aucun projet spécifié</p>'}
      ${body.project2Title ? `<p><strong>2.</strong> ${body.project2Title} (${body.project2Date || 'Date non spécifiée'}) - ${body.project2Location || 'Lieu non spécifié'} - ${body.project2Amount || 'Montant non spécifié'}</p>` : ''}
      ${body.project3Title ? `<p><strong>3.</strong> ${body.project3Title} (${body.project3Date || 'Date non spécifiée'}) - ${body.project3Location || 'Lieu non spécifié'} - ${body.project3Amount || 'Montant non spécifié'}</p>` : ''}
    `;

    // Prepare attachments
    const attachments = [];
    
    // Add insurance document if provided
    if (body.insurance && body.insurance instanceof File) {
      const insuranceBuffer = Buffer.from(await body.insurance.arrayBuffer());
      attachments.push({
        filename: `assurance_${body.companyName}.${body.insurance.name.split('.').pop()}`,
        content: insuranceBuffer
      });
    }
    
    // Add fiscal certificate if provided
    if (body.fiscalCertificate && body.fiscalCertificate instanceof File) {
      const fiscalBuffer = Buffer.from(await body.fiscalCertificate.arrayBuffer());
      attachments.push({
        filename: `attestation_fiscale_${body.companyName}.${body.fiscalCertificate.name.split('.').pop()}`,
        content: fiscalBuffer
      });
    }
    
    // Add kbis if provided
    if (body.kbis && body.kbis instanceof File) {
      const kbisBuffer = Buffer.from(await body.kbis.arrayBuffer());
      attachments.push({
        filename: `kbis_${body.companyName}.${body.kbis.name.split('.').pop()}`,
        content: kbisBuffer
      });
    }
    
    try {
      // Try to send email but don't block success response on failure
      const info = await sendEmail({
        subject,
        text,
        html,
        attachments: attachments.length > 0 ? attachments : undefined
      });
      console.log('Partenariat form email sent successfully:', info.messageId);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande de partenariat a été envoyée avec succès',
        messageId: info.messageId
      });
    } catch (emailError) {
      // Log email sending error but still return success to the client
      console.error('Error sending email but form data was valid:', emailError);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande de partenariat a été reçue avec succès',
        emailSent: false
      });
    }
  } catch (error) {
    console.error('Error processing partenariat form:', error);
    
    // Get more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error details:', { message: errorMessage, stack: errorStack });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors du traitement de votre demande de partenariat. Veuillez réessayer plus tard.', 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}
