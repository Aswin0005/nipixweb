"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { GlassBox, ShadowGlassBox } from "@/components/pattern/glassbox";

function AboutPage() {
  const teamMembers = [
    {
      name: "Prashanth M",
      role: "Chief Executive Officer",
      imageUrl: "/pic_1.png",
    },
    {
      name: "Nishok S",
      role: "Chief Marketing Officer",
      imageUrl: "/pic_2.png",
    },
    {
      name: "SriRam V",
      role: "Chief Operating Officer",
      imageUrl: "/pic_1.png",
    },
    {
      name: "Bharath V",
      role: "Chief Technology Officer",
      imageUrl: "/pic_2.png",
    },
  ];
  const images = [
    "/school_1.jpg",
    "/school_2.jpg",
    "/school_1.jpg",
    "/school_2.jpg",
    "/school_1.jpg",
    "/school_2.jpg",
    "/school_1.jpg",
    "/school_2.jpg",
    "/school_1.jpg",
    "/school_2.jpg",
    "/school_1.jpg",
    "/school_2.jpg",
    "/school_1.jpg",
    "/school_2.jpg",
  ];
  const infiniteImages = [...images, ...images, ...images];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infiniteImages.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, [infiniteImages.length]);

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          height: "190%",
          backgroundImage:
            "url('/signup_bg_1.png'), url('/signup_bg_2.png'), url('/signup_bg_3.png'), url('/signup_bg_4.png'), url('/signup_bg_5.png')",
          backgroundPosition:
            "left top, left center, left center, right top, 450px -120px",
          backgroundSize: "40%, auto, contain, 380px 1000px, auto",
          backgroundRepeat: "no-repeat",
          zIndex: 2,
        }}
      ></div>
      <div className="vectorblurtop z-10 absolute -top-[8%] -right-[15%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%] rounded-full"></div>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[70%] p-6 md:p-32">
   
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 order-1 md:order-2">
          <Image
            src="/nipix_pic.png"
            alt="About Us"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center z-10 md:items-start text-center md:text-left p-4 order-2 md:order-1">
          <h2 className="text-[#3770CD] text-4xl font-bold md:text-5xl md:font-extrabold mb-4 text-center">
            About Us
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6">
            At Nipix Technology, we are dedicated to empowering the next
            generation of tech enthusiasts and professionals. Founded with a
            passion for hands-on learning and innovation, we offer a range of
            practical workshops, online courses, and seminars designed to make
            technology accessible and engaging. From our Tech Spark Kit and
            beginner-level Arduino projects to advanced courses in Python, IoT,
            C++, and UI/UX Design, we provide valuable learning experiences that
            inspire and equip individuals to excel in the tech world.
            Additionally, we specialize in setting up robotics labs for schools,
            creating environments that foster creativity, innovation, and a
            deeper understanding of technology. Join us in exploring new
            technologies, expanding your skills, and shaping the future of
            innovation.
          </p>
        </div>
      </section>

      <div className="relative overflow-hidden w-full h-54 z-20 px-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {infiniteImages.map((src, index) => (
            <div
              className="min-w-[33.3333%] flex justify-center mx-2"
              key={index}
            >
              <div className="relative rounded-lg overflow-hidden shadow-[4px_4px_4px_rgba(0,0,0,0.50)]">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="responsive"
                  width={800}
                  height={400}
                  className="object-cover h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vectorblurbottom z-10 absolute top-[160%] -translate-y-1/2 -left-[15%] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%]  rounded-full"></div>
      <div className="max-sd:hidden absolute grid grid-cols-3 gap-2 top-[150%] right-[200px]">
        <ShadowGlassBox />
        <GlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <GlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
      </div>

      <section className="min-h-screen flex z-20 justify-center items-center mt-9">
        {" "}
        <div className="container mx-auto z-20 px-4">
          <div>
            <h2 className="text-[#3770CD] text-4xl font-bold md:text-5xl md:font-extrabold text-left md:text-center">
              Our Team
            </h2>{" "}
            <p className="text-black/70 text-lg text-left md:text-center mx-auto lg:w-1/3 md:w-1/2">
              Empowering the Future with Passion and Innovation
            </p>
            <div className="mt-8 flex gap-4 flex-wrap justify-center items-center">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden w-[270px] h-[330px] bg-slate-400 rounded-2xl"
                >
                  <Image
                    className="absolute top-0 left-0 object-cover object-center"
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    quality={100}
                  />
                  <div className="overflow-hidden p-4 bg-white absolute left-4 bottom-4 right-4 rounded-lg">
                    <p className="font-bold text-center">{member.name}</p>
                    <p className="text-gray-500 text-center">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-4 mt-10 min-h-56 z-20 bg-[#3E8FC3] text-white rounded-lg p-6 flex flex-col items-start">
        <h3 className="text-2xl font-semibold mb-2 text-left">
          Subscribe to Our Newsletters
        </h3>
        <p className="mb-4 text-left">
          All of our courses offer assignments and relevant resources and tools
          for in-depth knowledge.
        </p>
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full p-3 rounded-l-lg text-gray-800"
          />
          <button className="bg-blue-700 text-white px-4 py-3 rounded-r-lg">
            Subscribe
          </button>
        </div>
        <Image
          src="/newsletter.png"
          width={300}
          height={300}
          alt="Newsletter"
          className="absolute right-16 bottom-0 max-md:hidden"
        />
      </div>
      <div className="vectorblurcourses z-10 absolute bottom-10 bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="vectorblurcourses z-10 absolute top-0 right-10 bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="absolute grid grid-cols-2 gap-2 top-[200%] -right-[10px] z-10">
        <ShadowGlassBox />
        <GlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <GlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
