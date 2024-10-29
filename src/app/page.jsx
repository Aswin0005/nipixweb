import { AboutUs } from '@/components/aboutus';
import { Categories } from '@/components/categories';
import { Gallery } from '@/components/gallery';
import { HeroSection } from '@/components/herosection';
import { WorkFlow } from '@/components/workflow';

export default function Home() {
  return (
    <div className="bg-[#F7F2F7] overflow-x-hidden">
      <HeroSection />
      <AboutUs />
      <Gallery />
      <Categories />
      <WorkFlow />
    </div>
  );
}
