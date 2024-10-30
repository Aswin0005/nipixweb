import { ExploreCourses } from '@/components/exploreCourse';

const { CoursesHero } = require('@/components/courseshero');

const CoursesPage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <CoursesHero />
      <ExploreCourses />
    </div>
  );
};

export default CoursesPage;
