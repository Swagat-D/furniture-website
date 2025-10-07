import { verifyToken, extractTokenFromHeaders } from '@/lib/jwt';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function authenticateUser(request) {
  try {
    await connectDB();
    
    // Only extract token from Authorization header (no cookies)
    const token = extractTokenFromHeaders(request.headers);
    
    if (!token) {
      return { user: null, error: 'No token provided' };
    }

    // Verify token
    const decoded = verifyToken(token);
    
    // Get user from database
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return { user: null, error: 'User not found' };
    }

    return { user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}

export function requireAuth(handler) {
  return async (request, context) => {
    const { user, error } = await authenticateUser(request);
    
    if (!user) {
      return Response.json(
        { error: error || 'Authentication required' },
        { status: 401 }
      );
    }
    
    // Add user to request context
    request.user = user;
    
    return handler(request, context);
  };
}

export function optionalAuth(handler) {
  return async (request, context) => {
    const { user } = await authenticateUser(request);
    
    // Add user to request context (can be null)
    request.user = user;
    
    return handler(request, context);
  };
}