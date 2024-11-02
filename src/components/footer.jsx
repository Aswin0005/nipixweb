import { Facebook, Twitter, Linkedin} from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="relative py-8 flex justify-center items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Logo and Company Name */}
          <div className="flex flex-col justify-center items-center md:text-left">
            <Image
              src="/nipixlogo.png"
              alt="NipixTech Logo"
              width={80}
              height={80}
            />
            <h2 className="text-xl font-semibold text-gray-800">
              NipixTechnology
            </h2>
            <p className="text-gray-600 text-sm">Copyright © 2018 NipixTech</p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between mt-6 md:mt-0 space-x-12">
            {/* Company Links */}
            <div className="text-center md:text-left">
              <h3 className="text-gray-800 font-semibold">Company</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-800">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* For Students Links */}
            <div className="text-center md:text-left">
              <h3 className="text-gray-800 font-semibold">For Students</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Corporate Learning
                  </a>
                </li>
              </ul>
            </div>

            {/* For Companies Links */}
            <div className="text-center md:text-left">
              <h3 className="text-gray-800 font-semibold">For Companies</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Privacy Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-gray-800">
              <Twitter />
            </a>
            <a href="#" className="hover:text-gray-800">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-gray-800">
              <Facebook />
            </a>
          </div>
          <p className="mt-4 md:mt-0 text-gray-600 text-lg">
            Designed & Developed by <strong className='text-2xl font-extrabolf'>GLINT</strong>
          </p>
        </div>
      </div>
      {/* Background Vectors */}
      <div className="vectorblurcategory z-10 absolute bottom-8 -left-20  bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="vectorblurcategory z-10 absolute top-0 -right-20  bg-[#3e8fc3]/55 rounded-full"></div>
    </footer>
  );
};
