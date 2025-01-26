import TrophyThreeScene from "@/components/TrophyThreeScene";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/ui/aurora-text";
import React from "react";

export default function page() {
  return (
    <AuroraBackground>
      <div className="min-w-screen min-h-screen h-full relative w-full">
        <div className="w-full min-h-screen flex items-center justify-center text-gray-100 p-8">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-gray-300 -mt-20">
                Let's{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                  Achieve Together!
                </span>
              </h1>
            </div>

            <div className="w-full lg:w-1/2 space-y-8 flex justify-center flex-col items-center">
              <TrophyThreeScene />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
