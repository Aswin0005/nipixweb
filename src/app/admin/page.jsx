'use client';
import { useState } from 'react';

export default function AddProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Arduino Kits'); // Default category
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const handleImageChange = (setter) => (e) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image1', image1);
    formData.append('image2', image2);
    formData.append('image3', image3);
    formData.append('image4', image4);

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
    <form onSubmit={handleSubmit} className="mt-48 space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="block w-full p-2 border border-gray-300 rounded"
      ></textarea>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
        className="block w-full p-2 border border-gray-300 rounded"
      />
      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="block w-full p-2 border border-gray-300 rounded"
      >
        <option value="Arduino Kits">Arduino Kits</option>
        <option value="Electronic Kits">Electronic Kits</option>
        <option value="Robotic Kits">Robotic Kits</option>
        <option value="Other Kits">Other Kits</option>
      </select>

      {/* Image Upload Fields */}
      <input
        type="file"
        onChange={handleImageChange(setImage1)}
        accept="image/*"
        required
        className="block w-full p-2 border border-gray-300 rounded"
        placeholder="Image 1"
      />
      <input
        type="file"
        onChange={handleImageChange(setImage2)}
        accept="image/*"
        required
        className="block w-full p-2 border border-gray-300 rounded"
        placeholder="Image 2"
      />
      <input
        type="file"
        onChange={handleImageChange(setImage3)}
        accept="image/*"
        required
        className="block w-full p-2 border border-gray-300 rounded"
        placeholder="Image 3"
      />
      <input
        type="file"
        onChange={handleImageChange(setImage4)}
        accept="image/*"
        required
        className="block w-full p-2 border border-gray-300 rounded"
        placeholder="Image 4"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
}
