import React from "react";
import code1 from "./code1.svg";
import code2 from "./code2.svg";
import code3 from "./code3.svg";
import code4 from "./code4.svg";
const Main = () => {
  return (
    <div className="container mx-auto my-12 grid grid-cols-2 overflow-y-auto text-center md:grid-cols-4">
      <div className="single-dev p-5">
        <h1 className="text-lg capitalize text-blue-900 md:text-2xl">
          Web Development
        </h1>
        <img src={code1} alt="code1" className="mx-auto mb-5 h-40 w-40" />
        <p className="color-gyay-400 text-base md:text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
      <div className="single-dev p-5">
        <h1 className="min-h-15 text-lg capitalize text-blue-900 md:text-2xl">
          Web Design
        </h1>
        <img src={code2} alt="code1" className="mx-auto mb-5 h-40 w-40" />
        <p className="color-gyay-400 text-base md:text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
      <div className="single-dev p-5">
        <h1 className="min-h-15 text-lg capitalize text-blue-900 md:text-2xl">
          Mern Stack
        </h1>
        <img src={code3} alt="code1" className="mx-auto mb-5 h-40 w-40" />
        <p className="color-gyay-400 text-base md:text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
      <div className="single-dev p-5">
        <h1 className="min-h-15 text-lg capitalize text-blue-900 md:text-2xl">
          Full Stack
        </h1>
        <img src={code4} alt="code1" className="mx-auto mb-5 h-40 w-40" />
        <p className="color-gyay-400 text-base md:text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
    </div>
  );
};

export default Main;
