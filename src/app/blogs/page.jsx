
import BlogCategories from "@/components/BlogCategories";
import { ChevronRight, Dot, Search } from "lucide-react";


const BlogPage = () => {

  const latestEvents = [
    {
      image: '/event1.png',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event8.png',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event2.png',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event7.png',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event3.png',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
  ];


  const latestWorkshops = [
    {
      image: '/event5.jpg',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event9.jpg',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event6.jpg',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event10.png',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
    {
      image: '/event4.jpg',
      date: 'May 14, 2023',
      title: 'Liverpool hammers Leeds for first win in five games',
      type: 'Events',
      readTime: '4 min read',
    },
  ];


  

 
  return (
    <div>
      <div className="bg-slate-800 mt-32 mx-10 px-8 h-64 border-0 rounded-3xl text-white  p-5 ">
        <div className="ml-1">
          <div className="font-semibold text-[80px] w-fit -ml-1 -mt-2">BLOG</div>
          <div className="text-sm text-slate-500 -mt-3">FILTERS</div>
          

           <div className="flex  justify-between">

          {/* Categories */}
            <BlogCategories />
          
            {/* Search */}
            <div className="mr-8 -mt-5">
              <div className="text-[15px] text-slate-200">SEARCH BLOGS</div>
              <div className="mt-2 bg-slate-700 border-0 rounded-md  flex items-center">
                <Search className="h-4 w-4 -mt-[4px] ml-2" />
                <input 
                  type="text" 
                  placeholder="I want to read about..." 
                  className="bg-slate-700 py-2 pl-2 pr-6 text-[15px] text-gray-400 border-0 rounded-md outline-none" 
                />
              </div>
            </div>


          </div>

          {/* Featured Blog */}

          <div className="flex mt-20 ml-10 ">

            <div 
              // className="h-[240px] w-[490px] border-0 rounded-3xl bg-cover bg-center"
              className="h-[300px] w-[520px] border-0 rounded-3xl bg-cover bg-center"
              style={{ backgroundImage: "url('/blog_pic.png')" }}
              aria-label="blog pic"
            />

            <div className="max-w-2xl mx-auto overflow-hidden  ">
                  <div className="p-6  text-black">
                    <div className="space-y-4">
                      <h1 className="text-[30px] font-bold leading-tight">
                        Avadi Government Higher Secondary School Robotics Workshop
                      </h1>
                      <p className="text-sm opacity-90">
                        Our one-day robotics workshop at Avadi Government Higher Secondary School promises an astounding success, engaging over 100 students in hands-on learning and technical exploration...
                      </p>
                      <div className="flex items-center space-x-4">
                        <div  className=" text-blue-700">
                          Workshop
                        </div>
                        <span className="text-sm text-black">4 min read</span>
                      </div>
                    </div>
                  </div>
                </div>


          </div>
          
        {/* Latest Events */}
        <div className="text-black mt-12 font-semibold">
            <div className="flex  justify-between">
              <div className="text-3xl ml-2">Latest Events</div>
              <div className="text-md mr-2 my-auto flex gap-2 ">
                <span>See all</span>
                <ChevronRight className="h-5 w-5 mt-[1px]" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-14">
              {latestEvents.map((event, index) => (
                <div key={index} className="w-[200px]">
                  <div 
                    className="h-[150px] w-[200px] border rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url('${event.image}')` }}
                    aria-label={`event${index + 1} pic`}
                  />
                  <div className="text-sm ml-3 mt-1 text-slate-600 flex w-fit">
                    <Dot className="-ml-2" />
                    <span className="mt-[3px]">{event.date}</span>
                  </div>
                  <div className="mt-3 px-3 text-lg font-bold">{event.title}</div>
                  <div className="flex ml-3 mt-2">
                    <div className="text-blue-700 text-sm mr-4">{event.type}</div>
                    <span className="text-sm text-slate-600">{event.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          
          {/* Latest Workshops */}
          <div className="text-black mt-12 font-semibold">
            <div className="flex justify-between">
              <div className="text-3xl ml-2">Latest Workshops</div>
              <div className="text-md mr-2 my-auto flex gap-2 ">
                <span>See all</span>
                <ChevronRight className="h-5 w-5 mt-[1px]" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-14">
              {latestWorkshops.map((event, index) => (
                <div key={index} className="w-[200px]">
                  <div 
                    className="h-[150px] w-[200px] border rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url('${event.image}')` }}
                    aria-label={`event${index + 1} pic`}
                  />
                  <div className="text-sm ml-3 mt-1 text-slate-600 flex w-fit">
                    <Dot className="-ml-2" />
                    <span className="mt-[3px]">{event.date}</span>
                  </div>
                  <div className="mt-3 px-3 text-lg font-bold">{event.title}</div>
                  <div className="flex ml-3 mt-2">
                    <div className="text-blue-700 text-sm mr-4">{event.type}</div>
                    <span className="text-sm text-slate-600">{event.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          

          {/* Announcements */}
          
          <div className=" mt-12 text-[34px] font-semibold flex justify-center text-black">Announcements</div>

          <div className="p-3 flex flex-wrap gap-10 justify-center mt-7">
            <div className=" h-[330px] w-[580px]  border-0 rounded-3xl">
              
                  <div 
                    className="h-[330px] w-[580px] border rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: "url('/announcement1.jpg')" }}
                    aria-label="event1 pic"
                  /> 

                {/* <Image 
                      // src=""
                      // alr=""
                      // height=""
                      // width=""
                      className=" h-[330px] w-[580px]  border-0 rounded-3xl"
                /> */}

                <div className="py-2 -mt-16 text-lg flex justify-center bg-blue-700">Launching a new course on frontend using React</div>

              
            </div>

            <div className=" h-[330px] w-[580px]  border-0 rounded-3xl">
              
                  <div 
                    className="h-[330px] w-[580px] border rounded-3xl bg-cover"
                    style={{ backgroundImage: "url('/announcement2.jpg')" }}
                    aria-label="event1 pic"
                  /> 
               

                <div className="py-2 -mt-16 text-lg flex justify-center bg-blue-700">Releasing new Arduino and Robotics kit soon</div>

              
            </div>

            

          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
