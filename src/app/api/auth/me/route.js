import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth-middleware';

async function getMeHandler(request) {
  try {
    // User is already attached to request by requireAuth middleware
    const user = request.user;

    return NextResponse.json(
      {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          isVerified: user.isVerified,
          cart: user.cart,
          addresses: user.addresses,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get me error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const GET = requireAuth(getMeHandler);