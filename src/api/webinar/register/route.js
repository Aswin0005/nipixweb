"use server";
import { db } from '../../../../firebaseConfig';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const { firstname, lastname, email, gender, phoneNumber, paid } =
    await req.json();

  try {
    await db.collection('webinarRegistrations').add({
      firstname,
      lastname: lastname || '',
      email,
      gender,
      phoneNumber,
      paid,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: 'Registration successful',
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
