import nodemailer from 'nodemailer';

// Helper functions for formatting data
export function getServiceName(serviceCode: string): string {
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

export function getBuildingTypeName(buildingCode: string): string {
  switch (buildingCode) {
    case 'residential': return 'Résidentiel';
    case 'commercial': return 'Commercial';
    case 'industrial': return 'Industriel';
    case 'public': return 'Établissement public';
    case 'other': return 'Autre';
    default: return buildingCode;
  }
}

export function getServiceTypeForDevis(serviceType: string): string {
  switch (serviceType) {
    case 'installation': return 'Installation nouvelle';
    case 'modernisation': return 'Modernisation';
    case 'maintenance': return 'Contrat de maintenance';
    case 'depannage': return 'Dépannage';
    default: return serviceType || 'Non spécifié';
  }
}

export function getBuildingTypeForDevis(buildingType: string): string {
  switch (buildingType) {
    case 'residential': return 'Résidentiel';
    case 'commercial': return 'Commercial';
    case 'industrial': return 'Industriel';
    case 'public': return 'Établissement public';
    case 'other': return 'Autre';
    default: return buildingType || 'Non spécifié';
  }
}

export function formatDates(dates: string[]): string {
  return dates.join(', ');
}

export function formatTime(time: string): string {
  return time;
}

// Create email transporter with configuration
export function createEmailTransporter() {
  // Check if required environment variables are set
  if (!process.env.EMAIL_PASSWORD) {
    console.error('EMAIL_PASSWORD environment variable is not set');
    throw new Error('Configuration email manquante. Veuillez contacter l\'administrateur.');
  }
  
  // Using Gmail SMTP configuration
  const transportConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: process.env.EMAIL_SECURE === 'false' ? false : true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER || 'info@dmd-ascenseur.fr',
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  };
  
  console.log('SMTP Configuration:', { 
    host: transportConfig.host, 
    port: transportConfig.port, 
    secure: transportConfig.secure,
    user: transportConfig.auth.user
  });
  
  return nodemailer.createTransport(transportConfig);
}

// Define email attachment interface
interface EmailAttachment {
  filename: string;
  content: Buffer | string;
  contentType?: string;
}

// Send email with the given options
export async function sendEmail(options: {
  subject: string;
  text: string;
  html: string;
  attachments?: EmailAttachment[];
}) {
  const transporter = createEmailTransporter();
  
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM || '"Site Web DMD" <info@dmd-ascenseur.fr>',
    to: process.env.EMAIL_TO || 'info@dmd-ascenseur.fr',
    subject: options.subject,
    text: options.text,
    html: options.html,
    ...(options.attachments && { attachments: options.attachments }),
  });
  
  return info;
}
