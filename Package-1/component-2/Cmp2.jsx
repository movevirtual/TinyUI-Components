import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import "./style.css";

function Cmp2() {
  const [sliderValue, setSliderValue] = useState(25);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const getPriceByValue = (value) => {
    switch (value) {
      case 25:
        return 20;
      case 50:
        return 18;
      case 75:
        return 15;
      case 100:
        return 10;
      default:
        return 20;
    }
  };

  const price = getPriceByValue(sliderValue);

  return (
    <div className="border border-slate-400/20 rounded-3xl p-10 w-[22rem] lg:w-[25rem]">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-center flex-col gap-y-2">
          <p className="text-base font-medium">Price by seat</p>
          <h2 className="text-6xl font-bold">${price}</h2>
        </div>
        <div className="py-10">
          <RangeSlider onValueChange={handleSliderChange} />
        </div>
      </div>
      <div className="lower-part pt-5 flex flex-col gap-y-5">
        <p className="font-semibold text-lg">
          Update your banking info to get your cashback!
        </p>
        <button className="bg-black w-full text-sm lg:text-base text-white font-semibold rounded-full py-3 lg:py-2 px-10">
          Setup Payment Methods
        </button>
      </div>
    </div>
  );
}

export default Cmp2;
