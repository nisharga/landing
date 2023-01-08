import React from "react";
import Rectraingle from "../Assets/bottom-img1.png";
const Heroarea = () => {
  return (
    <section className="black-gard text-white">
      {/* Hero Text Section */}
      <div className="flex flex-col gap-2 space-y-1 px-5 pt-16">
        <h1 className="text-2xl">
          We Provide
          <br />
          Architextural design
          <br />
          and Construction
          <br />
        </h1>
        <p className="text-base text-[#C4C4C4]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          dolorum reprehenderit repellat qui eos magni aspernatur consectetur
          itaque ullam. Est consectetur doloribus soluta praesentium impedit
          asperiores sit suscipit necessitatibus maxime.
        </p>
      </div>

      <button className="mybg mt-4 ml-5 self-start py-1.5 px-3 text-base">
        Discover More
      </button>

      {/* Hero Image  */}
      <div className="mt-5 flex justify-end">
        <img src={Rectraingle} alt="ad" className="h-36 w-36" />
      </div>
    </section>
  );
};

export default Heroarea;
