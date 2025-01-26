"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { ColourfulText } from "./colorful-text";
import { FlipText } from "./flip-text";
import { HyperText } from "./hyper-text";
import Image from "next/image";
import create from "@/assets/images/create.gif";
import learn from "@/assets/images/learn.gif";
import repeat from "@/assets/images/repeat.gif";
import teach from "@/assets/images/teach.gif";
import simplify from "@/assets/images/simplify.gif";
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const [hovered, setHovered] = useState(false);
  const [showImage, setShowImage] = useState(create);
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);
  const renderWord = (word) => {
    switch (word) {
      case "Learn,":
        return (
          <span
            className="text-blue-600"
            onMouseOver={() => {
              setHovered(true);
              setShowImage(learn);
            }}
          >
            {word}
          </span>
        );
      case "Create,":
        return (
          <HyperText
            onMouseOver={() => {
              setHovered(true);
              setShowImage(create);
            }}
          >
            {word}
          </HyperText>
        );
      case "Simplify,":
        return (
          <ColourfulText
            text={word}
            onMouseOver={() => {
              setHovered(true);
              setShowImage(simplify);
            }}
          />
        );
      case "Repeat":
        return (
          <FlipText
            word={word}
            duration={2}
            delayMultiple={1.4}
            onMouseOver={() => {
              setHovered(true);
              setShowImage(repeat);
            }}
          />
        );
      case "Teach,":
        return (
          <span
            className="bg-orange-500 p-1 rounded-md"
            onMouseOver={() => {
              setHovered(true);
              setShowImage(teach);
            }}
          >
            {word}
          </span>
        );
      default:
        return word;
    }
  };
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {renderWord(word)}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn("font-bold min-w-screen", className)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-center items-center h-40 w-full">
        {hovered && (
          <Image
            src={showImage}
            alt="Image that comes up when hovered on a word with meaning"
            className="w-40 h-40"
          />
        )}
      </div>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-5xl md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl font-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
