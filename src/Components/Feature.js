import React from "react";
import singleimage from "../Assets/Rectangle .png";
const Feature = () => {
  return (
    <div className="mt-5 p-5">
      <div className="flex flex-col gap-2">
        <div className="blue-gard h-1 w-[90px] rounded"></div>
        <h2 className="text-xl font-semibold text-black-700">
          What make us <br /> difference?
        </h2>
        <p className="text-base text-black-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          fugiat tempora autem, vel dicta aliquam tenetur repudiandae laborum
          sit velit.
        </p>
      </div>
      <div className="singlediv mt-10 flex flex-col items-center gap-4 text-center">
        <div className="flex max-w-[14.625rem] flex-col items-center gap-2">
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

        <div className="flex max-w-[14.625rem] flex-col items-center gap-2">
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

        <div className="flex max-w-[14.625rem] flex-col items-center gap-2">
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
    </div>
  );
};

export default Feature;
