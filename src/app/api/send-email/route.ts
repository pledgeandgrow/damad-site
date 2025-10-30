import { NextResponse } from 'next/server';
import { sendEmail, formatFormDataToHtml } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subject, data, replyTo } = body;

    if (!subject || !data) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: subject and data' },
        { status: 400 }
      );
    }

    // Send email via Nodemailer
    const htmlContent = formatFormDataToHtml(data);
    await sendEmail(
      process.env.EMAIL_TO || 'info@dmd-ascenseur.com',
      subject,
      htmlContent,
      replyTo
    );

    console.log(`Email sent successfully: ${subject}`);
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        success: false,
        message: 'Error sending email',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
