'use client';
import { useState } from "react";

export default function Checkout() {

  const [orderDetails, setOrderDetails] = useState({
    subtotal: 1450.0,
    discount: 250.0,
    deliveryFee: 45.5,
  });

  const total =
    orderDetails.subtotal - orderDetails.discount + orderDetails.deliveryFee;

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
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Johndoe"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 9384736281"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            {/* Delivery Details */}
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
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City Name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="text-sm">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="State Name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
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
            <button className="w-full mt-6 bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700">
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
