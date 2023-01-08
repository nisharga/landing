import React from "react";

const Concept = () => {
  return (
    <div>
      <div
        className="w-full text-xl text-gray-600 
      first-letter:text-4xl first-letter:bg-gray-900 selection:bg-red-900
      dark:md:hover:bg-green-900
      "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi beatae rem, iusto molestiae cupiditate maxime esse? Quaerat
        labore mollitia eius, excepturi harum similique ea laborum eaq ue, quis
        eveniet nulla velit? Adipisci laudantium est tenetur optio placeat
        ullam, vitae a.
      </div>

      <div className="mt-10">
        <label
          htmlFor="email"
          className="after:content-['*'] after:ml-1 text-[#0000ff]"
        >
          Email
        </label>
      </div>

      <button className="shadow-lg shadow-cyan-900">Click</button>
    </div>
  );
};

export default Concept;
