import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Using OVH SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'ssl0.ovh.net',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true' || false,
      auth: {
        user: process.env.EMAIL_USER || 'info@damad-ascenseurs.fr',
        pass: process.env.EMAIL_PASSWORD || '', // Password should be set in environment variables
      },
    });

    // Format the message based on form type
    let subject = 'Nouveau message depuis le site web';
    let text = '';
    let html = '';

    if (body.formType === 'contact') {
      subject = 'Nouvelle demande de contact';
      
      // Handle custom service if "other" is selected
      const serviceText = body.service === 'other' ? `${body.customService} (personnalisé)` : getServiceName(body.service);
      
      text = `
        Nouvelle demande de contact:
        
        Nom: ${body.firstName} ${body.lastName}
        Email: ${body.email}
        Téléphone: ${body.phone || 'Non fourni'}
        Société: ${body.company || 'Non fournie'}
        Code postal: ${body.postalCode}
        Ville: ${body.city}
        Type de bâtiment: ${getBuildingTypeName(body.buildingType)}
        Service concerné: ${serviceText}
        
        Message:
        ${body.message}
        
        Jours de contact préférés: ${body.bestContactDays ? formatDates(body.bestContactDays) : 'Non spécifié'}
        Heure de contact préférée: ${body.bestContactTime ? formatTime(body.bestContactTime) : 'Non spécifiée'}
      `;
      
      html = `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Téléphone:</strong> ${body.phone || 'Non fourni'}</p>
        <p><strong>Société:</strong> ${body.company || 'Non fournie'}</p>
        <p><strong>Code postal:</strong> ${body.postalCode}</p>
        <p><strong>Ville:</strong> ${body.city}</p>
        <p><strong>Type de bâtiment:</strong> ${getBuildingTypeName(body.buildingType)}</p>
        <p><strong>Service concerné:</strong> ${serviceText}</p>
        <p><strong>Message:</strong><br>${body.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Jours de contact préférés:</strong> ${body.bestContactDays ? formatDates(body.bestContactDays) : 'Non spécifié'}</p>
        <p><strong>Heure de contact préférée:</strong> ${body.bestContactTime ? formatTime(body.bestContactTime) : 'Non spécifiée'}</p>
      `;
    } else if (body.formType === 'devis') {
      subject = 'Nouvelle demande de devis';
      
      text = `
        Nouvelle demande de devis:
        
        Type de service: ${getServiceTypeForDevis(body.serviceType)}
        Type de bâtiment: ${getBuildingTypeForDevis(body.buildingType)}
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
      
      html = `
        <h2>Nouvelle demande de devis</h2>
        <h3>Informations sur le projet</h3>
        <p><strong>Type de service:</strong> ${getServiceTypeForDevis(body.serviceType)}</p>
        <p><strong>Type de bâtiment:</strong> ${getBuildingTypeForDevis(body.buildingType)}</p>
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
    } else if (body.formType === 'intervention') {
      subject = 'Nouvelle demande d\'intervention';
      
      text = `
        Nouvelle demande d'intervention:
        
        Nom: ${body.name}
        Email: ${body.email}
        Téléphone: ${body.phone}
        Adresse: ${body.address}
        Type d'appareil: ${body.appareilType}
        Urgence: ${body.urgency === 'urgent' ? 'Urgente' : 'Normale'}
        Type de problème: ${body.issueType}
        
        Description du problème:
        ${body.description}
        
        Date préférée: ${body.preferredDate || 'Non spécifiée'}
        Heure préférée: ${body.preferredTime || 'Non spécifiée'}
      `;
      
      html = `
        <h2>Nouvelle demande d'intervention</h2>
        <p><strong>Nom:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Téléphone:</strong> ${body.phone}</p>
        <p><strong>Adresse:</strong> ${body.address}</p>
        <p><strong>Type d'appareil:</strong> ${body.appareilType}</p>
        <p><strong>Urgence:</strong> ${body.urgency === 'urgent' ? '<span style="color: red;">Urgente</span>' : 'Normale'}</p>
        <p><strong>Type de problème:</strong> ${body.issueType}</p>
        <p><strong>Description du problème:</strong><br>${body.description.replace(/\n/g, '<br>')}</p>
        <p><strong>Date préférée:</strong> ${body.preferredDate || 'Non spécifiée'}</p>
        <p><strong>Heure préférée:</strong> ${body.preferredTime || 'Non spécifiée'}</p>
      `;
    } else if (body.formType === 'recruitment') {
      subject = 'Nouvelle candidature';
      
      text = `
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
      
      html = `
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
    } else if (body.formType === 'partenariat') {
      subject = 'Nouvelle demande de partenariat';
      
      text = `
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
      
      html = `
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
    }

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"Site Web DAMAD" <info@damad-ascenseurs.fr>',
      to: process.env.EMAIL_TO || 'info@damad-ascenseurs.fr',
      subject: subject,
      text: text,
      html: html,
      // Add attachments if needed (for application form)
      ...(body.attachments && { attachments: body.attachments }),
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}

// Helper functions
function getServiceName(serviceCode: string): string {
  switch (serviceCode) {
    case 'installation': return 'Installation';
    case 'modernisation': return 'Modernisation';
    case 'maintenance': return 'Maintenance';
    case 'depannage': return 'Dépannage';
    case 'audit': return 'Audit';
    case 'other': return 'Autre';
    default: return serviceCode;
  }
}

function getBuildingTypeName(buildingCode: string): string {
  switch (buildingCode) {
    case 'residential': return 'Résidentiel';
    case 'commercial': return 'Commercial';
    case 'industrial': return 'Industriel';
    case 'public': return 'Établissement public';
    case 'other': return 'Autre';
    default: return buildingCode;
  }
}

function getServiceTypeForDevis(serviceType: string): string {
  switch (serviceType) {
    case 'new': return 'Installation nouvelle';
    case 'modernisation': return 'Modernisation';
    case 'maintenance': return 'Contrat de maintenance';
    default: return serviceType || 'Non spécifié';
  }
}

function getBuildingTypeForDevis(buildingType: string): string {
  switch (buildingType) {
    case 'residential': return 'Résidentiel';
    case 'commercial': return 'Commercial';
    case 'industrial': return 'Industriel';
    case 'public': return 'Établissement public';
    case 'other': return 'Autre';
    default: return buildingType || 'Non spécifié';
  }
}

function formatDates(dates: string[]): string {
  return dates.join(', ');
}

function formatTime(time: string): string {
  return time;
}
