import { db } from '../../../../../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userId, productId, name, price, quantity, image } = await req.json();

  console.log('Cart', userId, productId, name, price, quantity, image);
  if (!userId || !productId || !name || !price || !quantity) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  console.log(productId, name, price, quantity, image);
  try {
    const cartRef = collection(db, 'users', userId, 'cart');
    await addDoc(cartRef, {
      productId,
      name,
      price,
      quantity,
      image,
      addedAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Item added to cart' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json(
      { error: 'Failed to add to cart' },
      { status: 500 }
    );
  }
}
