import { NextResponse } from 'next/server';

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
    
    // Prepare FormSubmit.co data
    const formData = new URLSearchParams();
    formData.append('_subject', 'Nouvelle demande d\'intervention');
    formData.append('Nom', body.name);
    formData.append('Email', body.email);
    formData.append('Téléphone', body.phone);
    formData.append('Adresse', body.address);
    formData.append('Type d\'appareil', body.appareilType);
    formData.append('Urgence', body.urgency === 'urgent' ? 'Urgente' : 'Normale');
    formData.append('Type de problème', body.issueType === 'other' ? `${body.customIssueType} (personnalisé)` : body.issueType);
    formData.append('Description du problème', body.description);
    formData.append('Date préférée', body.preferredDate || 'Non spécifiée');
    formData.append('Heure préférée', body.preferredTime || 'Non spécifiée');
    
    // FormSubmit.co configuration
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      // Send to FormSubmit.co
      const response = await fetch(`https://formsubmit.co/${process.env.FORMSUBMIT_EMAIL || 'info@dmd-ascenseur.fr'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      if (response.ok) {
        console.log('Interventions form email sent successfully via FormSubmit.co');
        return NextResponse.json({ 
          success: true, 
          message: 'Votre demande d\'intervention a été envoyée avec succès'
        });
      } else {
        console.error('FormSubmit.co returned error:', response.status);
        return NextResponse.json({ 
          success: true, 
          message: 'Votre demande d\'intervention a été reçue avec succès',
          emailSent: false
        });
      }
    } catch (emailError) {
      // Log email sending error but still return success to the client
      console.error('Error sending email but form data was valid:', emailError);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande d\'intervention a été reçue avec succès',
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
