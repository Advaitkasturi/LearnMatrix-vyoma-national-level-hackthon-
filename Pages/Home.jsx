import React from "react";
import Learn from "../assets/Learn.jpg";

function Home() {
  return (
    <div
      id="home"
      className="h-screen w-full flex items-center justify-center bg-transparent"
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={Learn}
          alt="LearnMatrix Logo"
          className="h-32 w-32 md:h-48 md:w-48 rounded-full border-4 border-[#FF7849] shadow-xl object-cover mb-6 transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-center text-3xl md:text-6xl font-extrabold font-sans tracking-wider drop-shadow-lg">
          <span className="text-white">Learn</span>
          <span className="text-[#8FBCFF]">Matrix</span>
        </h1>
        <p className="mt-2 text-lg md:text-xl text-[#E0E0FF] font-light tracking-wide">
          Learn • Evolve • Lead
        </p>
      </div>
    </div>
  );
}

export default Home;
