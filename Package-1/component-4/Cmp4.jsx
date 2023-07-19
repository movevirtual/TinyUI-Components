import React from "react";
import surprise from "./assets-cmp4/surprise.svg";
import sync from "./assets-cmp4/sync.svg";

function Cmp4() {
  return (
    <div className="rounded-3xl flex flex-col justify-center gap-y-7 p-7 border border-slate-400/20 h-fit w-[22rem] lg:w-[27rem]">
      <div className="flex items-start gap-x-3">
        <div className="icon -mt-1">
          <img
            className="lg:h-8 lg:w-8 hover:rotate-45 transition-all ease-linear"
            src={sync}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-xl">Unlimited</h2>
          <p className="text-sm text-[#818181] max-w-[15rem]">
            Get your summer drink today by ordering from the app.
          </p>
        </div>
      </div>
      <div className=" border-b border-slate-400/10" />
      <div className="flex items-start gap-x-3">
        <div className="icon -mt-1 lg:-mt-2">
          <img className="h-8 w-8 lg:h-10 lg:w-10" src={surprise} alt="" />
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-xl">Surprise!</h2>
          <p className="text-sm text-[#818181] max-w-[15rem]">
            Get your summer drink today by ordering from the app.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cmp4;
