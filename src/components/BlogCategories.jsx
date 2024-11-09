
'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Dot } from 'lucide-react';


const BlogCategories = ({ onCategoryChange }) => {
  const [activeButton, setActiveButton] = useState('All');
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const buttonData = [
    { label: 'All', count: 14 },
    { label: 'News', count: 5 },
    { label: 'Announcements', count: 2 },
    { label: 'Events', count: 8 },
    { label: 'Marketing', count: 3 },
    { label: 'Workshops', count: 11 },
  ];

  const handleClick = (label) => {
    setActiveButton(label);
    setIsDropdownOpen(false);
    onCategoryChange(label);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-[450px]">
      {isMobile ? (
        <div className="relative mt-3">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-700 text-slate-200 px-4 py-2 rounded-2xl text-[15px] flex justify-between items-center"
          >
            {activeButton} <span className="text-xs">▼</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
              {buttonData.map((button) => (
                <button
                  key={button.label}
                  onClick={() => handleClick(button.label)}
                  className={`w-full text-left px-4 py-2 text-[15px] flex justify-between ${
                    activeButton === button.label
                      ? 'bg-slate-200 text-slate-700'
                      : 'text-gray-700'
                  }`}
                >
                  {button.label}
                  <span className="text-xs">{button.count}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {buttonData.map((button) => (
            <div className="text-[15px]" key={button.label}>
              <button
                onClick={() => handleClick(button.label)}
                className={`w-fit mt-3 pl-4 pr-[10px] py-[5px] rounded-2xl flex gap-2 
                  ${
                    activeButton === button.label
                      ? 'bg-white text-slate-700'
                      : 'bg-gray-700 text-slate-200'
                  }
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
      )}
    </div>
  );
};

export default BlogCategories;

