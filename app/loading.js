import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const loadingStates = [
    {
      text: "Debugging the universe",
    },
    {
      text: "Code in the air",
    },
    {
      text: "Meeting the 1s and 0s",
    },
    {
      text: "They speak binary",
    },
    {
      text: "Let's compile a drink",
    },
    {
      text: "Refactor our life",
    },
    {
      text: "Code > Coffee > Life",
    },
    {
      text: "Welcome to Tech Achievers, bro!",
    },
  ];
  
export default function Loading() {
  return (
    (<div className="w-screen h-screen flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={true} duration={2000} />
    </div>)
  );
}
