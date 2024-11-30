import { db } from '../../../../firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    // Fetch all cart items
    const cartRef = collection(db, 'users', userId, 'cart');
    const cartSnap = await getDocs(cartRef);
    const cartItems = cartSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (cartItems.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Create a new order
    const ordersRef = collection(db, 'users', userId, 'orders');
    await addDoc(ordersRef, {
      items: cartItems,
      totalAmount: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      createdAt: new Date(),
    });

    // Clear the cart after checkout
    await Promise.all(cartSnap.docs.map((doc) => deleteDoc(doc.ref)));

    return NextResponse.json(
      { message: 'Checkout successful' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during checkout:', error);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
