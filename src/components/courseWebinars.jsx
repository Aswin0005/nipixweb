import { Clock } from 'lucide-react';
import { ShadowGlassBox ,GlassBox } from './pattern/glassbox';

export const CourseWebinars = () => {
  const webinars = [
    {
      title: 'Focus on your Mental Health',
      category: 'Health',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 1',
      image: 'https://via.placeholder.com/50',
    },
    {
      title: 'Introducing to Framer and Figma',
      category: 'Development',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 2',
      image: 'https://via.placeholder.com/50',
    },
    {
      title: 'Focus on your Mental Health',
      category: 'Health',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 3',
      image: 'https://via.placeholder.com/50',
    },
    {
      title: 'Focus on your Mental Health',
      category: 'Health',
      time: '10:30 AM - 11:30 AM',
      date: 'Today',
      speaker: 'Speaker 4',
      image: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div className="relative w-screen min-h-screen flex gap-10 lg:justify-between p-10 lg:p-20  items-center overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6 max-w-3xl z-20 max-h-[450px] overflow-scroll no-scrollbar">
        {webinars.map((webinar, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-lg min-h-52  flex items-center justify-between drop-shadow-lg"
          >
            <div className="ml-2 space-y-3">
              <h3 className="text-lg font-semibold text-[#3770CD]">
                {webinar.title}
              </h3>
              <p className="text-sm text-white font-medium bg-[#3770CD] rounded-full inline-block px-2 py-1">
                {webinar.category}
              </p>
              <hr className="border-2 border-[#3770CD] rounded-full" />
              <div className="mt-4">
                <p className="text-sm text-[#3770CD] font-medium">
                  Speaker: {webinar.speaker}
                </p>
                <div className="flex gap-1 items-center mt-2">
                  <Clock size={16} />
                  <p className="text-sm text-black/70">{webinar.date}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <img
                src={webinar.image}
                alt={webinar.title}
                className="w-20 h-20 rounded-lg"
              />

              <p className="text-xs text-[#3770CD] whitespace-nowrap ">
                {webinar.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-5xl font-extrabold text-[#3770CD] z-20">
          Join Webinar
        </h2>
        <p className="text-black/70 mt-2 mb-6 text-md max-w-lg z-20">
          Discover our comprehensive courses and elevate your expertise with
          cutting-edge knowledge designed to advance your career in the tech
          industry.
        </p>
      </div>

      {/* Background */}
      <div className="absolute grid grid-cols-3 gap-2 top-[18%] -left-16">
        <ShadowGlassBox />
        <GlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <GlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
      </div>

      <div className="absolute grid grid-cols-3 gap-2 top-0 right-0">
        <ShadowGlassBox />
        <GlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <GlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox invisible={true} />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
        <ShadowGlassBox />
      </div>

      <div className="absolute h-[20%] w-3/4 bg-[#3770CD] left-0 top-[10%] rounded-r-md"></div>
      <div className="absolute h-[20%] w-3/4 bg-[#3770CD] right-0 bottom-[10%] rounded-l-md"></div>
      <div className="vectorblurtestimony z-10 absolute bottom-10 bg-[#3e8fc3]/55 rounded-full"></div>
      <div className="vectorblurtestimony z-10 absolute top-0 right-10  bg-[#3e8fc3]/55 rounded-full"></div>
    </div>
  );
};
