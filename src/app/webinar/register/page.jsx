"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, CreditCard } from "lucide-react"


const WebinarRegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
  });
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardOwner: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: ""
  });
  const handleInputCardChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };
  const handlebookseat = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  }; 

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="pt-28 w-screen h-screen ">
      <div className="max-w-2xl mx-auto p-4 md:p-6">
      {(currentStep === 1) && (
        <h1 className="text-2xl font-semibold text-center mb-5">Let's Get Started</h1>
      )}
        {/* Progress Steps */}
        <div className="flex items-center justify-between  relative">
          {["General Details", "Payment", "Confirmation"].map((step, index) => (
            <div key={step} className="flex flex-row items-center gap-2 z-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  index + 1 === currentStep
                    ? "bg-blue-600 text-white border-blue-600"
                    : index + 1 < currentStep
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm hidden md:block ${
                  index + 1 === currentStep ? "text-blue-600 font-medium" : "text-gray-500"
                }`}
              >
                {step}
              </span>
              {index < 2 && (
                <div className="flex-grow h-[2px] bg-gray-300 mx-2 min-w-[100px] min-h-[2px]">&nbsp;</div>
              )}
            </div>
          ))}
        </div>
        </div>

        <div className="mx-[150px] ">
                {/* Conditional Rendering for Steps */}
                {currentStep === 1 && (
                <form className="space-y-2">
                    <div className="space-y-2 flex flex-col px-48">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name*
                        </label>
                        <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required
                        placeholder="Enter your First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                        </label>
                        <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your Last Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                        </label>
                        <input
                        id="gender"
                        name="gender"
                        type="text"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your Gender"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address*
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your Email ID"
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number*
                        </label>
                        <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your Phone Number"
                        required
                        />
                    </div>
                    </div>

                    <div className="flex items-center justify-center space-x-96">
                    <p className="text-sm text-gray-500">*Terms and Conditions apply</p>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Next
                    </button>
                    </div>
                </form>
                )}

                {currentStep === 2 && (
                <div className="flex flex-col md:flex-row gap-6 w-full px-7 relative">
                    {/* Subtotal Section */}
                    <div className="w-1/3 h-[230px] flex-grow bg-white p-4 drop-shadow-2xl rounded-lg relative">
                    <h2 className="text-xl font-bold mb-2">Sub Total</h2>
                    <p className="text-gray-500 mb-2">Your Subtotal is as below</p>
                    <div className="flex justify-between border-b pb-2 mb-2">
                        <span>Price</span>
                        <span>₹500</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-green-600 font-semibold">₹500</span>
                    </div>
                    <button className="absolute right-4 px-4 mt-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700" 
                    onClick={handlebookseat}>
                        Book seat
                    </button>
                    </div>
                    
                    <button
                    onClick={handlePrevious}
                    className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors absolute bottom-3 left-8"
                    >
                    Back
                    </button>
            
                

                    {/* Payment Form */}
                 <div className=" w-2/3 h-[380px] flex-grow   p-5 border-2 border-dashed border-purple-300 rounded-lg">
                        <div className="mb-2 rounded-lg border p-2 shadow-sm">
                            <div className="flex items-center gap-3">
                            <div className="rounded-full bg-gray-100 p-1">
                                <Check className="h-4 w-4 text-gray-500" />
                            </div>
                            <span className="font-medium">Add new card</span>
                            </div>
                        </div>
                        <div className="rounded-lg h-[290px] bg-green-50 border px-6 pb-3 pt-1">
                            <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-green-500 p-1">
                                <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="font-medium">Add new card</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                src="/mastercard.png"
                                width={50}
                                height={50}
                                alt="mastercard"
                                />
                                <Image
                                src="/visaimage.png"
                                width={50}
                                height={50}
                                alt="visa"
                                />
                                <Image
                                src="/troyimage.png"
                                width={50}
                                height={50}
                                alt="troy"
                                />
                            </div>
                            </div>

                            <form className="space-y-2">
                            <div className=" flex  items-center ">
                                <label  className="basis-1/4 font-medium ">Card number</label>
                                <div className="relative w-full basis-3/4">
                                <input
                                    id="cardNumber"
                                    name="cardNumber"
                                    type="text"
                                    value={cardData.cardNumber}
                                    onChange={handleInputCardChange}
                                    className=" pl-10 border rounded p-2 w-full "
                                    placeholder="Enter the 16-digit card number"
                                    maxLength={16}
                                />
                                <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </div>

                            <div className=" flex  items-center">
                                <label className="font-medium  basis-1/4 ">Card owner</label>
                                <input
                                id="cardOwner"
                                name="cardOwner"
                                type="text"
                                value={cardData.cardOwner}
                                onChange={handleInputCardChange}
                                className="border rounded p-2 basis-3/4"
                                placeholder="Enter the name on the card"
                                />
                            </div>

                            <div className="flex  items-center">
                                <div className="space-y-1 pr-10">
                                <label className="font-medium">Expiry date</label>
                                <div className="flex gap-2  items-center">
                                    <input
                                    name="expiryMonth"
                                    type="text"
                                    value={cardData.expiryMonth}
                                    onChange={handleInputCardChange}
                                    placeholder="MM"
                                    className="w-16 border rounded p-2"
                                    maxLength={2}
                                    />
                                    <span className="text-lg">/</span>
                                    <input
                                    name="expiryYear"
                                    type="text"
                                    value={cardData.expiryYear}
                                    onChange={handleInputCardChange}
                                    placeholder="YY"
                                    className="w-16 border rounded p-2"
                                    maxLength={2}
                                    />
                                </div>
                                <p className="text-xs text-gray-500">Enter the expiration date of the card</p>
                                </div>

                                <div className="space-y-1 pt-6">
                                <label  className="font-medium pr-1">CVV2</label>
                                <input
                        
                                    name="cvv"
                                    type="text"
                                    value={cardData.cvv}
                                    onChange={handleInputCardChange}
                                    className="w-24 border rounded p-2"
                                    placeholder="012"
                                    maxLength={3}
                                />
                                <p className="text-xs   text-gray-500">Security code</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end space-x-2 ">
                                <input type="checkbox" className="form-checkbox" />
                                <label  className="font-medium text-sm">Set as default</label>
                            </div>
                            </form>
                        </div>
                        </div> 
                    </div>
                )}

                {currentStep === 3 && (
                <div className="max-w-4xl mx-auto p-4 md:p-6 text-center">
                    <div className="flex flex-col items-center">
                        <Image
                        src='/mailimage.png'
                        width={100}
                        height={100}
                        alt="envelope-icon"
                        />
                    <h2 className="text-2xl font-semibold">Yay! Seat Booked!</h2>
                    <p className="text-gray-500">Check your registered mail to know more about the event details.</p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                        Return Home
                    </button>
                    </div>
                </div>
                )}       
        </div>
    </div>
  );
};
export default WebinarRegisterPage;
