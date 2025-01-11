import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";

export default async function ShortDescription() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8 p-8 bg-primary">
      <BoxReveal boxColor={"orange"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Magic UI<span className="text-orange-400">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"orange"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-orange-400">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"orange"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-orange-400"> React</span>,
            <span className="font-semibold text-orange-400"> Typescript</span>,
            <span className="font-semibold text-orange-400"> Tailwind CSS</span>
            , and
            <span className="font-semibold text-orange-400">
              {" "}
              Framer Motion
            </span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"orange"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[orange]">Explore</Button>
      </BoxReveal>
    </div>
  );
}
