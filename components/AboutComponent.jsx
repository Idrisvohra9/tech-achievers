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
        <h2 className="text-5xl font-extrabold text-gray-100">
          What we talk about?
        </h2>
      </BoxReveal>

      <IconCloud images={images} />
    </div>
  );
}
