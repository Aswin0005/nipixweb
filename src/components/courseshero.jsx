"use client";
import Image from "next/image";
import { useState } from "react";

export const CoursesHero = () => {
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
    <div className="w-screen min-h-screen flex">
      <div className="grow md:bg-[image:linear-gradient(to_right,#3770CD_0%,#3770CD_50%,#f7f7f7_50%,#f7f7f7_100%)]  flex flex-col justify-center items-center  p-4 md:p-8">
        <h1 className="text-blue-500 md:color-inverse-head text-5xl font-extrabold mt-20 max-md:text-center">
          All Skills you need in One Place
        </h1>
        <p className="text-black/70 md:color-inverse-subhead font-medium max-md:text-center">
          From key competencies to advanced technical knowledge, Nipix
          Technology empowers your professional growth.
        </p>
        <div className="relative w-full max-w-xl flex items-center mt-4">
          <input
            type="text"
            placeholder="eg'Angular Js'"
            className="w-full h-12 border rounded-full p-4"
            onFocus={() => setIsInputClicked(true)}
            onBlur={() => setIsInputClicked(false)}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="absolute right-0 bg-blue-500 text-white text-sm rounded-full m-2 px-6 py-2">
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

        <div className="grid grid-cols-3 md:grid-cols-4 md:grid-rows-2 gap-5 md:gap-10 max-w-sm min-h-1/2 z-20 mt-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/programming-language.png"
                alt="language"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Language
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/design.png"
                alt="graphic-design"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Design
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/bars.png"
                alt="finance"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Finance
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/healthcare.png"
                alt="health care"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Health Care
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/robotic-arm.png"
                alt="Robotics"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Robotics
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/software-developer.png"
                alt="software-development"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Development
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/edit-tool.png"
                alt="Arts"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Arts & Design
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-[#83ABED] aspect-square w-20 rounded-lg flex justify-center items-center">
              <Image
                src="/management.png"
                alt="Management"
                width={50}
                height={50}
                className=""
              />
            </span>
            <p className="text-black/70  font-medium text-sm whitespace-nowrap">
              Management
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="hidden lg:flex max-w-xl items-center">
        <div className="w-full min-h-[450px] grid grid-cols-2 gap-4 pr-8 overflow-hidden">
          <span className=" mt-14 overflow-hidden">
            <Image
              src="/mask.png"
              width={240}
              height={192}
              alt="Webinar"
              className="z-20 object-none object-center rounded-2xl"
            />
          </span>
          <span className=" overflow-hidden">
            <Image
              src="/mask.png"
              width={240}
              height={192}
              alt="Webinar"
              className="z-20 object-none object-center rounded-2xl"
            />
          </span>
          <span className=" mt-14 overflow-hidden">
            <Image
              src="/mask.png"
              width={240}
              height={192}
              alt="Webinar"
              className="z-20 object-none object-center rounded-2xl"
            />
          </span>
          <span className=" overflow-hidden">
            <Image
              src="/mask.png"
              width={240}
              height={192}
              alt="Webinar"
              className="z-20 object-none object-center rounded-2xl"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
