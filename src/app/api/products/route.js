import { db } from '../../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
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
      reader.read().then(({ done, value }) => {
        if (done) {
          resolve(Buffer.concat(chunks));
          return;
        }
        chunks.push(Buffer.from(value));
        pump();
      }).catch(reject);
    }
    pump();
  });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const mainImage = formData.get('mainImage');
    const additionalImages = [
      formData.get('additionalImages[0]'),
      formData.get('additionalImages[1]'),
      formData.get('additionalImages[2]'),
      formData.get('additionalImages[3]'),
    ].filter(Boolean); // Remove any null/undefined entries

    console.log('Form data:', name, description, price, mainImage, additionalImages);

    if (!name || !description || !price || !mainImage) {
      return NextResponse.json(
        { error: 'Name, description, price, and main image are required' },
        { status: 400 }
      );
    }

    // Convert main image to Buffer and upload
    const mainImageBuffer = await fileToBuffer(mainImage);
    const mainImageUpload = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream({ folder: 'products/main' }, (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }).end(mainImageBuffer);
    });
    console.log('Main image URL:', mainImageUpload);

    // Convert and upload additional images
    const additionalImageUrls = [];
    for (const image of additionalImages) {
      const imageBuffer = await fileToBuffer(image);
      const uploadUrl = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream({ folder: 'products/additional' }, (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url);
        }).end(imageBuffer);
      });
      additionalImageUrls.push(uploadUrl);
    }

    // Save product to Firestore
    const productsRef = collection(db, 'products');
    const newProduct = {
      name,
      description,
      price,
      image: mainImageUpload,
      additionalImages: additionalImageUrls,
      averageRating: 0,
      reviewCount: 0,
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
