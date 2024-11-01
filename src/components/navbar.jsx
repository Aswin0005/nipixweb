'use client';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu , X} from 'lucide-react';

export const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-screen fixed md:top-4 z-40">
      <div className="max-w-7xl top-4 bg-white/60 md:mx-auto backdrop-blur-xl md:rounded-2xl drop-shadow-lg px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center  h-16 md:h-20">
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

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex grow justify-evenly lg:px-20">
            {[
              { label: 'Home', path: '/' },
              { label: 'Courses', path: '/courses' },
              { label: 'Products', path: '/product' },
              { label: 'Blogs', path: '/blogs' },
              { label: 'Testimonials', path: '' },
              { label: 'About Us', path: '/about' },
            ].map((item) => (
              <button
                key={item.path}
                className={`text-black hover:text-gray-900 px-2  ${
                  pathname === item.path
                    ? 'border-2 border-blue-500 rounded-lg'
                    : ''
                }`}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Sign Up Button */}
          <button
            className="hidden md:block bg-[#83ABED] hover:bg-[#3367D6] text-white p-1 px-8 rounded-md drop-shadow-lg"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute w-screen left-0 h-screen md:hidden bg-white/90 backdrop-blur-xl rounded-b-2xl drop-shadow-lg p-4">
            {[
              { label: 'Home', path: '/' },
              { label: 'Courses', path: '/courses' },
              { label: 'Products', path: '/product' },
              { label: 'Blogs', path: '/blogs' },
              { label: 'Testimonials', path: '/testimonials' },
              { label: 'About Us', path: '/about' },
            ].map((item) => (
              <button
                key={item.path}
                className={`block w-full text-left py-2 px-4 text-black hover:text-gray-900 ${
                  pathname === item.path ? 'bg-blue-100 rounded-lg' : ''
                }`}
                onClick={() => {
                  router.push(item.path);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              className="w-full mt-2 bg-[#83ABED] hover:bg-[#3367D6] text-white p-2 rounded-md drop-shadow-lg"
              onClick={() => {
                router.push('/signup');
                setIsMobileMenuOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
