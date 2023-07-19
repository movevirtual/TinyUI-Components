import React from "react";
import { useState } from "react";

const RangeSlider = ({ onValueChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <form className="w-full">
      <div className="relative w-full">
        <div className="absolute left-0 top-6 mt-1">
          <p className="text-sm lg:text-base text-slate-500">15%</p>
        </div>
        <div className="absolute left-[4rem] lg:left-[5.8rem] top-6 mt-1">
          <p className="text-sm lg:text-base text-slate-500">25%</p>
        </div>
        <div className="absolute left-[11.5rem] lg:left-[12.5rem] top-6 mt-1">
          <p className="text-sm lg:text-base text-slate-500">75%</p>
        </div>
        <input
          type="range"
          className="pricing-slider bg-[#EFF0F6] w-full h-2.5 rounded-full"
          value={value}
          onChange={handleChange}
          min={25}
          max={100}
          step={25}
        />
      </div>
      <style>{`
          .pricing-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            border-radius: 5px;
            background: linear-gradient(to right, #E3E3E7 0%, #E3E3E8 ${value-10}%, #EFF0F8 ${value-8}%, #EFF0F6 100%);
            outline: none;
            opacity: 0.7;
            transition: opacity 0.2s;
          }
  
          .pricing-slider::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: #D8BC2A;
            border: 1px solid #dfdfdf;
            cursor: pointer;
            border-radius: 50%;
            z-index: 2;
          }
          
  
          .pricing-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            background: #D8BC2A;
            border: 1px solid #dfdfdf;
            cursor: pointer;
            border-radius: 50%;
            z-index: 2;
          }
        `}</style>
    </form>
  );
};

export default RangeSlider;
