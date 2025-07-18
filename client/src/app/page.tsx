import { FeaturedDebates } from "@/components/home/FeaturedDebate";
import { HeroSection } from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";



export default function Home() {
  return (
    <div>
     
        <HeroSection />
        <FeaturedDebates />
        <Testimonials />
      
    </div>
  );
}
