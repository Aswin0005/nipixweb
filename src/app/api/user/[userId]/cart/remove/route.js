import { db } from '../../../../../../../firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
  try {
    const { userId, cartItemId } = await req.json();

    // Validate the required parameters
    if (!userId || !cartItemId) {
      return NextResponse.json(
        { error: 'User ID and cart item ID are required' },
        { status: 400 }
      );
    }

    // Reference to the specific cart item in Firestore
    const cartItemRef = doc(db, 'users', userId, 'cart', cartItemId);
    await deleteDoc(cartItemRef);

    return NextResponse.json(
      { message: 'Item removed from cart' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error removing item from cart:', error);
    return NextResponse.json(
      { error: 'Failed to remove item' },
      { status: 500 }
    );
  }
}
