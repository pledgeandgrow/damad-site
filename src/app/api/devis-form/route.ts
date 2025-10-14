import { NextResponse } from 'next/server';
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
    
    // Prepare FormSubmit.co data
    const formData = new URLSearchParams();
    formData.append('_subject', 'Nouvelle demande de devis');
    
    // Project information
    formData.append('Type de service', serviceTypeText);
    formData.append('Type de bâtiment', buildingTypeText);
    formData.append('Nombre d\'étages', body.floors);
    formData.append('Nombre d\'arrêts', body.stops);
    formData.append('Capacité', `${body.capacity} personnes`);
    formData.append('Ascenseur existant', body.hasExistingElevator ? 'Oui' : 'Non');
    if (body.hasExistingElevator) {
      formData.append('Âge de l\'ascenseur existant', body.existingElevatorAge);
    }
    
    // Contact information
    formData.append('Nom', body.name);
    formData.append('Email', body.email);
    formData.append('Téléphone', body.phone || 'Non fourni');
    formData.append('Société', body.company || 'Non fournie');
    formData.append('Adresse', body.address);
    formData.append('Code postal', body.postalCode);
    formData.append('Ville', body.city);
    formData.append('Message', body.message || 'Aucun message');
    
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
        console.log('Devis form email sent successfully via FormSubmit.co');
        return NextResponse.json({ 
          success: true, 
          message: 'Votre demande de devis a été envoyée avec succès'
        });
      } else {
        console.error('FormSubmit.co returned error:', response.status);
        return NextResponse.json({ 
          success: true, 
          message: 'Votre demande de devis a été reçue avec succès',
          emailSent: false
        });
      }
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
