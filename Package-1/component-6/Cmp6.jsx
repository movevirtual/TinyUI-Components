import React from "react";
import "./style.css";

function Cmp6() {
  return (
    <div className="container w-fit">
      <div className="w-[20rem] rounded-3xl bg-white/90 backdrop-blur-md lg:w-[25rem] border border-slate-400/20 h-[15rem] flex flex-col justify-between shadow-sm drop-shadow ">
        <div className="p-5">
          <h2 className="text-lg font-bold">Tell us about yourself</h2>
          <h2 className="text-lg font-semibold text-slate-500/50">
            Tell us about yourself
          </h2>
        </div>
        <div className="p-5">
          <a
            className="text-[#5C6FEE] hover:underline hover:underline-offset-4 hover:text-blue-700 font-bold text-sm"
            href="#"
          >
            View Card
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cmp6;
