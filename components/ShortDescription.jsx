import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import GotYou from "@/assets/images/got-you.png";
import Image from "next/image";

export default async function ShortDescription() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center text-gray-100 p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            alt="A man emoting Got You"
            src={GotYou}
            className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-[450px] lg:w-[450px] object-contain"          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8 flex justify-center flex-col items-center">
          <BoxReveal boxColor={"#fd8bbc"} duration={0.7}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-100 text-center">
              Welcome to <span className="text-orange-400">Tech Achievers</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#eca184"} duration={0.7}>
            <h2 className="text-xl font-light text-gray-300 text-center">
              Explore the world of technology through tutorials, tips, and
              engaging content crafted to ignite your passion for learning.
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#a786ff"} duration={0.7}>
            <div className="text-gray-400 dark:text-gray-300 leading-relaxed text-lg text-center">
              🎥 Watch our fun and educational videos on programming, software,
              and the latest tech trends.
              <br />
              💡 Dive into our unique approach to making tech easy to
              understand.
              <br />
              🏆 Join the growing community of learners and achievers at{" "}
              <span className="text-orange-400 font-semibold">
                Tech Achievers
              </span>
              !
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#f8deb1"} duration={0.7}>
            <Button className="mt-6 bg-orange-500 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg transition-colors duration-300">
              <a
                href="https://www.youtube.com/@TechAchievers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe Now
              </a>
            </Button>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}
