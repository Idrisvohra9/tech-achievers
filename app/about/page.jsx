import React from "react";
import ThreeScene from "@/components/RoboThreeScene";
import { ReviewMarquee } from "@/components/ReviewMarquee";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function page() {
  return (
    <div className="min-h-screen h-full">
      <div className="absolute p-8 px-12">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-gray-300 font-black">
          About Us
        </h1>
        <p className="text-gray-400 text-2xl font-bold font-playwrite">
          What makes us great?
        </p>
      </div>
      <ThreeScene />
      <ReviewMarquee />
      <TextGenerateEffect
        words="We Learn, Create, Simplify, Teach, Repeat"
        duration={2}
        className="text-center text-gray-300 -translate-y-full cursor-pointer"
      />
    </div>
  );
}
