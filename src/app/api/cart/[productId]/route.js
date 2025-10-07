import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth-middleware';

// PUT /api/cart/[productId] - Update item quantity
async function updateCartItemHandler(request, { params }) {
  try {
    const user = request.user;
    const { productId } = params;
    const { quantity } = await request.json();

    if (!quantity || quantity < 1) {
      return NextResponse.json(
        { error: 'Quantity must be at least 1' },
        { status: 400 }
      );
    }

    await user.updateCartItemQuantity(productId, quantity);

    return NextResponse.json(
      {
        message: 'Cart item updated successfully',
        cart: user.cart,
        total: user.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update cart item error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/cart/[productId] - Remove item from cart
async function removeCartItemHandler(request, { params }) {
  try {
    const user = request.user;
    const { productId } = params;

    await user.removeFromCart(productId);

    return NextResponse.json(
      {
        message: 'Item removed from cart successfully',
        cart: user.cart,
        total: user.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Remove cart item error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const PUT = requireAuth(updateCartItemHandler);
export const DELETE = requireAuth(removeCartItemHandler);