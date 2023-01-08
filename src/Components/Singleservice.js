import React from "react";
import singleimage from "../Assets/illutration.png";
const Singleservice = () => {
  return (
    <div className="flex gap-5 overflow-x-auto p-5">
      <div className="flex min-w-[16.25rem] flex-col gap-2">
        <div>
          <img className="shadow-md" src={singleimage} alt="other" />
        </div>
        <h2 className="text-lg font-semibold text-black-700">Industrial</h2>
        <p className="text-base text-black-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          fugiat tempora autem, vel dicta aliquam tenetur repudiandae laborum
          sit velit.
        </p>
      </div>
      <div className="flex min-w-[16.25rem] flex-col gap-2">
        <div>
          <img className="shadow-md" src={singleimage} alt="other" />
        </div>
        <h2 className="text-lg font-semibold text-black-700">Industrial</h2>
        <p className="text-base text-black-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          fugiat tempora autem, vel dicta aliquam tenetur repudiandae laborum
          sit velit.
        </p>
      </div>
      <div className="flex min-w-[16.25rem] flex-col gap-2">
        <div>
          <img className="shadow-md" src={singleimage} alt="other" />
        </div>
        <h2 className="text-lg font-semibold text-black-700">Industrial</h2>
        <p className="text-base text-black-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          fugiat tempora autem, vel dicta aliquam tenetur repudiandae laborum
          sit velit.
        </p>
      </div>
    </div>
  );
};

export default Singleservice;
