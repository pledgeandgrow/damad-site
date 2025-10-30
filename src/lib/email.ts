import nodemailer from 'nodemailer';

// Create transporter for sending emails
export const createTransporter = () => {
  // Log configuration (without sensitive data)
  console.log('Creating email transporter with config:', {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    userConfigured: !!process.env.EMAIL_USER,
    passwordConfigured: !!process.env.EMAIL_PASSWORD,
  });

  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('Missing email configuration:', {
      EMAIL_HOST: process.env.EMAIL_HOST ? '✓' : '✗ MISSING',
      EMAIL_USER: process.env.EMAIL_USER ? '✓' : '✗ MISSING',
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? '✓' : '✗ MISSING',
      EMAIL_PORT: process.env.EMAIL_PORT ? '✓' : '✗ MISSING',
    });
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '465'),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Send email helper function
export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  replyTo?: string
) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject,
      html,
      replyTo: replyTo || process.env.EMAIL_USER,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Format form data to HTML email
export const formatFormDataToHtml = (data: Record<string, unknown>): string => {
  const rows = Object.entries(data)
    .map(
      ([key, value]) =>
        `<tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">${key}</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${
            Array.isArray(value) ? value.join(', ') : value || 'N/A'
          }</td>
        </tr>`
    )
    .join('');

  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          table { border-collapse: collapse; width: 100%; margin-top: 20px; }
          th { background-color: #0046fe; color: white; padding: 12px; text-align: left; }
          td { padding: 12px; border: 1px solid #ddd; }
          tr:nth-child(even) { background-color: #f9f9f9; }
        </style>
      </head>
      <body>
        <h2>Nouvelle soumission de formulaire</h2>
        <table>
          <thead>
            <tr>
              <th>Champ</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </body>
    </html>
  `;
};
