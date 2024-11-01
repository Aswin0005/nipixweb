'use client'

import React from 'react'
import  { useState, useEffect } from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, MessageCircle, Share2 } from 'lucide-react';
import { MoreHorizontal , Clock } from "lucide-react"
import Link from "next/link"

const Webinarpage = () => {

    const [timeLeft, setTimeLeft] = useState('12:55:42');

  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeLeft.split(':').map(Number);
      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      let newHours = hours;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }

      setTimeLeft(`${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = ['01', '02', '03', '04', '05', '06', '07'];
  return ( 
    <div className='mt-32 px-20'>
        <div className='flex  space-x-3 flex-col md:flex-row'>
            <div className='basis-1/2 h-[300px] px-4 py-4 bg-gradient-to-r from-[rgb(10,21,53)] to-[rgb(59,97,244)] text-white flex justify-center items-center rounded-2xl '>
                <div className='pr-4'>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4  ">
                        Best Learning Opportunities
                    </h1>
                    <p className="text-xl opacity-90">
                        Our goal is to make online education work for everyone
                    </p>
                </div>
                <div className="md:w-1/2 relative h-full">
                    <Image   
                    src='/announcement1.jpg'
                    layout="fill"
                    objectFit="fill"
                    alt='webinar-photo'
                    />
                </div>

            </div>
            <div className='basis-1/2 '>
                {/* Calendar Section */}
                <div className="bg-white h-[300px] rounded-xl shadow-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                            <div>
                            <h2 className="text-2xl font-bold mb-2">Tomorrow</h2>
                            <p className="text-gray-600">10:00 AM - 12:00 PM</p>
                            </div>
                            
                    </div>
                            <div className="grid grid-cols-7 gap-2">
                                {days.map((day, index) => (
                                    <div key={day} className="text-center mb-7">
                                        <p className="text-gray-500 text-sm mb-2">{day}</p>
                                        <div className={`px-2 py-3 rounded-full ${index === 3 ? 'bg-blue-600 text-white' : 'bg-blue-200'}`}>
                                        {dates[index]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center space-x-9 mt-4 md:mt-0">
                            <button className="px-6 py-2 border-2 border-gray-200 rounded-full hover:border-gray-300 transition-colors">
                                About
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                                Register
                            </button>
                            </div>
                </div>
            </div>
        </div>

      
    
      {/* Event Details Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How To Build Your LinkedIn Profile
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="text-gray-600 mb-2">Starts in</p>
              <div className="text-4xl md:text-6xl font-bold text-blue-600">
                {timeLeft}
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-gray-600 mb-2">2 speakers</p>
              <div className="flex -space-x-4">
                <Image
                  src="/instructorprofile.jpg"
                  width={48}
                  height={48}
                  alt="Speaker 1"
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/instructorprofile.jpg"
                  width={48}
                  height={48}
                  alt="Speaker 2"
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="max-w-4xl  px-4 py-8 md:py-12 relative">
      <div className="fixed right-4 md:right-8 top-1/3 flex flex-col space-y-4">
        <button className="p-2 rounded-full bg-black text-white hover:bg-gray-600 transition-colors">
            <Twitter />
        </button>
        <button className="p-2 rounded-full bg-black text-white hover:bg-gray-600 transition-colors">
          <Linkedin className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full bg-black text-white hover:bg-gray-600 transition-colors">
          <Image src='/redditicon.png'
          width={24} 
          height={24}
          alt='reddit'/>
        </button>
        <button className="p-2 rounded-full bg-black text-white hover:bg-gray-600 transition-colors">
        <Image src='/whatsappicon.png'
          width={24} 
          height={24}
          alt='whatsapp'/>
        </button>
      </div>
    </div>
    
    <div className="pr-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          How To Build Your LinkedIn Profile
        </h1>
        <p className="text-gray-600 mb-8">hosted by NipexTech</p>

        <div>
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </p>
            
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </p>
          </div>
        </div>
      </div>

    <div className="px-4 py-8">
      {/* Speakers Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-8">Speakers</h1>
        <div className="space-y-4 ">
          <div className="p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Image
                src="/speakerphoto.jpg"
                alt="Michelle Kate"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Michelle Kate</h2>
                <p className="text-gray-500">CEO @ Bazoos and CTO @ FFP</p>
                <Link href="#" className="text-blue-600 mt-2 inline-block">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg ">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Image
                src="/speakerphoto.jpg"
                alt="Jeremy Strong"
                width={100}
                height={100}
                className="rounded-full pr-2 "
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Jeremy Strong</h2>
                <p className="text-gray-500">Marketing Executive @ Google</p>
                <Link href="#" className="text-blue-600 mt-2 inline-block">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Section */}
      <div className=''>
        <h2 className="text-3xl font-bold mb-8">Explore more</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 shadow-lg ">
              <div className="flex justify-between items-start mb-4">
                <div className='pr-2'>
                  <Link href="#" className="text-blue-600 text-lg font-bold hover:underline">
                    Introducing to Framer and Figma 
                  </Link>
                  <div className="mt-3">
                    <span className="text-blue-100 bg-blue-600 px-3 py-1 rounded-full text-sm">
                      Development
                    </span>
                  </div>
                </div>
                <button>
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <hr className='border-t-1  border-blue-400 drop-shadow-sm '/>
              
            <div className='flex   '>
                <div className="basis-2/3 flex flex-col justify-center items-start gap-2">
                        <div className='flex'>
                            <p className='pr-4'>Speakers :</p>
                                <div className="flex -space-x-2">
                                <Image
                                    src="/speakerphoto.jpg"
                                    alt="Speaker 1"
                                    width={34}
                                    height={34}
                                    className="rounded-full border-2 border-white"
                                />
                                <Image
                                    src="/speakerphoto.jpg"
                                    alt="Speaker 2"
                                    width={34}
                                    height={34}
                                    className="rounded-full border-2 border-white"
                                />
                                </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Clock className='text-red-500 w-[20px]' />
                            <span className="text-base pl-1">Today:</span>
                            <span className="text-xs text-gray-500 pt-1 pl-1">10:30 AM-11:30 AM</span>
                        </div>
                </div>
                <div className='basis-1/3'>
                    <Image 
                    src='/webinarphoto.png'
                    width={100}
                    height={100}
                    alt='webinar'
                    className=''
                    />
                </div>
            </div>
            
                
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
};

export default Webinarpage;