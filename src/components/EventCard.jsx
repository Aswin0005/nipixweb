
import { Dot } from 'lucide-react';

const EventCard = ({ image, date, title, type, readTime }) => {
  return (
    <div className="w-[300px] md:max-w-[200px]">
      <div
        className="w-[300px] h-[150px] md:w-[200px] border rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        aria-label={`event pic`}
      />
      <div className="text-sm ml-3 mt-1 text-slate-600 flex w-fit">
        <Dot className="-ml-2" />
        <span className="mt-[3px]">{date}</span>
      </div>
      <div className="mt-3 px-3 text-lg font-bold">{title}</div>
      <div className="flex ml-3 mt-2">
        <div className="text-blue-700 text-sm mr-4">{type}</div>
        <span className="text-sm text-slate-600">{readTime}</span>
      </div>
    </div>
  );
};

export default EventCard;
