import React from "react";

const LandingPage = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-screen bg-black">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        KNEAZLE
      </h1>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light w-full sm:w-[70%] md:w-[60%] lg:w-[50%] text-center md:text-left p-6 md:p-9">
            Build machine learning models and specialize in Android, iOS, and web development, with a strong focus on security and performance.
        </h2>
    </div>
  );
};

export default LandingPage;