"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { ColourfulText } from "./colorful-text";
import { FlipText } from "./flip-text";
import { HyperText } from "./hyper-text";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
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
        return <span className="text-blue-600">{word}</span>;
      case "Create,":
        return <HyperText>{word}</HyperText>;
      case "Simplify,":
        return <ColourfulText text={word} />;
      case "Repeat":
        return <FlipText word={word} duration={2} delayMultiple={1.4} />;
      case "Teach,":
        return <span className="bg-orange-500 p-1 rounded-md">{word}</span>;
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
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-5xl font-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
