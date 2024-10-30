'use client';
import { ChevronRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { GlassBox, ShadowGlassBox } from './pattern/glassbox';

const courseData = [
  {
    id: 1,
    category: 'Development',
    technology: 'React Js',
    level: 'Beginner',
    description:
      'Three month course to learn the basics of React JS and Start Coding',
    instructor: 'Dinesh Kumar',
    rating: 4.8,
    reviews: 10339,
    image: '/mask.png',
  },
  {
    id: 2,
    category: 'Development',
    technology: 'Angular Js',
    level: 'Beginner',
    description:
      'Three month course to learn the basics of Angular JS and Start Coding',
    instructor: 'Suresh Reddy',
    rating: 4.5,
    reviews: 8345,
    image: '/mask.png',
  },
  {
    id: 3,
    category: 'Development',
    technology: 'Vue Js',
    level: 'Intermediate',
    description: 'Intermediate course on Vue JS for front-end development',
    instructor: 'Priya Sharma',
    rating: 4.7,
    reviews: 5472,
    image: '/mask.png',
  },
  {
    id: 4,
    category: 'Development',
    technology: 'Html',
    level: 'Beginner',
    description: 'Basic HTML course for building the structure of web pages',
    instructor: 'Amit Singh',
    rating: 4.3,
    reviews: 5021,
    image: '/mask.png',
  },
  {
    id: 5,
    category: 'Development',
    technology: 'JavaScript',
    level: 'Advanced',
    description: 'Advanced JavaScript course covering ES6+ features',
    instructor: 'Meena Joshi',
    rating: 4.9,
    reviews: 12034,
    image: '/mask.png',
  },
  {
    id: 6,
    category: 'Design',
    technology: 'Graphic Design',
    level: 'Beginner',
    description: 'Basic course on graphic design principles',
    instructor: 'Ravi Mehta',
    rating: 4.6,
    reviews: 6000,
    image: '/mask.png',
  },
];

const categories = [
  'Development',
  'Design',
  'Finance',
  'Health',
  'Robotics',
  'Management',
  'Marketing',
  'Arts & Design',
];

const CourseCard = ({ course }) => (
  <div className="min-w-[300px] h-[300px] flex items-end z-20">
    <div className="h-[250px] w-full rounded-lg flex items-center bg-gradient-to-br from-[#D02F58]/50 to-[#3E8FC3] p-[2px]">
      <div className="relative w-full h-full bg-white rounded-lg p-4 flex flex-col justify-end ">
        <span className="text-sm text-green-500 font-semibold">
          {course.level}
        </span>
        <p className="text-sm mt-1 font-medium text-gray-600">
          {course.description}
        </p>
        <p className="text-xs mt-1 text-gray-400">{course.instructor}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-sm">&#9733;</span>
          <span className="text-sm text-gray-600 ml-1">
            {course.rating}/5 ({course.reviews})
          </span>
        </div>
        <Image
          src={course.image}
          alt={course.technology}
          width={270}
          height={150}
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 h-40 object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
);

export const ExploreCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('Development');
  const [startIndex, setStartIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const cardWidth = 300; // Width of one card in pixels (adjust as needed)

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const checkButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setDisableLeft(scrollLeft === 0);
    setDisableRight(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      checkButtons();
      scrollContainerRef.current.addEventListener('scroll', checkButtons);
      return () =>
        scrollContainerRef?.current?.removeEventListener(
          'scroll',
          checkButtons
        );
    }
  }, []);

  const filteredCourses = courseData.filter(
    (course) => course.category === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setStartIndex(0); // Reset to the beginning for the new category
  };

  return (
    <div className="relative py-10 px-5 lg:px-20 w-screen h-screen">
      <h2 className="text-5xl font-extrabold text-[#3770CD] z-20">
        Explore Courses
      </h2>
      <p className="text-black/70 mt-2 mb-6 text-lg max-w-lg z-20">
        Discover our comprehensive courses and elevate your expertise with
        cutting-edge knowledge designed to advance your career in the tech
        industry.
      </p>

      <div className="flex flex-col items-center">
        <div className="relative  inline-block mb-4 bg-[#3770CD] rounded-full  z-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-[#3770CD] font-medium'
                  : 'bg-[#3770CD] text-white font-medium'
              }`}
            >
              {category}
            </button>
          ))}

          <div className="absolute  top-1/2 -translate-y-1/2 -right-9 w-12 h-12 bg-white rounded-full flex justify-center items-center shadow">
            <ChevronRight />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => handleScroll('left')}
            disabled={disableLeft}
            className={`bg-white w-10 h-10 rounded-full flex justify-center items-center z-20 ${
              disableLeft ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft />
          </button>
          <div
            className="relative flex transition-transform duration-300 ease-in-out space-x-4 overflow-x-scroll no-scrollbar mt-10 w-full lg:w-3/4"
            ref={scrollContainerRef}
          >
            {filteredCourses.slice(0, 6).map((course, index) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <button
            onClick={() => handleScroll('right')}
            disabled={disableRight}
            className={`bg-white w-10 h-10 rounded-full flex justify-center items-center z-20 ${
              disableRight ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Background */}

      <div className="vectorblurcourses z-10 absolute -bottom-10 bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="vectorblurcourses z-10 absolute top-0 -right-10  bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="absolute grid grid-cols-2 gap-2 top-[18%] -left-16">
        <ShadowGlassBox />
        <GlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <GlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
      </div>

      <div className="absolute grid grid-cols-3 gap-2 top-0 right-0">
        <ShadowGlassBox />
        <GlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <GlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
      </div>
    </div>
  );
};
