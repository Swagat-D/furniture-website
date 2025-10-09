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

// Send email to multiple recipients
export async function sendEmailToMultiple({ recipients, subject, html, text }) {
  const results = [];
  
  for (const recipient of recipients) {
    try {
      const result = await sendEmail({ to: recipient, subject, html, text });
      results.push({ recipient, ...result });
    } catch (error) {
      results.push({ recipient, success: false, error: error.message });
    }
  }
  
  return results;
}

// Get admin emails from environment variable
export function getAdminEmails() {
  const adminEmails = process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL || '';
  return adminEmails.split(',').map(email => email.trim()).filter(email => email);
}

// Email templates
export const emailTemplates = {
  contactForm: (data) => ({
    subject: `New Inquiry from ${data.fullName} - ${data.inquiryType}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #334155 0%, #475569 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">New Customer Inquiry</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Archik Constructions - Contact Form Submission</p>
        </div>
        
        <div style="background: #ffffff; padding: 30px; margin: 0;">
          <div style="background: #f1f5f9; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
            <h2 style="color: #334155; margin: 0 0 15px 0; font-size: 20px;">Customer Information</h2>
            <div style="display: grid; gap: 10px;">
              <p style="margin: 0; color: #475569;"><strong style="color: #334155;">Name:</strong> ${data.fullName}</p>
              <p style="margin: 0; color: #475569;"><strong style="color: #334155;">Email:</strong> <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></p>
              <p style="margin: 0; color: #475569;"><strong style="color: #334155;">Phone:</strong> <a href="tel:${data.phone}" style="color: #3b82f6; text-decoration: none;">${data.phone}</a></p>
              <p style="margin: 0; color: #475569;"><strong style="color: #334155;">Inquiry Type:</strong> <span style="background: #dbeafe; color: #1d4ed8; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${data.inquiryType}</span></p>
            </div>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #f59e0b;">
            <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 18px;">Subject</h3>
            <p style="margin: 0; color: #92400e; font-weight: 600;">${data.briefSubject}</p>
          </div>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px;">Project Requirements</h3>
            <div style="background: white; padding: 15px; border-radius: 6px; color: #374151; line-height: 1.6;">
              ${data.projectRequirements.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="background: #334155; color: white; padding: 25px; text-align: center; border-radius: 0 0 10px 10px;">
          <h3 style="margin: 0 0 15px 0; color: #f1f5f9;">Action Required</h3>
          <p style="margin: 0 0 15px 0; color: #cbd5e1;">Please respond to this inquiry within 2-4 hours for the best customer experience.</p>
          <div style="display: inline-flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <a href="mailto:${data.email}" style="background: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600;">Reply via Email</a>
            <a href="tel:${data.phone}" style="background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600;">Call Customer</a>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
          <p style="margin: 0;">This email was generated automatically from the Archik Constructions website contact form.</p>
          <p style="margin: 5px 0 0 0;">© 2025 Archik Constructions. All rights reserved.</p>
        </div>
      </div>
    `,
    text: `
NEW CUSTOMER INQUIRY - Archik Constructions

Customer Information:
━━━━━━━━━━━━━━━━━━━━
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Inquiry Type: ${data.inquiryType}

Subject: ${data.briefSubject}

Project Requirements:
━━━━━━━━━━━━━━━━━━━━
${data.projectRequirements}

ACTION REQUIRED:
Please respond to this inquiry within 2-4 hours for the best customer experience.

Contact the customer:
• Email: ${data.email}
• Phone: ${data.phone}

━━━━━━━━━━━━━━━━━━━━
This email was generated from the Archik Constructions website contact form.
© 2025 Archik Constructions. All rights reserved.
    `
  }),

  customerContactConfirmation: (data) => ({
    subject: `Thank you for contacting Archik Constructions - We'll be in touch soon!`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #334155 0%, #475569 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Thank You for Your Inquiry!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message and will respond shortly</p>
        </div>
        
        <div style="background: #ffffff; padding: 30px; margin: 0;">
          <div style="background: #dcfce7; color: #166534; padding: 20px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
            <h2 style="margin: 0 0 10px 0; font-size: 20px;">✅ Message Received Successfully</h2>
            <p style="margin: 0; font-size: 14px;">Reference: INQ-${Date.now()}</p>
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #334155; margin: 0 0 15px 0;">Your Inquiry Details</h3>
            <p style="margin: 0 0 10px 0; color: #475569;"><strong>Subject:</strong> ${data.briefSubject}</p>
            <p style="margin: 0; color: #475569;"><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
          </div>
          
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #1d4ed8; margin: 0 0 15px 0;">What happens next?</h3>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <span style="background: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 12px; font-weight: bold;">1</span>
              <p style="margin: 0; color: #1e40af;">Our team will review your requirements within 2-4 hours</p>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <span style="background: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 12px; font-weight: bold;">2</span>
              <p style="margin: 0; color: #1e40af;">We'll call or email you to discuss your project in detail</p>
            </div>
            <div style="display: flex; align-items: center;">
              <span style="background: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 12px; font-weight: bold;">3</span>
              <p style="margin: 0; color: #1e40af;">If needed, we'll schedule a free consultation at your convenience</p>
            </div>
          </div>
          
          <div style="background: #fef3c7; border: 1px solid #fbbf24; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #92400e; margin: 0 0 10px 0;">Need Immediate Assistance?</h3>
            <p style="color: #92400e; margin: 0 0 15px 0;">For urgent inquiries, feel free to contact us directly:</p>
            <div style="display: inline-flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
              <a href="tel:+919583530095" style="background: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600;">📞 Call Now</a>
              <a href="https://wa.me/919583530095" style="background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600;">💬 WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
          <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">Thank you for choosing Archik Constructions for your furniture and interior design needs!</p>
          <p style="margin: 0; color: #64748b; font-size: 12px;">© 2025 Archik Constructions. All rights reserved.</p>
        </div>
      </div>
    `,
    text: `
Thank you for contacting Archik Constructions!

✅ Message Received Successfully
Reference: INQ-${Date.now()}

Your Inquiry Details:
━━━━━━━━━━━━━━━━━━━━
Subject: ${data.briefSubject}
Inquiry Type: ${data.inquiryType}

What happens next?
━━━━━━━━━━━━━━━━━━━━
1. Our team will review your requirements within 2-4 hours
2. We'll call or email you to discuss your project in detail  
3. If needed, we'll schedule a free consultation at your convenience

Need Immediate Assistance?
━━━━━━━━━━━━━━━━━━━━
For urgent inquiries, contact us directly:
• Phone: +91 9583530095
• WhatsApp: +91 9583530095

Thank you for choosing Archik Constructions for your furniture and interior design needs!

© 2025 Archik Constructions. All rights reserved.
    `
  }),

  orderConfirmation: (data) => ({
    subject: `New Order Received - Order #${data.orderId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #334155 0%, #475569 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">New Order Received</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Order #${data.orderId}</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #334155; margin-top: 0;">Customer Information</h2>
            <p><strong>Name:</strong> ${data.customerName}</p>
            <p><strong>Email:</strong> ${data.customerEmail}</p>
            <p><strong>Phone:</strong> ${data.customerPhone || 'Not provided'}</p>
            <p><strong>Total Amount:</strong> <span style="color: #059669; font-size: 18px; font-weight: bold;">₹${data.totalAmount.toLocaleString('en-IN')}</span></p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #334155; margin-top: 0;">Order Items</h3>
            ${data.items.map(item => `
              <div style="border-bottom: 1px solid #e2e8f0; padding: 15px 0; display: flex; justify-content: space-between;">
                <div>
                  <p style="margin: 0; font-weight: 600; color: #334155;">${item.name}</p>
                  <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Quantity: ${item.quantity}</p>
                </div>
                <div style="text-align: right;">
                  <p style="margin: 0; font-weight: 600; color: #334155;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">₹${item.price.toLocaleString('en-IN')} each</p>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px;">
            <h3 style="color: #334155; margin-top: 0;">Delivery Information</h3>
            <p style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; margin: 0;">
              ${data.shippingAddress}
            </p>
            ${data.notes ? `
              <h4 style="color: #334155; margin-bottom: 10px; margin-top: 20px;">Special Instructions</h4>
              <p style="background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin: 0;">
                ${data.notes}
              </p>
            ` : ''}
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
          <p>Please process this order as soon as possible and contact the customer within 24 hours.</p>
          <p>© 2025 Archik Constructions. All rights reserved.</p>
        </div>
      </div>
    `,
    text: `
New Order Received - Order #${data.orderId}

Customer Information:
- Name: ${data.customerName}
- Email: ${data.customerEmail}
- Phone: ${data.customerPhone || 'Not provided'}
- Total Amount: ₹${data.totalAmount.toLocaleString('en-IN')}

Order Items:
${data.items.map(item => `- ${item.name} (Qty: ${item.quantity}, Price: ₹${item.price.toLocaleString('en-IN')})`).join('\n')}

Delivery Address:
${data.shippingAddress}

${data.notes ? `Special Instructions:\n${data.notes}` : ''}

Please process this order as soon as possible.
    `
  }),

  customerOrderConfirmation: (data) => ({
    subject: `Order Confirmation - Your Order #${data.orderId} has been received!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #334155 0%, #475569 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Thank You for Your Order!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Order #${data.orderId}</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <div style="background: #dcfce7; color: #166534; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 18px;">✅ Order Confirmed</h2>
              <p style="margin: 10px 0 0 0;">We've received your order and will contact you within 24 hours</p>
            </div>
            <p style="color: #334155; font-size: 16px; margin: 0;">Order Total: <span style="color: #059669; font-size: 24px; font-weight: bold;">₹${data.totalAmount.toLocaleString('en-IN')}</span></p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #334155; margin-top: 0;">Order Summary</h3>
            ${data.items.map(item => `
              <div style="border-bottom: 1px solid #e2e8f0; padding: 15px 0; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <p style="margin: 0; font-weight: 600; color: #334155;">${item.name}</p>
                  <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Quantity: ${item.quantity}</p>
                </div>
                <div style="text-align: right;">
                  <p style="margin: 0; font-weight: 600; color: #334155;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
              </div>
            `).join('')}
            <div style="padding: 15px 0; display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #334155; margin-top: 10px;">
              <p style="margin: 0; font-weight: bold; color: #334155; font-size: 18px;">Total Amount</p>
              <p style="margin: 0; font-weight: bold; color: #059669; font-size: 18px;">₹${data.totalAmount.toLocaleString('en-IN')}</p>
            </div>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #334155; margin-top: 0;">Delivery Information</h3>
            <p style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; margin: 0;">
              <strong>Delivery Address:</strong><br>
              ${data.shippingAddress}
            </p>
            <div style="margin-top: 20px; display: flex; justify-content: space-between; text-align: center;">
              <div style="flex: 1; padding: 0 10px;">
                <div style="background: #dcfce7; color: #166534; padding: 10px; border-radius: 6px;">
                  <p style="margin: 0; font-weight: bold;">📦 Free Delivery</p>
                  <p style="margin: 5px 0 0 0; font-size: 12px;">Included in price</p>
                </div>
              </div>
              <div style="flex: 1; padding: 0 10px;">
                <div style="background: #dbeafe; color: #1d4ed8; padding: 10px; border-radius: 6px;">
                  <p style="margin: 0; font-weight: bold;">🔧 Free Installation</p>
                  <p style="margin: 5px 0 0 0; font-size: 12px;">Professional setup</p>
                </div>
              </div>
              <div style="flex: 1; padding: 0 10px;">
                <div style="background: #fef3c7; color: #92400e; padding: 10px; border-radius: 6px;">
                  <p style="margin: 0; font-weight: bold;">⏰ 5-7 Days</p>
                  <p style="margin: 5px 0 0 0; font-size: 12px;">Estimated delivery</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1d4ed8; margin-top: 0;">What happens next?</h3>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <span style="background: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 12px; font-weight: bold;">1</span>
              <p style="margin: 0; color: #1e40af;">Our team will call you within 24 hours to confirm your order</p>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <span style="background: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 12px; font-weight: bold;">2</span>
              <p style="margin: 0; color: #1e40af;">We'll arrange convenient payment options (UPI, Bank Transfer, COD)</p>
            </div>
            <div style="display: flex; align-items: center;">
              <span style="background: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 12px; font-weight: bold;">3</span>
              <p style="margin: 0; color: #1e40af;">Your furniture will be delivered and installed by our expert team</p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
          <p>Need help? Contact us at <a href="mailto:${process.env.SMTP_USER}" style="color: #3b82f6;">${process.env.SMTP_USER}</a> or call us at +91 95835 30095</p>
          <p>© 2025 Archik Constructions. All rights reserved.</p>
        </div>
      </div>
    `,
    text: `
Thank You for Your Order! - Order #${data.orderId}

✅ Order Confirmed
We've received your order and will contact you within 24 hours.

Order Total: ₹${data.totalAmount.toLocaleString('en-IN')}

Order Summary:
${data.items.map(item => `- ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}`).join('\n')}

Total Amount: ₹${data.totalAmount.toLocaleString('en-IN')}

Delivery Address:
${data.shippingAddress}

What happens next?
1. Our team will call you within 24 hours to confirm your order
2. We'll arrange convenient payment options (UPI, Bank Transfer, COD)
3. Your furniture will be delivered and installed by our expert team

• Free Delivery & Installation Included
• Estimated Delivery: 5-7 business days
• 24/7 Customer Support Available

Need help? Contact us at ${process.env.SMTP_USER} or call +91 95835 30095

© 2025 Archik Constructions. All rights reserved.
    `
  })
};