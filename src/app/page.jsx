import { AboutUs } from '@/components/aboutus';
import { HeroSection } from '@/components/herosection';

export default function Home() {
  return (
    <div className="bg-[#F7F2F7] overflow-x-hidden">
      <HeroSection />
      <AboutUs/>
    </div>
  );
}
