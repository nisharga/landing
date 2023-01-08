import React from "react";

const Status = () => {
  return (
    <section
      className="blue-gard flex flex-col 
      gap-4 p-5 text-white"
    >
      <div className="flex justify-between">
        <div className="">
          <h1>
            <span className="text-2xl font-bold">25</span>
            <span className="ml-1 text-lg font-medium">Years</span>
          </h1>
          <h3 className="-mt-3 text-xl font-semibold">Operated</h3>
        </div>
        <div>Logo</div>
      </div>
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae a
        iure, dolorem fugit sit recusandae consectetur nulla illo? Hic,
        repellendus. Quia eaque placeat enim qui cumque, magni dicta quam.
      </p>
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-xl font-bold">300+</h2>
          <p>
            Amazing <br /> Client
          </p>
        </div>{" "}
        {/** Single div */}
        <div className="">
          <h2 className="text-xl font-bold">300+</h2>
          <p>
            Amazing <br /> Client
          </p>
        </div>{" "}
        {/** Single div */}
        <div className="">
          <h2 className="text-xl font-bold">300+</h2>
          <p>
            Amazing <br /> Client
          </p>
        </div>{" "}
        {/** Single div */}
      </div>
    </section>
  );
};

export default Status;
