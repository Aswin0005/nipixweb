'use server';
import { auth } from '../../../../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return NextResponse.json(
      { message: 'Login successful', success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
