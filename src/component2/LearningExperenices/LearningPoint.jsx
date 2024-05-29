import React, { useContext, useState } from "react";
import Tick from "../../asset/tick.svg";
import { LearningContext } from "./LearningExperenices";

export default function LearningPoint({ dataPoint }) {
  const { Index, setIndex } = useContext(LearningContext);

  return (
    <div>
      <div className="flex items-center m-2">
        <div
          className={`h-[24px] w-[24px] rounded-[25px] mr-2 text-center ${
            Index === dataPoint.id
              ? "bg-[#6A11B0] text-white"
              : "border border-grey-600 bg-white text-gray-600"
          }`}
        >
          {dataPoint.id}
        </div>
        <h2 className="font-semibold text-[14px] lg:text-[16px]">
          {dataPoint.title}
        </h2>
      </div>
      <div
        className={`flex transition-opacity duration-300 ease-in-out ${
          Index === dataPoint.id ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="mx-[17px] border" />
        <div>
          {dataPoint.points.map((point, key) => (
            <div key={key} className="flex  items-start ">
              <img src={Tick} alt="" className="mr-[5px] mb-[5px]"/>
              <p className=" text-[10px] lg:text-[14px]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
