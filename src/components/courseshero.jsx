import Image from 'next/image';

export const CoursesHero = () => {
  return (
    <div className="w-screen min-h-screen flex">
      <div className="grow bg-[image:linear-gradient(to_right,#3770CD_0%,#3770CD_50%,#f7f7f7_50%,#f7f7f7_100%)]  flex flex-col justify-center items-center p-8">
        <h1 className="color-inverse-head text-5xl font-extrabold">
          All Skills you need in One Place
        </h1>
        <p className="text-black/70 color-inverse-subhead">
          From key competencies to advanced technical knowledge, Nipix
          Technology empowers your professional growth.
        </p>
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

        <div className="grid grid-cols-4 grid-rows-2 gap-10 max-w-sm min-h-1/2 z-20 mt-4">
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
            <span className="bg-[#83ABED]/50 aspect-square w-20 rounded-lg flex justify-center items-center">
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
            <span className="bg-[#83ABED]/50 aspect-square w-20 rounded-lg flex justify-center items-center">
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
            <span className="bg-[#83ABED]/50 aspect-square w-20 rounded-lg flex justify-center items-center">
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
            <span className="bg-[#83ABED]/50 aspect-square w-20 rounded-lg flex justify-center items-center">
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
