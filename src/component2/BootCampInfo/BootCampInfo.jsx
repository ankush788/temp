import React from "react";
import Point from "./Points";
import Thumbs from "../../asset/thumbsUp.svg";
export default function BootCampInfo() {
  let points = [];
  for (let i = 0; i < 6; i++) {
    points.push(<Point img={Thumbs} text={"hello I am ankush Singh"} />);
  }
  return (
    <div className="lg:mx-[70px] mx-[20px]">
      <h3 className="text-[#C5135D] lg:text-[12px] text-[10px] font-semibold">
        HOW OUR BOOTCAMP COMPARES
      </h3>
      <h2 className="smallRed-gradient-text  lg:text-[20px] text-[14px] font-semibold">
        Our Bootcamp is Unmatched.
      </h2>
      <h2>Here's Why.</h2>
      <div className="lg:flex justify-center lg:w-[75%] mx-auto block my-[20px]">
        <div className=" py-[20px] bg-white  inherit-all-bg   border-t border-b border-l rounded-[5px] lg:w-[32%] lg:my-0 my-[10px]">
          <h2 className="text-[#000] font-semibold text-center py-[5px] lg:text-[20px] text-[14px] border-b   ">
            Feature
          </h2>
          {points.map((ele, key) => ele)}
        </div>
        <div className=" py-[30px] bg-white  inherit-all-bg   border rounded-[5px]  lg:w-[34%] lg:my-[-10px] my-[10px]">
          <h2 className="text-[#EE2C3C] font-semibold text-center py-[5px] lg:text-[20px] text-[14px] border-b  ">
            upGrad
          </h2>
          {points.map((ele, key) => ele)}
        </div>
        <div className=" py-[20px] bg-white  inherit-all-bg  border-t border-b border-r rounded-[5px] lg:w-[32%] lg:my-0 my-[10px]">
          <h2 className="text-[#000] font-semibold text-center py-[5px] lg:text-[20px] text-[14px] border-b  ">
            Other Courses
          </h2>
          <div>{points.map((ele, key) => ele)}</div>
        </div>
      </div>
    </div>
  );
}
