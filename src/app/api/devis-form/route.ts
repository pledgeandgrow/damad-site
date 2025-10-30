import { NextResponse } from 'next/server';
import { sendEmail, formatFormDataToHtml } from '@/lib/email';
import { 
  getServiceTypeForDevis, 
  getBuildingTypeForDevis 
} from '@/utils/email';

export async function POST(request: Request) {
  try {
    console.log('Received devis form submission');
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'address', 'postalCode', 'city', 'serviceType', 'buildingType'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    // Special validation for 'other' service type
    if (body.serviceType === 'other' && !body.customServiceType) {
      missingFields.push('customServiceType');
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
    
    // Handle custom service type if "other" is selected
    const serviceTypeText = body.serviceType === 'other' ? `${body.customServiceType} (personnalisé)` : getServiceTypeForDevis(body.serviceType);
    
    // Handle custom building type if "other" is selected
    const buildingTypeText = body.buildingType === 'other' ? `${body.customBuildingType} (personnalisé)` : getBuildingTypeForDevis(body.buildingType);
    
    // Prepare email data
    const emailData: Record<string, unknown> = {
      'Type de service': serviceTypeText,
      'Type de bâtiment': buildingTypeText,
      'Nombre d\'étages': body.floors,
      'Nombre d\'arrêts': body.stops,
      'Capacité': `${body.capacity} personnes`,
      'Ascenseur existant': body.hasExistingElevator ? 'Oui' : 'Non',
    };
    
    if (body.hasExistingElevator) {
      emailData['Âge de l\'ascenseur existant'] = body.existingElevatorAge;
    }
    
    // Contact information
    emailData['Nom'] = body.name;
    emailData['Email'] = body.email;
    emailData['Téléphone'] = body.phone || 'Non fourni';
    emailData['Société'] = body.company || 'Non fournie';
    emailData['Adresse'] = body.address;
    emailData['Code postal'] = body.postalCode;
    emailData['Ville'] = body.city;
    emailData['Message'] = body.message || 'Aucun message';

    try {
      // Send email via Nodemailer
      const htmlContent = formatFormDataToHtml(emailData);
      await sendEmail(
        process.env.EMAIL_TO || 'info@dmd-ascenseur.com',
        'Nouvelle demande de devis',
        htmlContent,
        body.email
      );
      
      console.log('Devis form email sent successfully via Nodemailer');
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande de devis a été envoyée avec succès'
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
    console.error('Error processing devis form:', error);
    
    // Get more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error details:', { message: errorMessage, stack: errorStack });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors du traitement de votre demande de devis. Veuillez réessayer plus tard.', 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}
