import Image from 'next/image';
export const Categories = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center gap-20 ">
      <div className="relative max-w-96 z-20">
        <h1 className="text-5xl text-[#3770CD] font-extrabold z-30">
          Explore <br></br>Our Categories
        </h1>
        <p>
          Explore a diverse range of courses tailored to help you excel in your
          field, with options for every passion.
        </p>
        <button className="bg-blue-500 text-white text-sm rounded-full px-8 py-4 mt-6">
          Explore Categories
        </button>

        {/* Dots Grid Vector */}
        <svg
          className="absolute -top-5 -left-9 "
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <g fill="#0A8AF2" opacity={0.4}>
            <circle cx="5" cy="5" r="1.5" />
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="19" cy="5" r="1.5" />
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="5" cy="19" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-10 max-w-1/2 h-1/2 z-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED] aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/programming-language.png"
              alt="language"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Language</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED]/50 aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/design.png"
              alt="graphic-design"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Design</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED] aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/bars.png"
              alt="finance"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Finance</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED]/50 aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/healthcare.png"
              alt="health care"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Health Care</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED]/50 aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/robotic-arm.png"
              alt="Robotics"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Robotics</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED] aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/software-developer.png"
              alt="software-development"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Development</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED]/50 aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/edit-tool.png"
              alt="Arts"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Arts & Design</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-[#83ABED] aspect-square w-28 rounded-lg flex justify-center items-center">
            <Image
              src="/management.png"
              alt="Management"
              width={50}
              height={50}
              className=""
            />
          </span>
          <p className="text-black/70  font-medium">Management</p>
        </div>
      </div>

      {/* Background */}
      <div className="vectorblurcategory z-10 absolute bottom-8 -translate-x-1/2  bg-[#3e8fc3]/60 rounded-full"></div>
    </div>
  );
};
