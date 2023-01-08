import React from "react";
import code1 from "./code1.svg";
import code2 from "./code2.svg";
import code3 from "./code3.svg";
import code4 from "./code4.svg";
const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="single-dev">
        <h1>Web Development</h1>
        <img src={code1} alt="code1" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
      <div className="single-dev">
        <h1>Web Design</h1>
        <img src={code2} alt="code1" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
      <div className="single-dev">
        <h1>Mern Stack</h1>
        <img src={code3} alt="code1" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
      <div className="single-dev">
        <h1>Full Stack</h1>
        <img src={code4} alt="code1" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          porro sunt sapiente, est iste dolor.
        </p>
      </div>
    </div>
  );
};

export default Main;
