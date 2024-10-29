import Image from 'next/image';

export const Gallery = () => {
  return (
    <div className="w-screen h-screen overflow-hidden border">
      <div className="relative  w-[95%] h-[95%] mx-auto bg-gradient-to-tl from-[#3770CD]/50 from-[10%] to-[#9DCBE8]/30 to-[40%] rounded-lg grid grid-cols-10 grid-rows-6 gap-2">
        <div className="col-span-4 row-span-2 rounded  overflow-hidden">
          <img src="/image 9.png" alt="gallery" className="object-cover" />
        </div>
        <div className="col-span-1 row-span-2 rounded ">
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
        <div className="invisible col-span-4 row-span-2 rounded overflow-hidden  ">
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

        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[35%] text-left ">
          <h1 className="text-4xl text-blue-500 font-bold">Gallery</h1>
          <p className="text-black/70">
            At Nipix Technology, we capture and share key moments that reflect
            our innovative culture. Explore a curated collection of images and
            posts showcasing our journey and the dynamic spirit that drives our
            company forward.
          </p>
          <button className="bg-blue-500 text-white text-sm rounded-full px-6 py-2 mt-2">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
