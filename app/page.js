import HeroSection from "@/components/HeroSection";
import TextRevealByWord from "@/components/ui/text-reveal";
import ShortDescription from "@/components/ShortDescription";
import { AboutComponent } from "@/components/AboutComponent";
import { LatestVideoComponent } from "@/components/LatestVideoComponent";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <HeroSection />
      <TextRevealByWord text="Let's Make Tech Simple & Fun!" />
      <LatestVideoComponent />
      <ShortDescription />
      <AboutComponent />
    </div>
  );
}
