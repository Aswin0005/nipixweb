
"use client";
import BlogCategories from '@/components/BlogCategories';
import Section from '@/components/Section';
import { ChevronRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const latestEvents = [
    {
      image: '/event1.png',
      date: 'May 14, 2023',
      title: 'Kickoff: Summer Coding Bootcamp for Beginners',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event8.png',
      date: 'May 15, 2023',
      title: 'Webinar: Navigating Online Learning Platforms',
      type: 'Events',
      readTime: '3 min read',
    },
    {
      image: '/event2.png',
      date: 'May 16, 2023',
      title: 'Launch: New Robotics Kit for Young Innovators',
      type: 'Events',
      readTime: '5 min read',
    },
    {
      image: '/event7.png',
      date: 'May 17, 2023',
      title: 'Live Q&A: Experts Discuss Future of EdTech',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event3.png',
      date: 'May 18, 2023',
      title: 'Showcase: Student Projects from the Robotics Workshop',
      type: 'Events',
      readTime: '2 min read',
    },
  ];
  
  const latestWorkshops = [
    {
      image: '/event5.jpg',
      date: 'May 19, 2023',
      title: 'Hands-On Workshop: Building Your First App',
      type: 'Workshops',
      readTime: '2 min read',
    },
    {
      image: '/event9.jpg',
      date: 'May 20, 2023',
      title: 'Creative Coding for Kids: Fun with Python',
      type: 'Workshops',
      readTime: '3 min read',
    },
    {
      image: '/event6.jpg',
      date: 'May 21, 2023',
      title: 'Introduction to 3D Printing: Workshop for Beginners',
      type: 'Workshops',
      readTime: '4 min read',
    },
    {
      image: '/event10.png',
      date: 'May 22, 2023',
      title: 'Photography Basics: Capture Stunning Images',
      type: 'Workshops',
      readTime: '3 min read',
    },
    {
      image: '/event4.jpg',
      date: 'May 23, 2023',
      title: 'Effective Study Techniques for Online Learners',
      type: 'Workshops',
      readTime: '4 min read',
    },
  ];
    

  const announcements = [
    {
      id: 1,
      image: '/announcement1.jpg',
      title: 'Launching a new course on frontend using React',
    },
    {
      id: 2,
      image: '/announcement2.jpg',
      title: 'Releasing new Arduino and Robotics kit soon',
    },
  ];

  const latestNews = [
    {
      image: '/event1.png',
      date: 'May 24, 2023',
      title: 'New Course: Advanced Data Science Available Now!',
      type: 'News',
      readTime: '3 min read',
    },
    {
      image: '/event8.png',
      date: 'May 25, 2023',
      title: 'Partnership Announced with Local Schools for Tech Kits',
      type: 'News',
      readTime: '4 min read',
    },
    {
      image: '/event2.png',
      date: 'May 26, 2023',
      title: 'Top 5 Skills Employers Are Looking For in 2023',
      type: 'News',
      readTime: '5 min read',
    },
    {
      image: '/event7.png',
      date: 'May 27, 2023',
      title: 'EdTech Company Launches New Online Learning Resources',
      type: 'News',
      readTime: '2 min read',
    },
    {
      image: '/event3.png',
      date: 'May 28, 2023',
      title: 'Student Spotlight: Success Stories from Recent Graduates',
      type: 'News',
      readTime: '4 min read',
    },
  ];
  
  const latestMarketing = [
    {
      image: '/event5.jpg',
      date: 'May 29, 2023',
      title: 'Promoting Online Courses: Strategies for Success',
      type: 'Marketing',
      readTime: '3 min read',
    },
    {
      image: '/event9.jpg',
      date: 'May 30, 2023',
      title: 'The Importance of Hands-On Learning Kits in Education',
      type: 'Marketing',
      readTime: '4 min read',
    },
    {
      image: '/event6.jpg',
      date: 'May 31, 2023',
      title: 'Building Brand Awareness for Your EdTech Solutions',
      type: 'Marketing',
      readTime: '5 min read',
    },
    {
      image: '/event10.png',
      date: 'June 1, 2023',
      title: 'Utilizing Social Media to Drive Course Enrollments',
      type: 'Marketing',
      readTime: '4 min read',
    },
    {
      image: '/event4.jpg',
      date: 'June 2, 2023',
      title: 'Email Marketing Campaigns for Online Education',
      type: 'Marketing',
      readTime: '3 min read',
    },
  ];

  const allCategories = [
    { title: 'Latest Events', data: latestEvents },
    { title: 'Latest Workshops', data: latestWorkshops },
    { title: 'Announcements', data: announcements },
    { title: 'Latest News', data: latestNews },
    { title: 'Latest Marketing', data: latestMarketing },
  ];

  const sortedCategories = useMemo(() => {
    if (selectedCategory === 'All') {
      return allCategories;
    }
    return [
      ...allCategories.filter(category => category.title.includes(selectedCategory)),
      ...allCategories.filter(category => !category.title.includes(selectedCategory))
    ];
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-screen min-h-screen pt-16 md:pt-24 md:p-8">
      <div className="w-full bg-slate-800 px-8 h-64 border-0 md:rounded-3xl text-white p-5">
        <div className="font-semibold text-7xl -ml-1 mt-4">BLOG</div>
        <div className="text-sm text-slate-500">FILTERS</div>
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <BlogCategories onCategoryChange={handleCategoryChange} />
          <div className="mr-8 -mt-5">
            <div className="text-[15px] text-slate-200">SEARCH BLOGS</div>
            <div className="mt-2 bg-slate-700 border-0 rounded-md flex items-center">
              <Search className="h-4 w-4 -mt-[4px] ml-2" />
              <input
                type="text"
                placeholder="I want to read about..."
                className="bg-slate-700 py-2 pl-2 pr-6 text-[15px] text-gray-400 border-0 rounded-md outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {sortedCategories.map(category => {
        if (category.title === 'Announcements') {
          return (
            <div key={category.title} className="mt-12">
              <div className="text-[34px] font-semibold flex justify-center text-black">
                Announcements
              </div>
              <div className="p-3 flex flex-wrap gap-10 justify-center mt-7">
                {category.data.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="h-[330px] w-[580px] border-0 rounded-3xl overflow-hidden"
                  >
                    <div
                      className="w-full h-[300px] md:h-[330px] bg-cover bg-center rounded-3xl"
                      style={{ backgroundImage: `url('${announcement.image}')` }}
                      aria-label="announcement image"
                    />
                    <div className="py-2 -mt-16 text-sm md:text-lg flex justify-center bg-blue-700 text-white">
                      {announcement.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return <Section key={category.title} title={category.title} data={category.data} />;
        }
      })}
    </div>
  );
};

export default BlogPage;


