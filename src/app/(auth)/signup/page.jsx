'use client';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db } from '../../../../firebaseConfig';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const RegisterPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User signed in:', user);
      router.push('/');
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const userId = userCredential.user.uid;
      console.log('User created:', userId);

      const userDocRef = doc(db, 'users', userId);
      await setDoc(userDocRef, {
        name: formData.name,
        email: formData.email,
        role: 'user',
      });

      router.push('/');
    } catch (error) {
      alert(error || 'Registration failed');
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center relative p-4 md:p-8 pt-24 md:pt-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/signup_bg_1.png'), url('/signup_bg_2.png'), url('/signup_bg_3.png'), url('/signup_bg_4.png'), url('/signup_bg_5.png')",
          backgroundPosition:
            'left top, left bottom, left center, right top, 850px -20px',
          backgroundSize: '40%, auto, contain, 380px 1000px, auto',
          backgroundRepeat:
            'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
          zIndex: 2,
        }}
      ></div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="hidden md:flex justify-center items-center">
          <Image
            src="/signup_pic.png"
            alt="language"
            width={500}
            height={500}
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center items-center z-10">
          <h1 className="font-extrabold text-5xl">Get Started</h1>
          <p className="text-lg text-[#7B7B7B] text-center">
            Hey, enter your details to create your account
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center md:w-[65%]"
          >
            <div className="w-full border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-4">
              <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
                NAME
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-medium"
                placeholder="Enter your name"
              />
            </div>

            <div className="w-full border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-4">
              <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
                EMAIL
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-medium"
                placeholder="Enter your email"
              />
            </div>

            <div className="w-full border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-4">
              <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
                PASSWORD
              </p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-medium"
                placeholder="Enter your password"
              />
            </div>

            <div className="w-full border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-4">
              <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
                CONFIRM PASSWORD
              </p>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-medium"
                placeholder="Re-type your password"
              />
            </div>

            <button
              type="submit"
              className=" border px-8 py-3 bg-[#83ABED] rounded-xl text-lg font-semibold text-white mt-4"
            >
              Sign up
            </button>
          </form>

          <div className="flex items-center w-full md:w-[65%] my-4">
            <div className="flex-1 h-[1px] bg-[#83ABED]"></div>
            <p className="px-4 text-gray-500">or Signup with</p>
            <div className="flex-1 h-[1px] bg-[#83ABED]"></div>
          </div>

          <div className="w-full md:w-[65%] flex justify-between gap-5">
            <button
              onClick={() => handleGoogleLogin()}
              className="w-full py-2 bg-[#3E8FC3]/10 rounded-[8px] flex gap-2 justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <Image
                src="/google.png"
                alt="google_icon"
                width={20}
                height={20}
              />
              <p>Sign up with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
