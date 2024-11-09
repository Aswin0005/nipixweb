'use client';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export const Testimony = () => {
  const testimonials = [
    {
      name: 'Martin Rodriguez',
      title: 'Software engineer, Google',
      rating: 4.9,
      heading: 'A Truly Remarkable Course',
      feedback:
        'Exceeded our expectations with innovative designs that brought our vision to life.',
    },
    {
      name: 'Alice Johnson',
      title: 'Product Manager, Microsoft',
      rating: 4.8,
      heading: 'Outstanding Experience',
      feedback:
        'The course was well-structured and taught me essential skills for my role.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
    {
      name: 'Chris Evans',
      title: 'Data Scientist, Amazon',
      rating: 4.7,
      heading: 'Amazing Course',
      feedback:
        'I learned a lot and am now applying these skills in my job daily.',
    },
  ];

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

  return (
    <div className="px-4 pt-4 md:px-8 md:pt-8 relative w-screen min-h-screen  overflow-x-hidden">
      <div className="my-8 z-20">
        <h2 className="max-md:text-center text-5xl font-extrabold text-[#3770CD] leading-[65px]">
          Our Positive{' '}
          <span className="bg-gradient-to-r from-[#3770CD] to-[#3E8FC3]  text-white px-2 py-1 rounded-lg italic">
            Social Impact
          </span>
        </h2>
        <p className="text-black/70 text-lg mt-4 max-md:text-center">
          Hear from our students about their experiences with our one-on-one
          courses and project-based learning.
        </p>
      </div>

      <div
        className="relative w-full z-20 p-4 flex space-x-4 overflow-x-scroll no-scrollbar"
        ref={scrollContainerRef}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative min-w-[300px] md:min-w-96 min-h-60 bg-white/80 rounded-3xl shadow-lg p-6 text-left drop-shadow-lg flex items-center"
          >
            <Image
              src="/quote.png"
              width={50}
              height={50}
              alt="Quote"
              className="absolute -top-4 left-0"
            />
            <div className="flex items-start">
              <div className="ml-2">
                <h3 className="text-xl font-semibold">{testimonial.heading}</h3>
                <h1 className="text-black/70 mt-2">{testimonial.feedback}</h1>
                <div className="flex items-center mt-6">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                    <div className="flex items-center gap-1">
                      <Star fill="#F8BF31" stroke="#F8BF31" size={20} />
                      <span className="text-gray-700 font-semibold mt-1">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8 z-20">
        <div className="flex gap-4 z-20">
          <button
            onClick={() => handleScroll('left')}
            disabled={disableLeft}
            className={`bg-white w-10 h-10 rounded-full flex justify-center items-center ${
              disableLeft ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleScroll('right')}
            disabled={disableRight}
            className={`bg-white w-10 h-10 rounded-full flex justify-center items-center ${
              disableRight ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronRight />
          </button>
        </div>
        <button className="bg-white border z-20 border-blue-400 text-black/70 rounded-lg px-4 py-2 flex items-center">
          View More <ChevronRight className="ml-1" />
        </button>
      </div>

      <div className="relative mt-10 min-h-56 z-20 bg-[#3E8FC3] text-white rounded-lg p-6 flex flex-col items-start">
        <h3 className="text-2xl font-semibold mb-2 text-left">
          Subscribe Our Newsletters
        </h3>
        <p className="mb-4 text-left">
          All of our courses offer assignments and relevant resources and tools
          for in-depth knowledge.
        </p>
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full p-3 rounded-l-lg text-gray-800"
          />
          <button className="bg-blue-700 text-white px-4 py-3 rounded-r-lg">
            Subscribe
          </button>
        </div>

        <Image
          src="/newsletter.png"
          width={300}
          height={300}
          alt="Newsletter"
          className="absolute right-16 bottom-0 max-md:hidden"
        />
      </div>

      {/* Background Vectors */}
      <div className="vectorblurcategory z-10 absolute top-1/2 -translate-y-1/2 left-20  bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="vectorblurtestimony z-10 absolute top-0 -right-10  bg-[#3e8fc3]/55 rounded-full"></div>
    </div>
  );
};
