import React from "react";
import heroimg from "./code.svg";
const Hero = () => {
  return (
    <div className="container mx-auto mt-0 flex md:mt-8">
      <div className="mt-6 w-1/2 space-y-4 p-6">
        <h1 className="py-4 text-4xl font-bold text-blue-400 md:text-6xl">
          Beautifully <br /> Simple, Code
        </h1>
        <p
          className="text-base text-blue-900
        md:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo
          sed possimus, ea perspiciatis aspernatur consequuntur ducimus magnam
          quisquam labore.
        </p>
        <button
          className="mt-4 
          rounded-full bg-blue-400 
          px-6 py-2 text-base 
          capitalize hover:bg-blue-500 
        md:px-6 md:py-3"
        >
          get started
        </button>
      </div>
      <div className="flex w-1/2 items-center">
        <img src={heroimg} alt="code" className="mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
