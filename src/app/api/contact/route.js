import { NextResponse } from 'next/server';
import { sendEmail, sendEmailToMultiple, emailTemplates, getAdminEmails } from '@/lib/email';

export async function POST(request) {
  try {
    const { fullName, email, phone, inquiryType, briefSubject, projectRequirements } = await request.json();

    // Validate input
    if (!fullName || !email || !phone || !inquiryType || !briefSubject || !projectRequirements) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData = {
      fullName,
      email,
      phone,
      inquiryType,
      briefSubject,
      projectRequirements
    };

    // Send email to multiple admins
    const adminEmails = getAdminEmails();
    if (adminEmails.length === 0) {
      console.warn('No admin emails configured');
      return NextResponse.json(
        { error: 'Email configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    const template = emailTemplates.contactForm(emailData);
    const results = await sendEmailToMultiple({
      recipients: adminEmails,
      subject: template.subject,
      html: template.html,
      text: template.text
    });

    // Check if at least one email was sent successfully
    const successfulEmails = results.filter(result => result.success);
    if (successfulEmails.length === 0) {
      console.error('Failed to send contact emails to any admin:', results);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    // Log results
    results.forEach(result => {
      if (result.success) {
        console.log(`Contact email sent successfully to ${result.recipient}`);
      } else {
        console.error(`Failed to send contact email to ${result.recipient}:`, result.error);
      }
    });

    // Send confirmation email to customer
    const customerTemplate = emailTemplates.customerContactConfirmation(emailData);
    const customerEmailResult = await sendEmail({
      to: email,
      subject: customerTemplate.subject,
      html: customerTemplate.html,
      text: customerTemplate.text
    });

    if (!customerEmailResult.success) {
      console.error('Failed to send customer confirmation email:', customerEmailResult.error);
      // Don't fail if customer email fails, admin emails were sent successfully
    } else {
      console.log('Customer confirmation email sent successfully');
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully! We will get back to you within 24 hours.',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}