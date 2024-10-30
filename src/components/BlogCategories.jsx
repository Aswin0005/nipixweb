"use client";
import React, { useState } from 'react';

const BlogCategories = () => {
  const [activeButton, setActiveButton] = useState('All');

  const buttonData = [
    { label: 'All', count: 14 },
    { label: 'News', count: 5 },
    { label: 'Announcements', count: 2 },
    { label: 'Events', count: 8 },
    { label: 'Operations', count: 4 },
    { label: 'Marketing', count: 3 },
    { label: 'Strategy', count: 6 },
    { label: 'Workshops', count: 11 },
  ];

  const handleClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div className='w-[550px]'>
      <div className="flex gap-2 flex-wrap">
        {buttonData.map((button) => (
          <div className="text-[15px]" key={button.label}>
            <button
              onClick={() => handleClick(button.label)}
              className={`w-fit mt-3 pl-4 pr-[10px] py-[5px] rounded-2xl flex gap-2 
                ${activeButton === button.label ? 'bg-white text-slate-700' : 'bg-gray-700 text-slate-200'}
              `}
            >
              {button.label}
              <div
                className={`text-[10px] relative ${
                  activeButton === button.label ? 'text-slate-700' : ''
                }`}
              >
                {button.count}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
