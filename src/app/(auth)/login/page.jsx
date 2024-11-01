import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative p-4 md:p-8 md:pt-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/signup_bg_1.png'), url('/signup_bg_2.png'), url('/signup_bg_3.png'), url('/signup_bg_4.png'), url('/signup_bg_5.png')",
          backgroundPosition:
            'left top, left bottom, left center, right top, 850px -20px',
          backgroundSize: '40%, auto, contain, 380px 1000px, auto',
          backgroundRepeat:
            'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
          zIndex: 2,
        }}
      ></div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center z-10">
          <h1 className="font-extrabold text-5xl">Welcome</h1>
          <p className="text-lg text-[#7B7B7B] text-center">
            Hey, enter your details to login to your account
          </p>

          <div className="w-full md:w-[65%] border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-6">
            <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
              EMAIL
            </p>
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none font-medium"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full md:w-[65%] border border-gray-300 rounded-xl py-2 pl-5 bg-[#F6F7F8] outline outline-[#F0EFF2] mt-6">
            <p className="font-semibold tracking-[3px] text-[#A0A4AE] text-xs">
              PASSWORD
            </p>
            <input
              type="password"
              className="w-full bg-transparent focus:outline-none font-medium"
              placeholder="Enter your password"
            />
          </div>

          <button className="border px-8 py-3 bg-[#83ABED] rounded-xl text-lg font-semibold  text-white mt-6">
            Login In
          </button>

          <div className="flex items-center w-full md:w-[65%] my-4">
            <div className="flex-1 h-[1px] bg-[#83ABED]"></div>
            <p className="px-4 text-gray-500">or login with</p>
            <div className="flex-1 h-[1px] bg-[#83ABED]"></div>
          </div>

          <div className="flex justify-between p-2 gap-5">
            <button className="w-12 h-12 bg-[#3E8FC3]/10 rounded-[8px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <Image
                src="/google.png"
                alt="google_icon"
                width={20}
                height={20}
              />
            </button>
            <button className="w-12 h-12 bg-[#3E8FC3]/10 rounded-[8px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <Image
                src="/facebook.png"
                alt="facebook_icon"
                width={20}
                height={20}
              />
            </button>
            <button className="w-12 h-12 bg-[#3E8FC3]/10 rounded-[8px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <Image
                src="/twitter.png"
                alt="twitter_icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <Image src="/login_pic.jpg" alt="language" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
