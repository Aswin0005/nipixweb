import Image from 'next/image';

export const WorkFlow = () => {
  return (
    <div className="relative w-screen min-h-screen">
      <div className="relative">
        <h1 className="text-5xl font-extrabold text-[#3770CD] text-center">
          Working Process for <br></br>Join & Benefits
        </h1>

        <svg
          className="absolute top-5 left-9 "
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

      <div className="relative z-20 max-w-6xl min-h-64 rounded-lg mx-auto bg-gradient-to-r from-[#3770CD]/20 from-[10%] to-[#9DCBE8]/20 to-[40%] flex mt-10 justify-around items-center gap-8">
        <div className="absolute -top-5 -left-6 w-14 h-14 text-white bg-[#3770CD] rounded-full font-bold flex justify-center items-center">
          1
        </div>
        <span className="max-w-96 z-20">
          <h1 className="text-[#3E8FC3] font-bold text-3xl">Find the Course</h1>
          <h1 className="text-black/50 font-medium text-lg">
            Explore our curated selection of courses to find the perfect fit
            that aligns with your personal interests and professional goals
          </h1>
        </span>

        <span className="bg-[#83ABED]/70 aspect-square p-8 rounded-lg">
          <Image
            src="/online-course.png"
            width={120}
            height={120}
            alt="Online Course"
            className=""
          />
        </span>
      </div>

      <div className="relative z-20 max-w-6xl min-h-64 rounded-lg mx-auto bg-gradient-to-r from-[#3770CD]/20 from-[10%] to-[#9DCBE8]/20 to-[40%] flex flex-row-reverse mt-10 justify-around items-center gap-8">
        <div className="absolute -top-5 -right-6 w-14 h-14 text-white bg-[#3770CD] rounded-full font-bold flex justify-center items-center">
          2
        </div>
        <span className="max-w-96">
          <h1 className="text-[#3E8FC3] font-bold text-3xl">
            Enroll the Course
          </h1>
          <h1 className="text-black/50 font-medium text-lg">
            Secure your spot with easy online registration, ensuring you don’t
            miss out on this exciting learning opportunity.
          </h1>
        </span>

        <span className="bg-[#83ABED]/70 aspect-square p-8 rounded-lg">
          <Image src="/team.png" width={120} height={120} alt="Online Course" />
        </span>
      </div>

      <div className="relative z-20 max-w-6xl min-h-64 rounded-lg mx-auto bg-gradient-to-r from-[#3770CD]/20 from-[10%] to-[#9DCBE8]/20 to-[40%] flex mt-10 justify-around items-center gap-8">
        <div className="absolute -top-5 -left-6 w-14 h-14 text-white bg-[#3770CD] rounded-full font-bold flex justify-center items-center">
          3
        </div>
        <span className="max-w-96">
          <h1 className="text-[#3E8FC3] font-bold text-3xl">
            Finish The Course
          </h1>
          <h1 className="text-black/50 font-medium text-lg">
            Complete the course at your own pace, benefiting from expert
            guidance and engaging content that keeps you motivated.
          </h1>
        </span>

        <span className="bg-[#83ABED]/70 aspect-square p-8 rounded-lg">
          <Image
            src="/verified.png"
            width={120}
            height={120}
            alt="Online Course"
          />
        </span>
      </div>

      <div className="relative z-20 max-w-6xl min-h-64 rounded-lg mx-auto bg-gradient-to-r from-[#3770CD]/20 from-[10%] to-[#9DCBE8]/20 to-[40%] flex flex-row-reverse mt-10 justify-around items-center gap-8">
        <div className="absolute -top-5 -right-6 w-14 h-14 text-white bg-[#3770CD] rounded-full font-bold flex justify-center items-center">
          4
        </div>
        <span className="max-w-96">
          <h1 className="text-[#3E8FC3] font-bold text-3xl">
            Get Your Certificate
          </h1>
          <h1 className="text-black/50 font-medium text-lg">
            Upon completion, receive a verified certificate to showcase your
            newly acquired skills and enhance your professional profile
          </h1>
        </span>

        <span className="bg-[#83ABED]/70 aspect-square p-8 rounded-lg">
          <Image
            src="/certificate.png"
            width={120}
            height={120}
            alt="Online Course"
          />
        </span>
      </div>

      <div className="vectorblurcategory z-10 absolute top-0 -right-20  bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="vectorblurcategory z-10 absolute bottom-8 -left-20  bg-[#3e8fc3]/55 rounded-full"></div>
    </div>
  );
};
