import React from "react";
import Point from "../CourseCategory/Point";

export default function Prerequisites() {
  const data = [
    {
      id: 1,
      description: "If you're just starting out, this is the place for you.",
    },
    {
      id: 2,
      description:
        "The right aptitude, logical thinking, and drive for curiosity are all you need.",
    },
  ];

  return (
    <div className=" mt-[20px] lg:mx-[70px] mx-[20px] lg:w-[45%] mb-[50px]">
      <h3 className="text-[10px] lg:text-[12px] text-[#C5135D] font-semibold ">
        FULL-STACK DEVELOPMENT BOOTCAMP PREREQUISITES
      </h3>
      <h2 className=" text:[14px] lg:text-[20px] font-semibold">
        <span className="smallRed-gradient-text">Prerequisites</span> and
        Eligibility
      </h2>
      <div className="lg:flex block mx-auto mt-3">
        <div className="mr-[30px] lg:mr-[50px]">
          <div className="font-semibold text-[12px] lg:text-[16px] text-[#6A11B0] bg-white border rounded-md p-1 pr-[40px]">
            Prerequisites
          </div>
          <div className="font-semibold text-[12px] lg:text-[16px] text-[#666666] mt-3">
            Who Can Attend
          </div>
        </div>
        <div>
          <h3 className=" font-semibold text-[12px] lg:text-[16px]">
            <span className="smallRed-gradient-text">
              Any graduate can pursue.
            </span>{" "}
            A tech background is preferrable.
          </h3>
          {data.map((dataVal) => (
            <Point text={dataVal.description} key={dataVal.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
