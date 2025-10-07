import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('Please define the JWT_SECRET environment variable inside .env.local');
}

export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function extractTokenFromHeaders(headers) {
  // Handle both Headers object and plain object
  let authHeader;
  if (headers.get && typeof headers.get === 'function') {
    authHeader = headers.get('authorization') || headers.get('Authorization');
  } else if (headers.authorization) {
    authHeader = headers.authorization;
  } else if (headers.Authorization) {
    authHeader = headers.Authorization;
  }
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  
  return null;
}

export function extractTokenFromCookies(cookies) {
  return cookies.token || null;
}