import { db } from '../../../../../firebaseConfig';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const {
    userId,
    productId,
    name,
    priceDetails,
    customerDetails,
    deliveryDetails,
  } = await req.json();

  if (!userId || !productId || !name || !priceDetails || !customerDetails || !deliveryDetails) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    // Reference to the 'orders' collection
    const ordersRef = collection(db, 'orders');

    // Create the order in the 'orders' collection
    const newOrder = {
      userId,
      productId,
      productName : name,
      priceDetails,
      customerDetails,
      deliveryDetails,
      createdAt: new Date(),
      status: 'Pending',
    };
    const orderDocRef = await addDoc(ordersRef, newOrder);

    // Reference to the user's document
    const userDocRef = doc(db, 'users', userId);

    // Add a reference to the order in the user's document
    await updateDoc(userDocRef, {
      orders: arrayUnion(orderDocRef.id), // Add the order ID to the 'orders' array
    });

    return NextResponse.json(
      { message: 'Order placed successfully', orderId: orderDocRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error placing order:', error);
    return NextResponse.json(
      { error: 'Failed to place order' },
      { status: 500 }
    );
  }
}
