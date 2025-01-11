import HeroSection from "@/components/HeroSection";
import TextRevealByWord from "@/components/ui/text-reveal";
import ShortDescription from "@/components/ShortDescription";
export default function Home() {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <TextRevealByWord
        text="Let's Make Tech Simple & Fun!"
        className="bg-primary"
      />
      <ShortDescription />
    </div>
  );
}
