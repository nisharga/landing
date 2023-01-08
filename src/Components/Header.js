import React from "react";
import Navsm from "./Navsm";
const Header = () => {
  return (
    <nav
      className=" flex h-10 items-center justify-between
    bg-[#2B2B2B] px-5 text-white"
    >
      <div className="text-lg font-bold">Logo</div>
      <div className="text-xl">icon</div>
    </nav>
  );
};

export default Header;
