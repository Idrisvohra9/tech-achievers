import TrophyThreeScene from "@/components/TrophyThreeScene";

export default function HeroAcademics() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-12">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center mt-96 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-gray-300">
            Let's{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Achieve Together!
            </span>
          </h1>
          <p className="text-gray-400 text-xl sm:text-2xl font-bold font-playwrite mt-4 sm:mt-5">
            Explore some of our courses both free and paid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-[2px] py-[1px] rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="px-7 py-3 bg-slate-700/20 rounded-lg">Login</div>
            </button>
            <button className="px-[2px] py-[1px] rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="px-7 py-3 bg-slate-700/50 rounded-lg">
                Sign Up
              </div>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 flex justify-center flex-col items-center mt-8 lg:mt-0">
          <TrophyThreeScene />
        </div>
      </div>
    </div>
  );
}
