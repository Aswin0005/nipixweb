'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { auth } from '../../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { Suspense } from 'react';

function Checkout() {
  const searchParams = useSearchParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState({
    subtotal: 0.0,
    discount: 0.0,
    deliveryFee: 0.0,
  });
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [errors, setErrors] = useState({});
  const [userId, setUserId] = useState(null);

  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
  const fetchProductDetails = async () => {
    try {
      const productId = searchParams.get('productId');
      const quantity = searchParams.get('quantity');
      const type = searchParams.get('type');
      const { data } = await axios.get(`/api/products/${productId}`);
      console.log('Data', data);
      setProductDetails(data.product);
      setOrderDetails({
        subtotal: parseInt(data.product.price) * quantity,
        discount: 0.0,
        deliveryFee: 45.0,
        type,
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);

  const handlePayNow = async () => {
    try {
      if (validateForm()) {
        const response = await axios.post('/api/order/buy-now', {
          userId,
          productId: productDetails.id,
          name: productDetails.name,
          customerDetails: {
            email: formData.email,
            name: formData.name,
            phone: formData.phone,
          },
          deliveryDetails: {
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
          priceDetails: { orderDetails, total },
        });
      }
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  }, [auth]);

  const total =
    orderDetails.subtotal - orderDetails.discount + orderDetails.deliveryFee;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({
      ...prev,
      state: selectedState,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.phone) newErrors.phone = 'Phone is required.';
    if (orderDetails.type === 'product' && !formData.address)
      newErrors.address = 'Address is required.';
    if (orderDetails.type === 'product' && !formData.city)
      newErrors.city = 'City is required.';
    if (orderDetails.type === 'product' && !formData.state)
      newErrors.state = 'State is required.';
    if (orderDetails.type === 'product' && !formData.pincode)
      newErrors.state = 'Pincode is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32">
      <h1 className="text-3xl font-semibold mb-2">Confirm and Pay</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Please make the payment to enjoy the features and benefits.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Customer and Delivery Details Form */}
          <form className="space-y-8">
            {/* Customer Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Customer Details</h2>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Johndoe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 9384736281"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
            {/* Delivery Details */}
            {orderDetails.type === 'product' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Delivery Details</h2>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="123 Street, City"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded-md ${
                      errors.address ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="City Name"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded-md ${
                      errors.city ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium">
                    State
                  </label>
                  <select
                    id="state"
                    value={formData.state}
                    onChange={handleStateChange}
                    className={`w-full p-2 border rounded-md ${
                      errors.state ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Select a State</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-sm">{errors.state}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm">
                    Pin code
                  </label>
                  <input
                    id="state"
                    type="number"
                    placeholder="State Name"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded-md ${
                      errors.pincode ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-sm">{errors.state}</p>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Dynamic Order Summary */}
        <div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="font-medium mb-4">Order Summary :</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{orderDetails.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{orderDetails.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{orderDetails.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => handlePayNow()}
              className="w-full mt-6 bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700"
            >
              Pay ₹{total.toFixed(2)}
            </button>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <div className="w-4 h-4 border rounded-full grid place-items-center">
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </div>
              <span>100% secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CheckoutPage = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Checkout />
      </Suspense>
    </div>
  );
};
