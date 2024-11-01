'use client';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="w-screen fixed md:top-4 z-40">
      <div className="max-w-7xl top-4 bg-white/60 md:mx-auto backdrop-blur-xl md:rounded-2xl drop-shadow-lg px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Nipix logo and Name */}
          <div className="flex items-center">
            <Image
              src="/nipixlogo.png"
              alt="NipixLogo"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold">NipixTechnology</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex grow justify-evenly lg:px-20">
            <button
              className={`text-black hover:text-gray-900 px-2 ${
                pathname === '/' ? 'border-2 border-blue-500 rounded-lg' : ''
              }`}
              onClick={() => router.push('/')}
            >
              Home
            </button>
            <button
              className={`text-black hover:text-gray-900 px-2 ${
                pathname === '/courses' ? 'border-2 border-blue-500 rounded-lg' : ''
              }`}
              onClick={() => router.push('/courses')}
            >
              Courses
            </button>
            <button
              className={`text-black hover:text-gray-900 px-2 ${
                pathname === '/product' ? 'border-2 border-blue-500 rounded-lg' : ''
              }`}
              onClick={() => router.push('/product')}
            >
              Products
            </button>
            <button
              className={`text-black hover:text-gray-900 px-2 ${
                pathname === '/blogs' ? 'border-2 border-blue-500 rounded-lg' : ''
              }`}
              onClick={() => router.push('/blogs')}
            >
              Blogs
            </button>
            <button
              className={`text-black hover:text-gray-900 px-2 hidden md:visible ${
                pathname === '/testimonials' ? 'border-2 border-blue-500 rounded-lg' : ''
              }`}
              onClick={() => router.push('/testimonials')}
            >
              Testimonials
            </button>
            <button
              className={`text-black hover:text-gray-900 px-2 ${
                pathname === '/about' ? 'border-2 border-blue-500 rounded-lg' : ''
              }`}
              onClick={() => router.push('/about')}
            >
              About Us
            </button>
          </div>
          <button
            className="bg-[#83ABED] hover:bg-[#3367D6] text-white p-1 px-8 rounded-md flex drop-shadow-lg"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
