"use client";
import { useRef } from "react";
import Image from "next/image";
import Logo from "@/assets/images/brainy.png";
import SparklesText from "./ui/sparkles-text";
import confetti from "canvas-confetti";
export default function SparklyLogo() {
  const audioRef = useRef(null);

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };
    audioRef.current.play();
    frame();

  };
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 pointer-events-none flex-col ">
      <div
        className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 drop-shadow-2xl cursor-pointer pointer-events-auto"
        onClick={handleClick}
      >
        <Image
          alt="logo"
          src={Logo}
          className="h-28 w-28 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-48 lg:w-48 relative z-10 shadow-black"
        />
        <SparklesText
          text="Tech Achievers"
          className={"font-playwrite text-gray-100 mt-4"}
        />
        <audio ref={audioRef} src="/music/daAudio.mp3" />
      </div>
    </div>
  );
}
