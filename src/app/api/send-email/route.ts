import { NextResponse } from 'next/server';
import { sendEmail, formatFormDataToHtml } from '@/lib/email';

export async function POST(request: Request) {
  try {
    console.log('Received send-email request');
    const body = await request.json();
    const { subject, data, replyTo } = body;

    console.log('Request data:', { subject, hasData: !!data, hasReplyTo: !!replyTo });

    if (!subject || !data) {
      console.warn('Missing required fields:', { subject: !!subject, data: !!data });
      return NextResponse.json(
        { success: false, message: 'Missing required fields: subject and data' },
        { status: 400 }
      );
    }

    // Send email via Nodemailer
    console.log('Formatting HTML content...');
    const htmlContent = formatFormDataToHtml(data);
    
    console.log('Attempting to send email with subject:', subject);
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
      emailSent: true
    });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    const errorCode = error instanceof Error && 'code' in error ? (error as any).code : 'UNKNOWN';
    
    console.error('Error in send-email endpoint:', {
      message: errorMsg,
      code: errorCode,
      fullError: error
    });

    return NextResponse.json(
      {
        success: false,
        message: 'Error sending email',
        error: errorMsg,
        emailSent: false
      },
      { status: 500 }
    );
  }
}
