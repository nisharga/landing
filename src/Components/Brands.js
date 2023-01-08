import React from "react";
import pic1 from "../Assets/bottom-img.png";
import pic2 from "../Assets/bottom-img1.png";
import pic3 from "../Assets/circle.png";
import pic4 from "../Assets/Rectangle .png";
import pic5 from "../Assets/soleMate.png";
const Brands = () => {
  return (
    <div className="flex h-[100px] items-center gap-8 overflow-x-auto">
      <div className="grid h-20 min-w-[6rem] place-content-center bg-slate-400">
        <img src={pic1} alt="pic1"></img>
      </div>
      <div className="grid h-20 min-w-[6rem] place-content-center bg-slate-400">
        <img src={pic2} alt="pic2"></img>
      </div>
      <div className="grid h-20 min-w-[6rem] place-content-center bg-slate-400">
        <img src={pic3} alt="pic2"></img>
      </div>
      <div className="grid h-20 min-w-[6rem] place-content-center bg-slate-400">
        <img src={pic4} alt="pic2"></img>
      </div>
      <div className="grid h-20 min-w-[6rem] place-content-center bg-slate-400">
        <img src={pic5} alt="pic2"></img>
      </div>
    </div>
  );
};

export default Brands;
