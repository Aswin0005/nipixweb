import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="h-screen flex justify-center relative" style={{ width: '100vw', height: '100vh' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/signup_bg_1.png'), url('/signup_bg_2.png'), url('/signup_bg_3.png'), url('/signup_bg_4.png'), url('/signup_bg_5.png')",
          backgroundPosition: 'left top, left bottom, left center, right top, 850px -20px',
          backgroundSize: '40%, auto, contain, 380px 1000px, auto',
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
          zIndex: 2,
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full z-1 flex pt-2">
        <div className="w-[50%] flex justify-center items-center pl-[150px]">
          <Image src="/signup_pic.png" alt="language" width={500} height={500} />
        </div>

        <div className="w-[50%] flex flex-col justify-center items-center text pr-[150px] pt-[50px] z-10">
          <h1 className="font-extrabold text-[64px] mb-[-20px]">Get Started</h1>
          <p className="text-[16px] text-[#7B7B7B] mb-[50px]">
            Hey, enter your details to create your account
          </p>

          <div className="w-[70%] mb-[25px] border border-gray-300 rounded-[28px] p-5 pl-10 bg-[#F6F7F8] outline outline-[#F0EFF2]">
            <p className="text-[13px] font-semibold tracking-[5px] text-[#A0A4AE]">NAME</p>
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none text-[20px] font-bold"
              placeholder="Enter your name"
            />
          </div>

          <div className="w-[70%] mb-[25px] border border-gray-300 rounded-[28px] p-5 pl-10 bg-[#F6F7F8] outline outline-[#F0EFF2]">
            <p className="text-[13px] font-semibold tracking-[5px] text-[#A0A4AE]">EMAIL</p>
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none text-[20px] font-bold"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-[70%] mb-[25px] border border-gray-300 rounded-[28px] p-5 pl-10 bg-[#F6F7F8] outline outline-[#F0EFF2]">
            <p className="text-[13px] font-semibold tracking-[5px] text-[#A0A4AE]">PASSWORD</p>
            <input
              type="password"
              className="w-full bg-transparent focus:outline-none text-[20px] font-bold"
              placeholder="Enter your password"
            />
          </div>

          <button className="border w-[268px] h-[62px] bg-[#83ABED] rounded-[10px] text-[20px] font-semibold mb-[50px] text-white">
            Sign Up
          </button>

          <div className="flex items-center w-[70%] mb-4">
            <div className="flex-1 h-[1px] bg-[#83ABED]"></div>
            <p className="px-4 text-gray-500 text-[20px] text-[#9C9BA5]">or signup with</p>
            <div className="flex-1 h-[1px] bg-[#83ABED]"></div>
          </div>

          {/* Social Media Icons */}
          <div className="flex w-[300px] justify-between p-2">
            <button className="w-[25%] h-[60px] bg-[#3E8FC3]/10 rounded-[8px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <Image src="/google.png" alt="google_icon" width={30} height={30} />
            </button>
            <button className="w-[25%] h-[60px] bg-[#3E8FC3]/10 rounded-[8px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <Image src="/facebook.png" alt="facebook_icon" width={30} height={30} />
            </button>
            <button className="w-[25%] h-[60px] bg-[#3E8FC3]/10 rounded-[8px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <Image src="/twitter.png" alt="twitter_icon" width={30} height={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
