import { NextResponse } from 'next/server';
import { db } from '../../../../../../firebaseConfig';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,

} from 'firebase/firestore';

export async function POST(req, { params }) {
  const productId = await params.productId;

  try {
    const { userId, reviewTitle, reviewContent, rating } = await req.json();

    if (
      !userId ||
      !reviewTitle ||
      !reviewContent ||
      typeof rating !== 'number'
    ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Fetch the user's name from the users collection
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userName = userSnap.data().name; // Assuming 'name' is the field that contains the user's name

    // Reference to the product's reviews sub-collection
    const reviewsRef = collection(db, 'products', productId, 'reviews');

    const newReview = {
      userId,
      userName, // Store the user's name along with the review
      reviewTitle,
      reviewContent,
      rating,
      createdAt: new Date(),
    };

    await addDoc(reviewsRef, newReview);

    // Reference to the main product document
    const productRef = doc(db, 'products', productId);

    // Get the current product data to recalculate the average rating
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      const productData = productSnap.data();
      const currentReviewCount = productData.reviewCount || 0;
      const currentTotalRating = productData.totalRating || 0;

      // Calculate the new review count and total rating
      const newReviewCount = currentReviewCount + 1;
      const newTotalRating = currentTotalRating + rating;

      // Calculate the new average rating
      const newAverageRating = newTotalRating / newReviewCount;

      // Update the product document with the new values
      await updateDoc(productRef, {
        reviewCount: newReviewCount,
        totalRating: newTotalRating,
        averageRating: newAverageRating,
      });
    } else {
      // If the product does not exist, create initial fields
      await updateDoc(productRef, {
        reviewCount: 1,
        totalRating: rating,
        averageRating: rating,
      });
    }

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

export async function GET(req, { params }) {
  const productId = await params.productId;
  try {
    // Validate productId
    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Reference to the product's reviews sub-collection
    const reviewsRef = collection(db, 'products', productId, 'reviews');

    // Fetch all review documents for the specified product
    const reviewsSnapshot = await getDocs(reviewsRef);

    // Map the fetched documents to an array of review data
    const reviewsData = reviewsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ reviews: reviewsData }, { status: 200 });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
