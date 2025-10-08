import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    await connectDB();
    
    const { email, code, newPassword } = await request.json();

    // Validate input
    if (!email || !code || !newPassword) {
      return NextResponse.json(
        { error: 'Email, reset code, and new password are required' },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
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

    // Update user password and clear reset fields
    // Note: The password will be automatically hashed by the pre-save middleware in the User model
    user.password = newPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    return NextResponse.json(
      { message: 'Password reset successfully. You can now login with your new password.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}