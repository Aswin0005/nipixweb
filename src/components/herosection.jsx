import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Vectors */}
      <div className="vectorblurtop z-10 absolute -top-[8%] -right-[15%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%] rounded-full"></div>
      <div className="vectorblurbottom z-10 absolute top-[60%] -translate-y-1/2 -left-[15%] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%]  rounded-full"></div>
      {/* <div style={{aspectRatio : 1/0.20}} className="vectorblurline rotate-[8deg] absolute top-[60%] -left-[17%] bg-gradient-to-r from-[#3E8FC3]  to-[#9DCBE8]/30 w-[60%] shadow-sm  rounded-full"></div> */}

      <div className="flex flex-col z-10  justify-center items-center mt-20">
        <h1 className="text-4xl font-bold text-center">
          Expand Your <span className="text-blue-500 text-5xl">Knowledge</span>{' '}
          and Discover <span className="text-blue-500 text-5xl">New Paths</span>
        </h1>
        <p className="">
          Learn from industry leaders and equip yourself with the skills to
          succeed in your career.
        </p>
        {/* Search */}
        <div className="relative w-full max-w-xl flex items-center mt-4">
          <input
            type="text"
            placeholder="eg'Angular Js'"
            className="w-full h-12 border rounded-full p-4"
          />
          <button className="absolute right-0 bg-blue-500 text-white text-sm rounded-full m-2 px-6 py-2">
            Search Courses
          </button>
        </div>

        {/* Perks Section */}
        <div className="w-3/4 flex justify-evenly items-center mt-8">
          <span className="flex flex-col justify-center items-center">
            <Image src="/reading.png" width={40} height={40} alt="reading" />
            <p className="text-sm mt-1">Learn Anywhere</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src="/clock.png" width={40} height={40} alt="clock" />
            <p className="text-sm mt-1">Lifetime Access</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image
              src="/instructor.png"
              width={40}
              height={40}
              alt="instructor"
            />
            <p className="text-sm mt-1">Expert Instructor</p>
          </span>
        </div>

        <div className="w-full flex justify-evenly items-center mt-8 ">
          <span className="bg-[#C5DBED] w-52 h-28 rounded-xl mt-14 flex flex-col justify-center items-center shadow-lg">
            <p className="font-bold">Enrolled Students</p>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#D02F58] to-[#3E8FC3]  text-transparent bg-clip-text">
              80,000+
            </p>
          </span>
          <span className="bg-[#C5DBED] w-52 h-28 rounded-xl flex flex-col justify-center items-center shadow-lg">
            <p className="font-bold">Online Courses</p>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#D02F58] to-[#3E8FC3]  text-transparent bg-clip-text">
              1,200+
            </p>
          </span>
          <span className="bg-[#C5DBED] w-52 h-28 rounded-xl mt-14 flex flex-col justify-center items-center shadow-lg">
            <p className="font-bold">Instructors</p>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#D02F58] to-[#3E8FC3]  text-transparent bg-clip-text">
              20+
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
