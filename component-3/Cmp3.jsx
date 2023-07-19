import React from "react";
import arrow from "./assets-cmp3/arrow.svg";

function Cmp3() {
  return (
    <div className="rounded-3xl flex flex-col justify-between p-5 bg-gray-100/50 border border-slate-400/20 h-[22rem] w-[20rem] lg:w-[20rem]">
      <div className="p-5 flex items-center justify-center">
        <a
          href="#"
          className="text-black hover:bg-black/5 hover:shadow hover:drop-shadow flex items-center gap-x-2.5 justify-between font-semibold bg-white/25 border border-slate-500/50 py-1.5 px-5 rounded-full"
        >
          <span>Click here</span>
          <img className="h-3.5 w-3.5" src={arrow} alt="" />
        </a>
      </div>
      <div>
        <p className="font-bold text-slate-700/50">Today Stats</p>
        <p className="font-semibold text-slate-800">5,000 steps today</p>
      </div>
    </div>
  );
}

export default Cmp3;
