'use client';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../../firebaseConfig';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Function to handle form submission
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User signed in:', user);
      // Handle user data (e.g., save to database, set session)
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center relative p-4 md:p-8 md:pt-32">
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
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center z-10">
          <h1 className="font-extrabold text-5xl">Welcome</h1>
          <p className="text-lg text-[#7B7B7B] text-center">
            Hey, enter your details to login to your account
          </p>

          <div className="w-full md:w-[65%] border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-6">
            <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
              EMAIL
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent focus:outline-none font-medium"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full md:w-[65%] border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-6">
            <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
              PASSWORD
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent focus:outline-none font-medium"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={handleLogin}
            className="border px-8 py-3 bg-[#83ABED] rounded-xl text-lg font-semibold text-white mt-6"
          >
            Login In
          </button>

          <div className="flex items-center w-full md:w-[65%] my-4">
            <div className="flex-1 h-[1px] bg-[#83ABED]"></div>
            <p className="px-4 text-gray-500">or login with</p>
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

        <div className="hidden md:flex justify-center items-center">
          <Image src="/login_pic.jpg" alt="language" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
