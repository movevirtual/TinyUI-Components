import React from "react";
import followerIcon from "./assets-cmp1/follower-icon.svg";

function Cmp1() {
  return (
    <div className="border-slate-400/20 border rounded-3xl shadow-sm drop-shadow-sm w-fit">
      <div className="upper-part-container bg-[#D8EEE7] h-32 lg:h-36 p-7 w-[20rem] lg:w-[25rem] rounded-t-3xl">
        <h1 className="text-xl lg:text-2xl font-bold ">
          Tell us about yourself
        </h1>
      </div>
      <div className="lower-part-container px-7 py-5 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-bold">25</p>
            <div className="flex items-center gap-x-2">
              <img className="h-5 w-5" src={followerIcon} alt="" />
              <p className="font-medium text-slate-500/50 text-sm lg:text-base">
                FOLLOWERS{" "}
              </p>
            </div>
          </div>
          <div className="button">
            <button className="bg-black text-sm lg:text-base text-white font-semibold rounded-full py-2 px-10">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cmp1;
