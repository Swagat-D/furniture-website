import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth-middleware';

// GET /api/cart - Get user's cart
async function getCartHandler(request) {
  try {
    const user = request.user;
    
    return NextResponse.json(
      {
        cart: user.cart,
        total: user.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get cart error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/cart - Add item to cart
async function addToCartHandler(request) {
  try {
    const user = request.user;
    const { productId, name, price, image, quantity = 1 } = await request.json();

    if (!productId || !name || !price) {
      return NextResponse.json(
        { error: 'Product ID, name, and price are required' },
        { status: 400 }
      );
    }

    const cartItem = {
      productId,
      name,
      price,
      image,
      quantity: Math.max(1, quantity),
    };

    await user.addToCart(cartItem);

    return NextResponse.json(
      {
        message: 'Item added to cart successfully',
        cart: user.cart,
        total: user.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Add to cart error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/cart - Clear entire cart
async function clearCartHandler(request) {
  try {
    const user = request.user;
    await user.clearCart();

    return NextResponse.json(
      {
        message: 'Cart cleared successfully',
        cart: [],
        total: 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Clear cart error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const GET = requireAuth(getCartHandler);
export const POST = requireAuth(addToCartHandler);
export const DELETE = requireAuth(clearCartHandler);