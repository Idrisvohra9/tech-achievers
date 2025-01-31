import HeroAcademics from "@/components/HeroAcademics";
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";
import AcademicTabs from "@/components/AcademicTabs";
import Socials from "@/components/Socials";
export default function page() {
  return (
    <AuroraBackground>
      <div className="flex flex-col min-h-screen w-full h-full relative z-10">
        <HeroAcademics />
        <div className="bg-[#18171b] relative min-h-screen w-screen h-[200vh] pb-20">
          <AcademicTabs />
        </div>
        <footer className={`w-full py-6  relative z-0 bg-[#18171b]`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="mt-5 flex justify-center md:justify-start">
                <button className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
                  <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-500 ease-in group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>

                  <span className="absolute top-0 left-0 w-full h-4 rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>

                  <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-500 ease-in group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                    <span className="select-none">Let's Collaborate</span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold mb-4 text-gray-100">
                  Socials
                </h3>
                <Socials />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
}
