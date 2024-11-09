'use client';
import { useState } from 'react';

export default function AddProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleMainImageChange = (e) => {
    setMainImage(e.target.files[0]);
  };

  const handleAdditionalImagesChange = (e) => {
    setAdditionalImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('mainImage', mainImage);

    additionalImages.forEach((image, index) => {
      formData.append(`additionalImages[${index}]`, image);
    });

    const response = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Product added successfully');
    } else {
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-48">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <input
        type="file"
        onChange={handleMainImageChange}
        accept="image/*"
        required
      />
      <input
        type="file"
        onChange={handleAdditionalImagesChange}
        accept="image/*"
        multiple
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
