import React from "react";
const Sumit = () => {
  return (
    <div
      class="h-screen flex items-center
justify-center bg-gray-600"
    >
      <div
        class="max-w-sm mx-auto space-y-2 
  p-8 bg-white rounded-xl shadow-md sm:flex
  sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6"
      >
        <img
          class="h-24 w-24 mx-auto rounded-full ring-4 
    ring-green-400 sm:flex-shrink-0 hover:scale-105 duration-500"
          src="https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/09/14/sakib.jpg?itok=wnUMWqTl&timestamp=1663225246"
          alt="Lerarn sumit"
        />
        <div class="text-center space-y-2">
          <div class="">
            <h1
              class="text-lg text-black
            font-semibold text-boro"
            >
              Learn With Sumit
            </h1>
            <p class="text-gray-500 font-medium">Youtube Video</p>
          </div>
          <button class="btn-style">Visit Now</button>
          <button class="btn-style">Nishk</button>
        </div>
      </div>
    </div>
  );
};

export default Sumit;
