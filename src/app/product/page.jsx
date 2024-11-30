'use client';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function ProductPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'arduino', name: 'Arduino Kits' },
    { id: 'robotic', name: 'Robotic Kits' },
    { id: 'electronic', name: 'Electronic Kits' },
    { id: 'other', name: 'Other Kits' },
  ];

  const handleSort = (order) => {
    setSortOrder(order);
    setIsDropdownOpen(false);
  };

  console.log('Selected Category', selectedCategory);
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategory === 'All Products' ||
        product.category === selectedCategory
    )
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === 'lowToHigh' ? a.price - b.price : b.price - a.price;
    });

  const [isMobile, setIsMobile] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await axios.get('/api/products');
        console.log(data.data);
        setProducts(data.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="pt-16 md:pt-24 flex w-screen h-screen overflow-hidden">
      {/* Left Sidebar for Desktop and Dropdown for Mobile */}
      {!isMobile && (
        <div className="md:w-64 border-r border-gray-300 p-5 bg-white md:fixed h-full max-md:hidden">
          <h1 className="text-xl text-center font-bold mb-5">Our Products</h1>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full text-center p-2 rounded-r-full mb-2 relative ${
                selectedCategory === category.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent text-black'
              }`}
            >
              {category.name}
              {selectedCategory === category.name && (
                <span className="absolute right-8 top-[21px] transform -translate-y-1/2 text-white">
                  ➔
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Right Content */}
      <div className="grow md:ml-64 p-4 md:p-8 h-full flex flex-col ">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row items-center gap-2 mb-5">
          <div className="flex items-center max-w-md w-full">
            <input
              type="text"
              placeholder="Search for kits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pl-3 border border-gray-300 rounded-md w-full mr-2"
            />
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">
              Search
            </button>
          </div>
          <div className="flex gap-2 justify-center items-center">
            {' '}
            <div className="flex gap-6 relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 px-2 md:px-4 border border-gray-300 rounded-lg bg-white flex items-center whitespace-nowrap"
              >
                Sort By <ChevronDown className="ml-2" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 border border-gray-200 rounded-lg bg-white shadow-lg z-10">
                  <button
                    onClick={() => handleSort('lowToHigh')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Low to High
                  </button>
                  <button
                    onClick={() => handleSort('highToLow')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    High to Low
                  </button>
                </div>
              )}
            </div>
            {isMobile && (
              <div className="relative flex items-center gap-2">
                <button
                  onClick={() =>
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                  }
                  className="p-2 px-4 border border-gray-300 rounded-lg bg-white flex items-center"
                >
                  Categories <ChevronDown className="ml-2" />
                </button>
                {isCategoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 border border-gray-200 rounded-lg bg-white shadow-lg z-10">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 ${
                          selectedCategory === category.name
                            ? 'bg-blue-500 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mb-5">
          <span className="ml-6 text-lg font-bold">
            Explore {filteredProducts.length} products
          </span>
        </div>

        {/* Product Grid with Scrollable Container */}
        <div className="flex-1 overflow-y-scroll no-scrollbar  pb-10 rounded-lg ">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 my-4 relative border border-transparent shadow-md"
                >
                  <div className="w-full h-40 bg-gray-200 rounded-2xl animate-pulse"></div>
                  <div className="pt-2">
                    <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mr-2"></div>
                      <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="border border-gray-300 rounded-lg p-4 bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain rounded mb-3"
                  />
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹ {product.price}</span>
                    <button className="text-sm p-2 px-4 bg-blue-500 text-white rounded">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
