export const Gallery = () => {
  return (
    <div className="relative w-screen min-h-screen md:h-screen overflow-hidden p-2 md:p-8">
      <div className="relative max-sm:flex max-sm:flex-col-reverse w-[95%] h-[95%] mx-auto bg-gradient-to-tl from-[#3770CD]/50 from-[10%] to-[#9DCBE8]/30 to-[40%] rounded-lg">
        <div className="w-full h-full grid grid-cols-3 md:grid-cols-10 md:grid-rows-6 gap-2">
          <div className="col-span-3 md:col-span-4 md:row-span-2 rounded  overflow-hidden">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className="col-span-2  md:col-span-1 md:row-span-2 rounded ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>

          <div className="col-span-1 row-span-2  flex flex-col gap-2 justify-between rounded ">
            <span className="rounded-lg h-1/2 overflow-hidden">
              <img src="/image 9.png" alt="gallery" className="object-cover" />
            </span>
            <span className="rounded-lg h-1/2 object-cover overflow-hidden">
              <img src="/image 9.png" alt="gallery" className="object-cover" />
            </span>
          </div>
          <div className="col-span-4 row-span-1 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className="invisible col-span-4 row-span-1 rounded overflow-hidden  "></div>
          <div className="col-span-1 row-span-2 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>

          <div className="col-span-2 row-span-2 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className=" col-span-3 row-span-2 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className="md:invisible col-span-4 row-span-2 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className=" col-span-2 row-span-2 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className=" col-span-1 row-span-2 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className=" col-span-2 row-span-1 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
          <div className=" col-span-2 row-span-1 rounded overflow-hidden  ">
            <img src="/image 9.png" alt="gallery" className="object-cover" />
          </div>
        </div>
        <div className="md:absolute z-20 right-10 top-[45%] md:-translate-y-1/2 md:w-[35%] text-left max-md:p-4">
          <h1 className="text-5xl text-[#3770CD] font-extrabold">Gallery</h1>
          <p className="text-black/70">
            At Nipix Technology, we capture and share key moments that reflect
            our innovative culture. Explore a curated collection of images and
            posts showcasing our journey and the dynamic spirit that drives our
            company forward.
          </p>
          <button className="bg-blue-500 text-white text-sm rounded-full px-6 py-2 mt-6">
            Explore
          </button>
        </div>
      </div>

      <div className="vectorblurtop z-10 absolute bottom-[8%] -right-[12%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white from-[5%] to-[#3E8FC3] to-[95%] rounded-full"></div>
    </div>
  );
};
