import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    await connectDB();
    
    const { email, code } = await request.json();

    // Validate input
    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and reset code are required' },
        { status: 400 }
      );
    }

    // Find user by email and reset code
    const user = await User.findOne({ 
      email: email.toLowerCase(),
      passwordResetToken: code,
      passwordResetExpires: { $gt: new Date() } // Check if code hasn't expired
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired reset code' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Reset code verified successfully', valid: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verify reset code error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}