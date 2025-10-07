import { NextResponse } from 'next/server';
import { 
  getAllProducts, 
  getFeaturedProducts, 
  getProductsByCategory,
  searchProducts,
  getProductsPaginated 
} from '@/data/products';

// GET /api/products - Get all products with optional filtering
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;

    let products = [];

    // Apply filters
    if (featured === 'true') {
      products = getFeaturedProducts();
    } else if (category) {
      products = getProductsByCategory(category);
    } else if (search) {
      products = searchProducts(search);
    } else {
      // Use pagination for all products
      const result = getProductsPaginated(page, limit);
      return NextResponse.json(result, { status: 200 });
    }

    // Apply pagination to filtered results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(products.length / limit),
      totalProducts: products.length,
      hasNextPage: endIndex < products.length,
      hasPrevPage: page > 1,
    };

    return NextResponse.json(
      {
        products: paginatedProducts,
        pagination,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get products error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}