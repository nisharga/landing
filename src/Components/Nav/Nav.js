import React from "react";
import Logo from "./../Logo/Logo";

const Nav = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between rounded-full bg-gray-500">
      <div className="logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-gray-900 hover:text-pink-700">
            Project
          </a>
        </li>
        <li>
          <a href="/" className="text-gray-900 hover:text-pink-700">
            Priceing
          </a>
        </li>
        <li>
          <a href="/" className="text-gray-900 hover:text-pink-700">
            About
          </a>
        </li>
        <li>
          <a href="/" className="text-gray-900 hover:text-pink-700">
            Contact
          </a>
        </li>
      </ul>
      <button
        className="mr-1 rounded-full bg-blue-400
      px-6 py-2 capitalize text-white hover:bg-blue-500"
      >
        Sign Up
      </button>
    </nav>
  );
};

export default Nav;
