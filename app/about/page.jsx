import React from "react";
import ThreeScene from "@/components/ThreeScene";
import { ReviewMarquee } from "@/components/ReviewMarquee";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function page() {
  return (
    <div className="min-h-screen p-8 px-12">
      <div className="absolute">
        <h1 className="text-8xl text-gray-300 font-black">About Us</h1>
        <p className="text-gray-400 text-2xl font-bold font-playwrite">
          What makes us great?
        </p>
      </div>
      <ThreeScene />
      <ReviewMarquee />
      <TextGenerateEffect
        words="We Learn, Create, Simplify, Teach, Repeat"
        duration={2}
        className="text-center text-gray-300 -translate-y-full -mt-20"
      />
    </div>
  );
}
