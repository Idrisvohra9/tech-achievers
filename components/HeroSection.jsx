import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";
import Logo from "@/assets/images/brainy.png";
import NumberTicker from "@/components/ui/number-ticker";
import { Boxes } from "./ui/background-boxes";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-primary h-full w-screen overflow-hidden">
      <div className="w-screen h-screen absolute left-0 top-0 overflow-hidden">
        <Boxes />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </div>
      <div className="w-screen overflow-hidden absolute left-0 top-10 z-20">
        <VelocityScroll className="text-gray-300">
          <div className="w-3 bg-orange-400 h-8 sm:h-10 md:h-12 lg:h-14 inline-block mx-4"></div>
          <h1 className="inline-block">Pioneering Your Digital Future</h1>
        </VelocityScroll>{" "}
        <VelocityScroll
          className="text-gray-400 text-sm"
          smallText
          direction={-1}
        >
          <h2 className="inline-block">Official website of Tech Achievers - </h2>
        </VelocityScroll>
        <h1 className="text-pretty text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-400 font-extrabold mt-4 text-center animate-fade-in">
          We are At{" "}
          <NumberTicker
            value={100}
            className="text-gray-50 hover:text-orange-200 transition-colors"
          />
          {"+ "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Subscribers
          </span>
        </h1>
      </div>
      <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 pointer-events-none">
        <Image
          alt="logo"
          src={Logo}
          className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 relative z-10 transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto"
        />
      </div>
      <div className="w-screen h-screen flex justify-center items-center absolute left-0 top-52 pointer-events-none">
        <Link
          className="bg-[#c4302b] text-white border border-[#c4302b] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-4 text-xl pointer-events-auto"
          href="https://www.youtube.com/@TechAchievers-IV/featured"
        >
          <span className="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Subscribe!
        </Link>
      </div>
    </div>
  );
}
