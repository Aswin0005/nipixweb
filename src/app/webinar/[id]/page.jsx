'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { MoreHorizontal, Clock } from 'lucide-react';
import Link from 'next/link';

const Webinarpage = () => {
  const [timeLeft, setTimeLeft] = useState('12:55:42');

  const webinars = [
    {
      title: 'Focus on your Mental Health',
      category: 'Health',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 1',
      image: 'https://via.placeholder.com/50',
    },
    {
      title: 'Introducing to Framer and Figma',
      category: 'Development',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 2',
      image: 'https://via.placeholder.com/50',
    },
    {
      title: 'Focus on your Mental Health',
      category: 'Health',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 3',
      image: 'https://via.placeholder.com/50',
    },
    {
      title: 'Focus on your Mental Health',
      category: 'Health',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 4',
      image: 'https://via.placeholder.com/50',
    },
  ];

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

      setTimeLeft(
        `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(
          2,
          '0'
        )}:${String(newSeconds).padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = ['01', '02', '03', '04', '05', '06', '07'];
  return (
    <div className="pt-24 md:pt-36 p-4 md:px-20 bg-gradient-to-b from-[#F5F7FE] from-[50%] to-[#f7f7f7] to-[100%]">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="grow h-[300px] px-4 py-4 bg-gradient-to-r from-[rgb(10,21,53)] to-[rgb(59,97,244)] text-white flex justify-center items-center rounded-2xl ">
          <div className="pr-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4  ">
              Best Learning Opportunities
            </h1>
            <p className="text-xl opacity-90">
              Our goal is to make online education work for everyone
            </p>
          </div>
          <div className="md:w-1/2 relative h-full">
            <Image
              src="/announcement1.jpg"
              layout="fill"
              objectFit="fill"
              alt="webinar-photo"
            />
          </div>
        </div>
        <div className="w-full md:w-[35%]">
          {/* Calendar Section */}
          <div className="bg-white h-[300px] border-2 border-blue-200 rounded-xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Tomorrow</h2>
                <p className="text-gray-600">10:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div className="flex justify-around">
              {days.map((day, index) => (
                <div
                  key={day}
                  className="text-center mb-7 flex flex-col justify-center items-center"
                >
                  <p className="text-gray-500 text-sm mb-2">{day}</p>
                  <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-sm ${
                      index === 5
                        ? 'bg-[#3B61F4] text-white'
                        : 'bg-[#E2E8FD] text-[#3B61F4]'
                    }`}
                  >
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
      <div className="w-full mt-10">
        <h2 className="text-2xl md:text-3xl font-bold ">
          How To Build Your LinkedIn Profile
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p className="text-gray-600  text-lg">Starts in</p>
            <div className="text-7xl md:text-[90px] font-bold text-blue-600">
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
                className="w-14 h-14 rounded-full border-2 border-white"
              />
              <Image
                src="/instructorprofile.jpg"
                width={48}
                height={48}
                alt="Speaker 2"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
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
            <Facebook
              src="/redditicon.png"
              width={24}
              height={24}
              alt="reddit"
            />
          </button>
          <button className="p-2 rounded-full bg-black text-white hover:bg-gray-600 transition-colors">
            <Instagram alt="whatsapp" />
          </button>
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          How To Build Your LinkedIn Profile
        </h1>
        <p className="text-gray-600 mb-8">hosted by NipexTech</p>

        <div>
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {/* Speakers Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-8">Speakers</h1>
          <div className="space-y-4">
            <div className="p-6 border-2 border-gray-300 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Image
                  src="/speakerphoto.jpg"
                  alt="Michelle Kate"
                  width={100}
                  height={100}
                  className="rounded-full w-32 h-32 object-cover"
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

            <div className="p-6 border-2 border-gray-300 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Image
                  src="/speakerphoto.jpg"
                  alt="Jeremy Strong"
                  width={100}
                  height={100}
                  className="rounded-full w-32 h-32 object-cover"
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
        <h1 className="text-3xl font-bold mb-8">Explore More</h1>
        <div className="flex gap-6 mt-6 w-full z-20 overflow-scroll no-scrollbar">
          {webinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-lg min-h-52 min-w-[300px]  flex items-center justify-between drop-shadow-lg"
            >
              <div className="ml-2 space-y-3">
                <h3 className="text-lg font-semibold text-[#3770CD]">
                  {webinar.title}
                </h3>
                <p className="text-sm text-white font-medium bg-[#3770CD] rounded-full inline-block px-2 py-1">
                  {webinar.category}
                </p>
                <hr className="border-2 border-[#3770CD] rounded-full" />
                <div className="mt-4">
                  <p className="text-sm text-[#3770CD] font-medium">
                    Speaker: {webinar.speaker}
                  </p>
                  <div className="flex gap-1 items-center mt-2">
                    <Clock size={16} />
                    <p className="text-sm text-black/70">{webinar.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <img
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-20 h-20 rounded-lg"
                />

                <p className="text-xs text-[#3770CD] whitespace-nowrap ">
                  {webinar.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinarpage;
