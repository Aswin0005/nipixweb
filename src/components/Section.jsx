import EventCard from './EventCard';
import { ChevronRight } from 'lucide-react';

const Section = ({ title, data }) => {
  return (
    <div className="text-black mt-16 font-semibold">
      <div className="flex justify-between">
        <div className="text-3xl ml-4">{title}</div>
        <div className="text-md mr-4 my-auto flex gap-2">
          <span>See all</span>
          <ChevronRight className="h-5 w-5 mt-[1px]" />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-14 ">
        {data.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Section;
