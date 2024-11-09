import { db } from '../../../../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// Helper function to convert File to Buffer
async function fileToBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = file.stream().getReader();
    const chunks = [];
    function pump() {
      reader
        .read()
        .then(({ done, value }) => {
          if (done) {
            resolve(Buffer.concat(chunks));
            return;
          }
          chunks.push(Buffer.from(value));
          pump();
        })
        .catch(reject);
    }
    pump();
  });
}

// Upload a single image to Cloudinary
async function uploadImageToCloudinary(image, folder) {
  const imageBuffer = await fileToBuffer(image);
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader
      .upload_stream({ folder }, (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      })
      .end(imageBuffer);
  });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const category = formData.get('category');

    const mainImage = formData.get('image1');
    const image2 = formData.get('image2');
    const image3 = formData.get('image3');
    const image4 = formData.get('image4');

    // Validate required fields
    if (!name || !description || !price || !mainImage) {
      return NextResponse.json(
        {
          error:
            'Name, description, price, and at least one image are required',
        },
        { status: 400 }
      );
    }

    // Upload the main image
    const mainImageUrl = await uploadImageToCloudinary(
      mainImage,
      'products/main'
    );

    // Upload additional images if provided
    const additionalImageUrls = [];
    if (image2)
      additionalImageUrls.push(
        await uploadImageToCloudinary(image2, 'products/additional')
      );
    if (image3)
      additionalImageUrls.push(
        await uploadImageToCloudinary(image3, 'products/additional')
      );
    if (image4)
      additionalImageUrls.push(
        await uploadImageToCloudinary(image4, 'products/additional')
      );

    // Save product to Firestore
    const productsRef = collection(db, 'products');
    const newProduct = {
      name,
      description,
      price,
      image: mainImageUrl,
      additionalImages: additionalImageUrls,
      category: category || 'Uncategorized',
      averageRating: 0,
      reviewCount: 0,
      totalRating: 0,
      createdAt: new Date(),
    };

    await addDoc(productsRef, newProduct);

    return NextResponse.json(
      { message: 'Product added successfully', product: newProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json(
      { error: 'Failed to add product' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Reference the 'products' collection in Firestore
    const productsRef = collection(db, 'products');

    // Fetch all documents from the 'products' collection
    const querySnapshot = await getDocs(productsRef);

    // Map through the documents to extract the required fields
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Document ID
      name: doc.data().name,
      image: doc.data().image,
      price: doc.data().price,
      description: doc.data().description,
      category: doc.data().category,
    }));

    // Return the products as a JSON response
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
