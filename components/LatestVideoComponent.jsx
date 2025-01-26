"use client";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import BoxReveal from "./ui/box-reveal";
import { useEffect, useState } from "react";
import { fetchLatestVideo } from "@/lib/youtube";
export function LatestVideoComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLatestVideo();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center relative p-8 flex-col">
      <BoxReveal boxColor={"#fd8bbc"} duration={0.7}>
        <h2 className="text-5xl font-extrabold text-gray-100 text-center">
          Our Latest Video
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#eca184"} duration={0.7}>
        <h2 className="text-xl font-light text-gray-300 text-center font-playwrite max-w-2xl mb-12 mt-6">
          See what we have to offer
        </h2>
      </BoxReveal>
      <HeroVideoDialog
        className="block w-4/6 aspect-video"
        animationStyle="top-in-bottom-out"
        videoSrc={data?.url}
        thumbnailSrc={data?.thumbnail}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
