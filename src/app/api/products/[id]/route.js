import { NextResponse } from 'next/server';
import { getProductById } from '@/data/products';

// GET /api/products/[id] - Get single product
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    const product = getProductById(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { product },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get product error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}