import { NextResponse } from 'next/server';
import { sendEmail, formatFormDataToHtml } from '@/lib/email';
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
    
    // Prepare email data
    const emailData = {
      'Nom': `${body.firstName} ${body.lastName}`,
      'Email': body.email,
      'Téléphone': body.phone || 'Non fourni',
      'Société': body.company || 'Non fournie',
      'Code postal': body.postalCode,
      'Ville': body.city,
      'Type de bâtiment': buildingTypeText,
      'Service concerné': serviceText,
      'Message': body.message,
      'Jours de contact préférés': body.bestContactDays ? formatDates(body.bestContactDays) : 'Non spécifié',
      'Heure de contact préférée': body.bestContactTime ? formatTime(body.bestContactTime) : 'Non spécifiée',
    };

    try {
      // Send email via Nodemailer
      const htmlContent = formatFormDataToHtml(emailData);
      await sendEmail(
        process.env.EMAIL_TO || 'info@dmd-ascenseur.com',
        'Nouvelle demande de contact',
        htmlContent,
        body.email
      );
      
      console.log('Contact form email sent successfully via Nodemailer');
      return NextResponse.json({ 
        success: true, 
        message: 'Votre message a été envoyé avec succès'
      });
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
