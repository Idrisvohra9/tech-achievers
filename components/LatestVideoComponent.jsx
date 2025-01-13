import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import BoxReveal from "./ui/box-reveal";
export function LatestVideoComponent() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative p-5 flex-col">
      <BoxReveal boxColor={"#fd8bbc"} duration={0.7}>
        <h2 className="text-5xl font-extrabold text-gray-100 text-center">
          Our Latest Video
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#eca184"} duration={0.7}>
        <h2 className="text-xl font-light text-gray-300 text-center max-w-2xl mb-12 mt-6">
          See what we have to offer
        </h2>
      </BoxReveal>
      <HeroVideoDialog
        className="block w-4/6"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/jDR7eMufD0w?si=aDC1Amevw18hfvFw"
        thumbnailSrc="/deno.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
