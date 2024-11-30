import { db } from '../../../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const userId = params.userId;
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const cartRef = collection(db, 'users', userId, 'cart');
    const cartSnap = await getDocs(cartRef);
    const cartItems = cartSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({ cartItems }, { status: 200 });
  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cart' },
      { status: 500 }
    );
  }
}
