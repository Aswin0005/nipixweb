import Image from 'next/image';

export const AboutUs = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="vectorblurabout1 z-10 absolute top-[8%] -right-[15%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%] rounded-full"></div>
      <div className="vectorblurabout2 z-10 absolute top-[60%] -translate-y-1/2 -left-[10%] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%]  rounded-full"></div>
      <div
        style={{ aspectRatio: 1 / 0.2 }}
        className="vectorblurline z-10 rotate-[8deg] absolute top-[60%] -right-[17%] bg-gradient-to-r from-[#3E8FC3]/25  to-[#9DCBE8]/25 w-[60%] shadow-sm  rounded-full"
      ></div>
      <div className=" max-w-2xl z-20 h-28 rounded-xl mx-auto  bg-[#9DCBE8] flex flex-col justify-center items-center">
        <p className="text-black/50 text">
          We colloborated with <span className="font-extrabold">100+</span>{' '}
          leading universities and companies
        </p>
        <div className="flex mt-2">
          <Image src="/image 4.png" width={100} height={50} alt="university" />
          <Image src="/image 4.png" width={100} height={50} alt="university" />
          <Image src="/image 4.png" width={100} height={50} alt="university" />
          <Image src="/image 4.png" width={100} height={50} alt="university" />
          <Image src="/image 4.png" width={100} height={50} alt="university" />
          <Image src="/image 4.png" width={100} height={50} alt="university" />
        </div>
      </div>
      <div className="w-[85%] h-[70%] z-20 bg-gradient-to-r from-[#3770CD]/30 from-[10%] to-[#9DCBE8]/30 to-[40%] rounded-lg mx-auto mt-14 shadow-xl flex p-8">
        <div className="flex flex-col z-20 w-1/2  h-full justify-center">
          <h1 className="text-center font-extrabold text-4xl text-[#3770CD] ">
            NIPIX <br></br>TECHNOLOGY
          </h1>
          <p className="text-black mt-4">
            At Nipix Technology, we are committed to fostering the next
            generation of tech professionals. We offer hands-on workshops,
            online courses, and seminars that make technology accessible and
            engaging, from beginner Arduino projects to advanced Python, IoT,
            C++, and UI/UX Design. Our expertise extends to setting up robotics
            labs in schools, creating environments that encourage innovation and
            deeper technological understanding. Join us to explore cutting-edge
            technologies, enhance your skills, and shape the future of
            innovation.
          </p>
        </div>
        <div className="flex flex-col w-1/2">
          <Image src="/image 5.png" width={200} height={200} alt="robot" />
          <Image src="/image 5.png" width={200} height={200} alt="robot" />
        </div>
      </div>
    </div>
  );
};
