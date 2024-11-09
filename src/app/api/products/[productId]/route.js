import { db } from '../../../../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    // Extract the product ID from the request params
    const productId = await params.productId;
    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Reference to the specific document in Firestore
    const productRef = doc(db, 'products', productId);

    // Fetch the document data
    const productDoc = await getDoc(productRef);

    // Check if the product exists
    if (!productDoc.exists()) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Extract the data and return it as a response
    const productData = productDoc.data();
    const product = {
      id: productDoc.id,
      ...productData, // Spread all the fields from Firestore document
    };

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
