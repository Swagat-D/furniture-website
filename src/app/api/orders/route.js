import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth-middleware';
import { sendEmail, sendEmailToMultiple, emailTemplates, getAdminEmails } from '@/lib/email';
import { getProductById } from '@/data/products';

async function createOrderHandler(request) {
  try {
    const user = request.user;
    const { 
      items, 
      shippingAddress, 
      billingAddress, 
      phone, 
      notes 
    } = await request.json();

    // Validate input
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      );
    }

    if (!shippingAddress) {
      return NextResponse.json(
        { error: 'Shipping address is required' },
        { status: 400 }
      );
    }

    // Validate items and calculate total
    let totalAmount = 0;
    const validatedItems = [];

    for (const item of items) {
      const product = getProductById(item.productId);
      if (!product) {
        return NextResponse.json(
          { error: `Product ${item.productId} not found` },
          { status: 400 }
        );
      }

      if (!product.inStock) {
        return NextResponse.json(
          { error: `Product ${product.name} is out of stock` },
          { status: 400 }
        );
      }

      const itemTotal = product.price * item.quantity;
      totalAmount += itemTotal;

      validatedItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.image
      });
    }

    // Generate order ID (in production, you might want to use a more sophisticated system)
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Prepare order data for email
    const orderData = {
      orderId,
      customerName: user.name,
      customerEmail: user.email,
      customerPhone: phone,
      totalAmount,
      items: validatedItems,
      shippingAddress: typeof shippingAddress === 'object' 
        ? `${shippingAddress.fullName}\n${shippingAddress.addressLine1}${shippingAddress.addressLine2 ? '\n' + shippingAddress.addressLine2 : ''}\n${shippingAddress.city}, ${shippingAddress.state} - ${shippingAddress.pincode}`
        : shippingAddress,
      billingAddress: billingAddress 
        ? (typeof billingAddress === 'object' 
          ? `${billingAddress.fullName}\n${billingAddress.addressLine1}${billingAddress.addressLine2 ? '\n' + billingAddress.addressLine2 : ''}\n${billingAddress.city}, ${billingAddress.state} - ${billingAddress.pincode}`
          : billingAddress)
        : 'Same as shipping address',
      notes: notes || 'No additional notes'
    };

    // Send order confirmation email to customer
    const customerTemplate = emailTemplates.customerOrderConfirmation(orderData);
    const customerEmailResult = await sendEmail({
      to: user.email,
      subject: customerTemplate.subject,
      html: customerTemplate.html,
      text: customerTemplate.text
    });

    if (!customerEmailResult.success) {
      console.error('Failed to send customer confirmation email:', customerEmailResult.error);
      // Don't fail the order creation if email fails
    } else {
      console.log('Customer confirmation email sent successfully');
    }

    // Send order notification email to multiple admins
    const adminEmails = getAdminEmails();
    if (adminEmails.length > 0) {
      const adminTemplate = emailTemplates.orderConfirmation(orderData);
      const adminEmailResults = await sendEmailToMultiple({
        recipients: adminEmails,
        subject: adminTemplate.subject,
        html: adminTemplate.html,
        text: adminTemplate.text
      });

      console.log('Admin email results:', adminEmailResults);
      
      // Log any failed admin emails
      adminEmailResults.forEach(result => {
        if (!result.success) {
          console.error(`Failed to send admin email to ${result.recipient}:`, result.error);
        } else {
          console.log(`Admin notification email sent successfully to ${result.recipient}`);
        }
      });
    } else {
      console.warn('No admin emails configured');
    }

    // Clear user's cart after successful order
    try {
      await user.clearCart();
    } catch (error) {
      console.error('Failed to clear cart:', error);
      // Don't fail the order if cart clearing fails
    }

    return NextResponse.json(
      {
        message: 'Order placed successfully! You will receive a confirmation call shortly.',
        orderId,
        totalAmount,
        estimatedDelivery: '5-7 business days'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const POST = requireAuth(createOrderHandler);