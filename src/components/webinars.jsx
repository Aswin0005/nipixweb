import Image from "next/image";

export const Webinars = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col md:flex-row justify-center items-center gap-20  p-4 md:p-8">
      <div className="max-w-xl flex flex-col justify-center items-center md:items-start  gap-2 z-20">
        <p className="text-[#3770CD]">100% SATISFACTION GUARANTEE</p>
        <h1 className="text-5xl font-extrabold text-[#3770CD] max-md:text-center">
          Highly Interactive <br></br>Webinars
        </h1>
        <p className="text-black/70 font-medium max-md:text-center">
          Join our interactive webinars to enhance your skills and knowledge.
          These sessions provide practical insights and hands-on learning to
          help you excel in your field.
        </p>
        <button className="bg-blue-500 text-white text-sm rounded-full px-8 py-4 mt-6">
          Join Webinars
        </button>
      </div>

      <Image src="/webinar.png" width={400} height={400} alt="Webinar" className="z-20" />

       {/* Background Vectors */}
      <div className="vectorblurtop z-10 absolute -top-[8%] -right-[15%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%] rounded-full"></div>
      <div className="vectorblurbottom z-10 absolute -bottom-10 -left-[20%] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%]  rounded-full"></div>
    </div>
  );
};
