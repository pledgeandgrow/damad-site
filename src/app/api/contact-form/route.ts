import { NextResponse } from 'next/server';
import { 
  getBuildingTypeName, 
  getServiceName, 
  formatDates, 
  formatTime 
} from '@/utils/email';

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'postalCode', 'city', 'buildingType', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    // Special validation for 'other' service type
    if (body.service === 'other' && !body.customService) {
      missingFields.push('customService');
    }
    
    // Special validation for 'other' building type
    if (body.buildingType === 'other' && !body.customBuildingType) {
      missingFields.push('customBuildingType');
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
    
    // Handle custom service if "other" is selected
    const serviceText = body.service === 'other' ? `${body.customService} (personnalisé)` : getServiceName(body.service);
    
    // Handle custom building type if "other" is selected
    const buildingTypeText = body.buildingType === 'other' ? `${body.customBuildingType} (personnalisé)` : getBuildingTypeName(body.buildingType);
    
    // Prepare FormSubmit.co data
    const formData = new URLSearchParams();
    formData.append('_subject', 'Nouvelle demande de contact');
    formData.append('Nom', `${body.firstName} ${body.lastName}`);
    formData.append('Email', body.email);
    formData.append('Téléphone', body.phone || 'Non fourni');
    formData.append('Société', body.company || 'Non fournie');
    formData.append('Code postal', body.postalCode);
    formData.append('Ville', body.city);
    formData.append('Type de bâtiment', buildingTypeText);
    formData.append('Service concerné', serviceText);
    formData.append('Message', body.message);
    formData.append('Jours de contact préférés', body.bestContactDays ? formatDates(body.bestContactDays) : 'Non spécifié');
    formData.append('Heure de contact préférée', body.bestContactTime ? formatTime(body.bestContactTime) : 'Non spécifiée');
    
    // FormSubmit.co configuration
    formData.append('_template', 'table'); // Use table format for better readability
    formData.append('_captcha', 'false'); // Disable captcha for API submissions

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
        console.log('Contact form email sent successfully via FormSubmit.co');
        return NextResponse.json({ 
          success: true, 
          message: 'Votre message a été envoyé avec succès'
        });
      } else {
        console.error('FormSubmit.co returned error:', response.status);
        return NextResponse.json({ 
          success: true, 
          message: 'Votre message a été reçu avec succès',
          emailSent: false
        });
      }
    } catch (emailError) {
      // Log email sending error but still return success to the client
      console.error('Error sending email but form data was valid:', emailError);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre message a été reçu avec succès',
        emailSent: false
      });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Get more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error details:', { message: errorMessage, stack: errorStack });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors du traitement de votre message. Veuillez réessayer plus tard.', 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}
