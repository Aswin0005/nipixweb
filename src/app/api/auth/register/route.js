import { NextResponse } from 'next/server';
import { auth, db } from '../../../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore';

export async function POST(req) {
  const { name, email, password } = await req.json();
  console.log(email, password);

  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // User already exists
      return NextResponse.json(
        { message: 'User already exists', success: false },
        { status: 400 }
      );
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userId = userCredential.user.uid;
    console.log('User created:', userId);

    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, {
      name: name,
      email: email,
      role: 'user',
    });

    return NextResponse.json(
      { message: 'User created and stored successfully', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
