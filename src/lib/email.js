import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({ to, subject, html, text }) {
  try {
    const info = await transporter.sendMail({
      from: `"Archik Constructions" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Email sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

// Email templates
export const emailTemplates = {
  contactForm: (data) => ({
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${data.subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from the Archik Constructions website contact form.
        </p>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject || 'General Inquiry'}

Message:
${data.message}
    `
  }),

  orderConfirmation: (data) => ({
    subject: `New Order Received - Order #${data.orderId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Order Received</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Order ID:</strong> ${data.orderId}</p>
          <p><strong>Customer:</strong> ${data.customerName}</p>
          <p><strong>Email:</strong> ${data.customerEmail}</p>
          <p><strong>Phone:</strong> ${data.customerPhone || 'Not provided'}</p>
          <p><strong>Total Amount:</strong> ₹${data.totalAmount}</p>
          
          <h3>Order Items:</h3>
          <div style="background: white; padding: 15px; border-radius: 3px;">
            ${data.items.map(item => `
              <div style="border-bottom: 1px solid #eee; padding: 10px 0;">
                <p><strong>${item.name}</strong></p>
                <p>Quantity: ${item.quantity} | Price: ₹${item.price}</p>
              </div>
            `).join('')}
          </div>
          
          <h3>Shipping Address:</h3>
          <div style="background: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
            ${data.shippingAddress}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Please process this order as soon as possible.
        </p>
      </div>
    `,
    text: `
New Order Received

Order ID: ${data.orderId}
Customer: ${data.customerName}
Email: ${data.customerEmail}
Phone: ${data.customerPhone || 'Not provided'}
Total Amount: ₹${data.totalAmount}

Order Items:
${data.items.map(item => `- ${item.name} (Qty: ${item.quantity}, Price: ₹${item.price})`).join('\n')}

Shipping Address:
${data.shippingAddress}
    `
  })
};