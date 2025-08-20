import { NextResponse } from 'next/server';
import { 
  sendEmail, 
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
    
    // Format email content
    const subject = 'Nouvelle demande de devis';
    
    const text = `
      Nouvelle demande de devis:
      
      Type de service: ${serviceTypeText}
      Type de bâtiment: ${buildingTypeText}
      Nombre d'étages: ${body.floors}
      Nombre d'arrêts: ${body.stops}
      Capacité: ${body.capacity} personnes
      Ascenseur existant: ${body.hasExistingElevator ? 'Oui' : 'Non'}
      ${body.hasExistingElevator ? `Âge de l'ascenseur existant: ${body.existingElevatorAge}` : ''}
      
      Informations de contact:
      Nom: ${body.name}
      Email: ${body.email}
      Téléphone: ${body.phone || 'Non fourni'}
      Société: ${body.company || 'Non fournie'}
      Adresse: ${body.address}
      Code postal: ${body.postalCode}
      Ville: ${body.city}
      
      Message:
      ${body.message || 'Aucun message'}
    `;
    
    const html = `
      <h2>Nouvelle demande de devis</h2>
      <h3>Informations sur le projet</h3>
      <p><strong>Type de service:</strong> ${serviceTypeText}</p>
      <p><strong>Type de bâtiment:</strong> ${buildingTypeText}</p>
      <p><strong>Nombre d'étages:</strong> ${body.floors}</p>
      <p><strong>Nombre d'arrêts:</strong> ${body.stops}</p>
      <p><strong>Capacité:</strong> ${body.capacity} personnes</p>
      <p><strong>Ascenseur existant:</strong> ${body.hasExistingElevator ? 'Oui' : 'Non'}</p>
      ${body.hasExistingElevator ? `<p><strong>Âge de l'ascenseur existant:</strong> ${body.existingElevatorAge}</p>` : ''}
      
      <h3>Informations de contact</h3>
      <p><strong>Nom:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Téléphone:</strong> ${body.phone || 'Non fourni'}</p>
      <p><strong>Société:</strong> ${body.company || 'Non fournie'}</p>
      <p><strong>Adresse:</strong> ${body.address}</p>
      <p><strong>Code postal:</strong> ${body.postalCode}</p>
      <p><strong>Ville:</strong> ${body.city}</p>
      
      <p><strong>Message:</strong><br>${(body.message || 'Aucun message').replace(/\n/g, '<br>')}</p>
    `;

    try {
      // Try to send email but don't block success response on failure
      const info = await sendEmail({
        subject,
        text,
        html
      });
      console.log('Devis form email sent successfully:', info.messageId);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande de devis a été envoyée avec succès',
        messageId: info.messageId
      });
    } catch (emailError) {
      // Log email sending error but still return success to the client
      console.error('Error sending email but form data was valid:', emailError);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Votre demande de devis a été reçue avec succès',
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
