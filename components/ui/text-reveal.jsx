"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Fun from "../../assets/images/guys/1.png";
import Simple from "../../assets/images/guys/3.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <div
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl justify-center items-center"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="xl:lg-3 relative mx-1 lg:mx-2.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={`relative cursor-pointer ${
          children === "Simple"
            ? "text-red-500"
            : children === "Fun!"
            ? "text-blue-400"
            : "text-gray-300"
        }`}
      >
        {children}
        {isHovered && (children === "Simple" || children === "Fun!") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={children === "Simple" ? Simple : Fun}
              alt={children}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full w-64 h-64 pointer-events-none object-contain"
              objectFit="contain"
            />
          </motion.div>
        )}
      </motion.span>
    </span>
  );
};
export default TextRevealByWord;
