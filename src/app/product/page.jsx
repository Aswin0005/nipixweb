'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import arduinoKit from "../../../public/arduinoKit.png";
import roboticKit from "../../../public/roboticKit.jpg";
import electronicKit from "../../../public/electronicKit.jpg";
import otherKit from "../../../public/otherKit.jpg";
import Image from 'next/image';

function ProductPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(null); // New state for sort order

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'arduino', name: 'Arduino Kits' },
    { id: 'robotic', name: 'Robotic Kits' },
    { id: 'electronic', name: 'Electronic Kits' },
    { id: 'other', name: 'Other Kits' },
  ];


  const products = [
    // Arduino Kits
    {
      id: 1,
      name: 'Smart Agri Kit',
      price: 69.99,
      image: arduinoKit,
      description: 'Measurement Sensor Capable of Monitoring Moisture, Light and Temp',
      category: 'Arduino Kits',
    },
    {
      id: 2,
      name: 'Weather Station Kit',
      price: 79.99,
      image: arduinoKit,
      description: 'A complete kit to measure temperature, humidity, and atmospheric pressure',
      category: 'Arduino Kits',
    },
    {
      id: 3,
      name: 'RFID Starter Kit',
      price: 59.99,
      image: arduinoKit,
      description: 'A comprehensive kit for RFID learning and project building',
      category: 'Arduino Kits',
    },
    {
      id: 4,
      name: 'Bluetooth Module Kit',
      price: 64.99,
      image: arduinoKit,
      description: 'Connect your Arduino wirelessly with this Bluetooth module',
      category: 'Arduino Kits',
    },
    {
      id: 5,
      name: 'Soil Moisture Sensor Kit',
      price: 24.99,
      image: arduinoKit,
      description: 'Measure soil moisture levels for agricultural applications',
      category: 'Arduino Kits',
    },
    {
      id: 6,
      name: 'Light Sensor Kit',
      price: 29.99,
      image: arduinoKit,
      description: 'Detect and measure light intensity for various projects',
      category: 'Arduino Kits',
    },

    // Robotic Kits
    {
      id: 7,
      name: 'Flame Sensor Kit',
      price: 69.99,
      image: roboticKit,
      description: 'The KY-026 Flame Detection Sensor Module is a sensitive and reliable',
      category: 'Robotic Kits',
    },
    {
      id: 8,
      name: 'Obstacle Avoidance Kit',
      price: 75.99,
      image: roboticKit,
      description: 'An intelligent robotic kit for avoiding obstacles using IR sensors',
      category: 'Robotic Kits',
    },

    // Electronic Kits
    {
      id: 9,
      name: 'Ultrasonic Sensor Kit',
      price: 69.99,
      image: electronicKit,
      description: 'Microcontroller ATmega328P for measuring distance and detecting obstacles',
      category: 'Electronic Kits',
    },
    {
      id: 10,
      name: 'Basic LED Light Kit',
      price: 19.99,
      image: electronicKit,
      description: 'A starter kit for learning LED circuit basics and configurations',
      category: 'Electronic Kits',
    },
    {
      id: 11,
      name: 'Digital Thermometer Kit',
      price: 39.99,
      image: electronicKit,
      description: 'Digital thermometer building kit with LCD and sensors',
      category: 'Electronic Kits',
    },
    {
      id: 12,
      name: 'Battery Voltage Tester Kit',
      price: 29.99,
      image: electronicKit,
      description: 'Test battery voltage with this compact and easy-to-use kit',
      category: 'Electronic Kits',
    },
    {
      id: 13,
      name: 'Audio Amplifier Kit',
      price: 49.99,
      image: electronicKit,
      description: 'Build a simple audio amplifier circuit',
      category: 'Electronic Kits',
    },
    {
      id: 14,
      name: 'Temperature Sensor Kit',
      price: 33.99,
      image: electronicKit,
      description: 'A kit to measure temperature using a basic sensor module',
      category: 'Electronic Kits',
    },
    {
      id: 15,
      name: 'Motion Sensor Kit',
      price: 44.99,
      image: electronicKit,
      description: 'Detect motion with this passive infrared sensor module',
      category: 'Electronic Kits',
    },
    {
      id: 16,
      name: 'Voltage Regulator Kit',
      price: 27.99,
      image: electronicKit,
      description: 'A kit to build and learn about voltage regulation circuits',
      category: 'Electronic Kits',
    },

    // Other Kits
    {
      id: 17,
      name: 'DIY Solar Charger Kit',
      price: 45.99,
      image: otherKit,
      description: 'Learn about solar power by building your own solar charger',
      category: 'Other Kits',
    },
    {
      id: 18,
      name: 'Water Quality Testing Kit',
      price: 99.99,
      image: otherKit,
      description: 'Test and measure water quality parameters with this comprehensive kit',
      category: 'Other Kits',
    },
    {
      id: 19,
      name: 'Electroplating Kit',
      price: 109.99,
      image: otherKit,
      description: 'Experiment with electroplating metals using this DIY kit',
      category: 'Other Kits',
    },
    {
      id: 20,
      name: 'Hand Crank Generator Kit',
      price: 39.99,
      image: otherKit,
      description: 'Generate electricity manually using this hand crank generator kit',
      category: 'Other Kits',
    },
  ];

  const handleSort = (order) => {
    setSortOrder(order);
    setIsDropdownOpen(false);
  };

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Search across all products
    )
    .filter(product =>
      selectedCategory === 'All Products' || product.category === selectedCategory // Filter by selected category
    )
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === 'lowToHigh' ? a.price - b.price : b.price - a.price;
    });

  return (
    <div className="mt-32">
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-64 border-r border-gray-300 p-5 bg-white fixed h-full">
          <h1 className="text-xl text-center font-bold mb-5">Our Products</h1>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full text-center p-2 rounded-r-full mb-2 relative ${selectedCategory === category.name ? 'bg-blue-500 text-white' : 'bg-transparent text-black'}`}
            >
              {category.name}
              {selectedCategory === category.name && <span className="absolute right-8 top-[21px] transform -translate-y-1/2 text-white">➔</span>}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="ml-64 flex-1 p-5 h-screen">
          {/* Search and Filter Bar */}
          <div className="ml-6 flex items-center mb-5">
            <div className="flex items-center max-w-md w-full">
              <input
                type="text"
                placeholder="Search for kits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 pl-3 border border-gray-300 rounded-md w-full mr-2"
              />
              <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Search</button>
            </div>
            <div className="flex gap-6 ml-20 relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 px-4 border border-gray-300 rounded-lg bg-white flex items-center"
              >
                Sort By <ChevronDown className="ml-2" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 border border-gray-200 rounded-lg bg-white shadow-lg">
                  <button
                    onClick={() => {
                      setSortOrder('lowToHigh');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder('highToLow');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    High to Low
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mb-5">
            <span className="ml-6 text-lg font-bold">
              Explore {filteredProducts.length} products
            </span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-32">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border border-gray-300 rounded-lg p-4 bg-white">
                <Image src={product.image} alt={product.name} className="w-full h-40 object-contain rounded mb-3" />
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-1 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="text-sm p-2 px-4 bg-blue-500 text-white rounded">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
