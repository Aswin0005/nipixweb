'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

function CartPage() {
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [promoCode, setPromoCode] = useState('');

  // Fetch the userId using Firebase Authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch cart and wishlist data using the userId
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        if (!userId) return;

        // Fetch cart items
        const cartResponse = await axios.get(`/api/user/${userId}/cart`);
        setCart(cartResponse.data.cartItems || []);

        console.log(cartResponse.data.cartItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCartData();
  }, [userId]);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const discount = 120.0;
  const deliveryFee = 45.0;
  const total = subtotal - discount + deliveryFee;

  const productCount = cart.filter(
    (item) => item.category === 'product'
  ).length;
  const courseCount = cart.filter((item) => item.category === 'course').length;

  const handleQuantityChange = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = async (cartItemId) => {
    if (!userId) return;

    try {
      // Send a DELETE request to the API
      setCart(cart.filter((item) => item.id !== cartItemId));
      const response = await axios.delete(`/api/user/${userId}/cart/remove`, {
        data: { userId, cartItemId },
      });

      // Check if the response is successful
      if (response.status === 200) {
        // Remove the item from the local state
        console.log('Item removed successfully');
      } else {
        console.error('Failed to remove item from cart:', response.data.error);
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <>
      {cart.length === 0 ? (
        <div>Loading....</div>
      ) : (
        <div className="pt-24 md:pt-32 mx-auto w-screen min-h-screen flex flex-col md:flex-row p-4 md:p-8 gap-5">
          <div className="w-full mr-16 flex flex-col md:flex-1">
            <div className="w-full mb-5">
              <h2 className="mb-5 font-bold text-2xl">
                Your Cart{' '}
                <span className="text-sm">
                  ({courseCount} {courseCount === 1 ? 'course' : 'courses'} &{' '}
                  {productCount} {productCount === 1 ? 'product' : 'products'})
                </span>
              </h2>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex flex-col md:flex-row items-center justify-between p-4 gap-5 border-b border-gray-200"
                >
                  <div className="flex gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-16 rounded"
                    />
                    <div className="flex-1">
                      <h3 className="mb-1 text-sm line-clamp-5 whitespace-pre-wrap">
                        {item.name}
                      </h3>
                      <div className="text-[#f39c12]">
                        {renderStars(item.rating)}{' '}
                        <span style={{ color: '#666', fontSize: '14px' }}>
                          {item.students || item.ratings}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="max-md:w-full flex items-center md:justify-center justify-between gap-2">
                    <span style={{ fontWeight: 'bold' }}>₹{item.price}</span>
                    {item.category === 'product' &&
                      item.quantity !== undefined && (
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              Number(e.target.value)
                            )
                          }
                          className="p-1 rounded-sm"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      )}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#666',
                      }}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-[300px]">
            <div className="bg-gray-100 p-5 rounded">
              <h3 className="mb-5">Order Summary :</h3>
              <div className="mb-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-500">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 text-white w-full py-2 rounded mt-5">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
