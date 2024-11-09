import { NextResponse } from 'next/server';
import { db } from '../../../../../../firebaseConfig';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  increment,
} from 'firebase/firestore';

export async function POST(req) {
  const { productId } = req.query;

  try {
    const { userId, reviewText, rating } = req.body;

    if (!userId || !reviewText || typeof rating !== 'number') {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Reference to the product's reviews sub-collection
    const reviewsRef = collection(db, 'products', productId, 'reviews');

    const newReview = {
      userId,
      reviewText,
      rating,
      createdAt: new Date(),
    };

    await addDoc(reviewsRef, newReview);

    // Update the product's average rating and review count
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      reviewCount: increment(1),
      averageRating: increment(rating),
    });

    return NextResponse.json(
      { message: 'Review added successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding review:', error);
    return NextResponse.json(
      { error: 'Failed to add review' },
      { status: 500 }
    );
  }
}
