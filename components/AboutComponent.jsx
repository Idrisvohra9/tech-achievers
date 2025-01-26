import { IconCloud } from "@/components/ui/icon-cloud";
import BoxReveal from "./ui/box-reveal";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export function AboutComponent() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full max-w-full h-screen items-center justify-center overflow-hidden flex-col">
      <BoxReveal boxColor={"#fd8bbc"} duration={0.7}>
        <h1 className="text-5xl font-black text-gray-100">
          What we talk about?
        </h1>
      </BoxReveal>
      <BoxReveal boxColor={"#eca184"} duration={0.7}>
        <h2 className="text-xl font-light text-gray-300 text-center font-playwrite max-w-2xl mb-12 mt-6">
          We talk about everything tech! Come be a part!
        </h2>
      </BoxReveal>
      <IconCloud images={images} />
    </div>
  );
}
