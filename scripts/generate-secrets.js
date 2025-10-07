// Run this script to generate secure secrets: node scripts/generate-secrets.js
const crypto = require('crypto');

function generateSecureSecret(length = 64) {
  return crypto.randomBytes(length).toString('hex');
}

console.log('=== SECURE SECRETS FOR YOUR .env.local ===\n');
console.log('JWT_SECRET=' + generateSecureSecret(32));
console.log('NEXTAUTH_SECRET=' + generateSecureSecret(32));
console.log('\nCopy these values to your .env.local file');
console.log('Keep these secrets secure and never commit them to version control!');