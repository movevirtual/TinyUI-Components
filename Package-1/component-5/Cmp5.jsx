import React from "react";
import "./style.css";

function Cmp5() {
  return (
    <div className="coffee-container relative isolate rounded-3xl flex items-center justify-between gap-x-2 lg:gap-x-10 w-[22rem] lg:w-[28rem] p-3 ">
      <div className="w-1/3"></div>
      <div
        className="w-2/3 flex flex-col gap-y-2 px-5 py-10
      "
      >
        <h3 className="font-bold text-xl lg:text-2xl text-[#3F6C29]">
          Summer Drinks
          <br /> Cozy & Fresh!
        </h3>
        <p className="text-xs lg:text-sm text-[#3E5F2E] max-w-[15rem] font-medium">
          Get your summer drink today by ordering from the app.
        </p>
        <button className="mt-1.5 text-black w-full hover:drop-shadow-xl transition-all ease-in-out  drop-shadow shadow-md font-semibold bg-white py-1.5 px-5 rounded-full">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Cmp5;
