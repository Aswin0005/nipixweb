import Image from 'next/image';
import { CirclePlay, CircleCheckBig, TrendingUp, Calendar } from 'lucide-react';

const CoursesPage = () => {
  const keytopics = [
    'Master the fundamentals of React, including components, state, and props',
    "Learn to build complex UIs using React's composition model",
    'Understand how to manage application state effectively',
    'Create responsive and interactive user interfaces',
    'Learn how to integrate your React applications with APIs',
    'Master advanced React patterns and best practices',
  ];

  const content = [
    {
      sno: '1',
      title: 'Introduction to web development',
      duration: '3:30 mins',
    },
    { sno: '2', title: 'What is HTML and CSS?', duration: '2:30 mins' },
    { sno: '3', title: 'What is JavaScript?', duration: '2:30 mins' },
    { sno: '4', title: 'Web browsers and web servers', duration: '2:30 mins' },
    { sno: '5', title: 'URLs and Protocols', duration: '2:30 mins' },
  ];

  return (
    <>
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-[rgb(14,84,127)] to-[rgb(71,175,239)] h-[540px]">
          <div className="pt-20 md:pt-36 px-4 md:px-8">
            <div className="flex flex-col md:flex-row text-white">
              <div className="flex flex-col md:pr-32 md:basis-3/5 mb-6 md:mb-0">
                <h1 className="font-extrabold text-3xl md:text-5xl pb-3">
                  Mastering React: Build Modern Web Applications
                </h1>
                <p className="font-light pb-3 text-sm">
                  by John Doe,{' '}
                  <span className="font-semibold">
                    Senior Software Engineer
                  </span>
                </p>
                <p className="font-normal text-sm md:text-base pr-4 md:pr-10">
                  Learn to build powerful, scalable, and responsive web
                  applications using React, the most popular JavaScript library
                  for building user interfaces.
                </p>
                <div className="flex items-center mt-6">
                  <button className="bg-white text-black text-lg rounded-lg py-1 px-3 font-bold mr-5 hover:text-xl">
                    Enroll Now
                  </button>
                  <p className="font-bold text-xl md:text-2xl pt-1">$499</p>
                </div>
              </div>
              <div className="md:basis-2/5 relative flex justify-center">
                <Image
                  src="/videoimage.jpg"
                  width={500}
                  height={500}
                  alt="video-image"
                  className="rounded-2xl object-cover w-full max-w-xs md:max-w-full"
                />
                <button className="bg-white bg-opacity-70 rounded-full w-[55px] h-[55px] pl-1 absolute inset-0 left-[45%] top-[40%]">
                  <Image
                    src="/playbutton.png"
                    width={20}
                    height={20}
                    alt="playbutton"
                    className="ml-[15px]"
                  />
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center mt-12 px-4">
              <div className="bg-white rounded-full w-2/3 drop-shadow-xl py-4 md:py-0 md:h-[90px] flex flex-col md:flex-row justify-center items-center md:items-stretch md:space-x-4 lg:space-x-16">
                <div className="flex items-center mb-4 md:mb-0">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <p className="font-semibold text-sm md:text-base">
                    Beginner Level
                  </p>
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                  <Calendar className="w-5 h-5 mr-2" />
                  <p className="font-semibold text-sm md:text-base">12 Weeks</p>
                </div>
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                  <div className="flex items-center pt-6">
                    <p className="font-semibold pr-2 text-sm md:text-base">
                      4.7
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="/starimage.png"
                          width={20}
                          height={20}
                          alt="star"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-extralight text-xs md:text-sm">
                    5000+ ratings
                  </p>
                </div>
                <div className="flex flex-col items-center pt-6 pb-3 ">
                  <div className="relative w-16 h-8">
                    <Image
                      src="/instructorprofile.jpg"
                      width={25}
                      height={25}
                      alt="student 1"
                      className="rounded-full absolute left-0 z-30"
                    />
                    <Image
                      src="/instructorprofile.jpg"
                      width={25}
                      height={25}
                      alt="student 2"
                      className="rounded-full absolute left-3 z-20"
                    />
                    <Image
                      src="/instructorprofile.jpg"
                      width={25}
                      height={25}
                      alt="student 3"
                      className="rounded-full absolute left-6 z-10"
                    />
                  </div>
                  <p className="text-xs md:text-sm font-light  md:mt-2">
                    +200 students
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
              <div className="p-6">
                <div className="flex justify-center items-center">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6">
                    What you'll Learn
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  {keytopics.map((item, index) => (
                    <div key={index} className="flex items-start py-1">
                      <CircleCheckBig />
                      <span className="pl-4 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-center items-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Course content
                </h2>
              </div>
              <div className="drop-shadow-md bg-white px-6 py-6">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-500 rounded-lg shadow-md justify-between py-2 border-b last:border-b-0 hover:bg-black hover:rounded-lg px-3 hover:text-white  "
                  >
                    <div className="flex items-center">
                      <CirclePlay />
                      <span className="pl-2 text-sm md:text-lg ">
                        {item.sno}.
                      </span>
                      <span className="pl-2 text-sm md:text-lg  ">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs md:text-base">
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  About the instructor
                </h2>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-3/4">
                <div className="flex flex-col md:flex-row items-start">
                  <Image
                    src="/instructorprofile.jpg"
                    alt="John Doe"
                    width={80}
                    height={80}
                    className="rounded-lg mr-4 mb-4 md:mb-0"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">John Doe</h3>
                    <p className="text-gray-600 mb-2 font-semibold">
                      Senior Software Engineer
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      John is a seasoned software engineer with over 10 years of
                      experience in building web applications. He's passionate
                      about React and has been using it since its early days.
                      John has worked on numerous large-scale projects and loves
                      sharing his knowledge with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
