'use client'
import Image from 'next/image';
import { useState } from "react";

export const HeroSection = () => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const courses = [
    {
      id: 1,
      courseName: "JavaScript for Beginners",
      author: "Billa",
      level: "Beginner",
      image: "/webinarphoto.png",
    },
    {
      id: 2,
      courseName: "Advanced Python Programming",
      author: "Dhanush Shankar",
      level: "Advanced",
      image: "/webinarphoto.png",
    },
    {
      id: 3,
      courseName: "Full-Stack Web Development",
      author: "Thalapathy Vijay",
      level: "Intermediate",
      image: "/webinarphoto.png",
    },
    {
      id: 4,
      courseName: "UI/UX Design Fundamentals",
      author: "Ajith Kumar",
      level: "Beginner",
      image: "/webinarphoto.png",
    },
  ];
  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className="relative w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden p-2 md:p-8">
      {/* Background Vectors */}
      <div className="vectorblurtop z-10 absolute -top-[8%] -right-[15%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%] rounded-full"></div>
      <div className="vectorblurbottom z-10 absolute top-[60%] -translate-y-1/2 -left-[15%] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%]  rounded-full"></div>
      {/* <div style={{aspectRatio : 1/0.20}} className="vectorblurline rotate-[8deg] absolute top-[60%] -left-[17%] bg-gradient-to-r from-[#3E8FC3]  to-[#9DCBE8]/30 w-[60%] shadow-sm  rounded-full"></div> */}

      <div className="w-full flex flex-col z-10 justify-center items-center mt-36 md:mt-20 ">
        <h1 className="text-4xl font-bold text-center ">
          Expand Your <span className="text-blue-500 text-5xl">Knowledge</span>{' '}
          and Discover <span className="text-blue-500 text-5xl">New Paths</span>
        </h1>
        <p className="text-center">
          Learn from industry leaders and equip yourself with the skills to
          succeed in your career.
        </p>
        {/* Search */}
        <div className="relative w-full max-w-xl flex items-center mt-4">
          <input
            type="text"
            placeholder="eg'Angular Js'"
            className="w-full h-12 border rounded-full p-4"
            onFocus={() => setIsInputClicked(true)}
            onBlur={() => setIsInputClicked(false)}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="absolute right-0 bg-blue-500 text-white text-sm rounded-full m-2 px-12 py-2">
            Search Courses
          </button>
          {isInputClicked && inputValue.length > 0 && (
            <div className="absolute z-30 top-[calc(100%+5px)]  w-full bg-white  mt-2 rounded-[25px] shadow-[4px_4px_10px_rgba(0,0,0,0.25)]">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex justify-between hover:bg-blue-100 items-center border-b p-4 last:border-b-0  rounded-[25px] cursor-pointer"
                  >
                    <div>
                      <h2 className="text-lg font-semibold">
                        {course.courseName}
                      </h2>
                      <div className="flex items-center text-sm font-semibold">
                        <span
                          className={`${
                            course.level === "Beginner"
                              ? "text-green-500"
                              : course.level === "Intermediate"
                              ? "text-yellow-500"
                              : course.level === "Advanced"
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {course.level}
                        </span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="text-gray-600">{course.author}</span>
                      </div>
                    </div>
                    <Image
                      src={course.image}
                      alt={course.courseName}
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 p-4">No courses found.</p>
              )}
            </div>
          )}
        </div>

        {/* Perks Section */}
        <div className="w-full md:w-3/4 flex justify-evenly items-center mt-8">
          <span className="flex flex-col justify-center items-center">
            <Image src="/reading.png" width={40} height={40} alt="reading" />
            <p className="whitespace-nowrap text-xs md:text-sm mt-1">
              Learn Anywhere
            </p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src="/clock.png" width={40} height={40} alt="clock" />
            <p className="whitespace-nowrap text-xs md:text-sm mt-1">
              Lifetime Access
            </p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image
              src="/instructor.png"
              width={40}
              height={40}
              alt="instructor"
            />
            <p className="whitespace-nowrap text-xs md:text-sm mt-1">
              Expert Instructor
            </p>
          </span>
        </div>

        <div className="w-full flex flex-wrap max-md:gap-4 justify-center md:justify-evenly items-center mt-8 ">
          <span className="bg-[#C5DBED] w-52 h-28 rounded-xl md:mt-14 flex flex-col justify-center items-center shadow-lg">
            <p className="text-sm font-bold">Enrolled Students</p>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#D02F58] to-[#3E8FC3]  text-transparent bg-clip-text">
              80,000+
            </p>
          </span>
          <span className="bg-[#C5DBED] w-52 h-28 rounded-xl flex flex-col justify-center items-center shadow-lg">
            <p className="text-sm font-bold">Online Courses</p>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#D02F58] to-[#3E8FC3]  text-transparent bg-clip-text">
              1,200+
            </p>
          </span>
          <span className="bg-[#C5DBED] w-52 h-28 rounded-xl md:mt-14 flex flex-col justify-center items-center shadow-lg">
            <p className="text-sm font-bold">Instructors</p>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#D02F58] to-[#3E8FC3]  text-transparent bg-clip-text">
              20+
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
