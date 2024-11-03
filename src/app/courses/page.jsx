import { CourseWebinars } from '@/components/courseWebinars';
import { ExploreCourses } from '@/components/exploreCourse';
import { Footer } from '@/components/footer';
import { Testimony } from '@/components/testimony';
import { CoursesHero } from '@/components/courseshero';

const CoursesPage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <CoursesHero />
      <ExploreCourses />
      <CourseWebinars/>
      <Testimony/>
      <Footer/>
    </div>
  );
};

export default CoursesPage;
