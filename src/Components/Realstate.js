import React from "react";
import myimg from "../Assets/bottom-img.png";
import mytop from "../Assets/soleMate.png";
const Realstate = () => {
  return (
    <div className="mb-40 p-5">
      <div
        className="mybg flex
      h-[340px] items-end justify-center 
      rounded-md bg-cover bg-no-repeat"
      >
        <div
          className="black-gard relative top-20
        h-[250px] w-[250px]"
        >
          <div className="gap-3 p-5 text-center text-white">
            <div className="flex justify-center">
              <img src={myimg} alt="a" className="" />
            </div>
            <h2 className="text-black-dark my-1 text-lg font-semibold">
              Rasel Domingo
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              reiciendis exercitationem dolores libero possimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realstate;
