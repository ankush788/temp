import React from "react";
import Amazon from "../../asset/Amazon.png";
import AxisBank from "../../asset/Axis.png";
import Accenture from "../../asset/Accenture.png";
import Adobe from "../../asset/Adobe.png";

function HiringCompany() {
  return (
    <div className=" md:w-3/5 mx-auto">
      <div className="font-semibold">Premium Hiring Partner Ecosystem</div>
      <div className="flex justify-between md:pt-[25px] sm:pt-[10px]">
        <img className="h-[22px] w-[100px]" src={Amazon} alt="" />
        <img className="h-[22px] w-[100px]" src={AxisBank} alt="" />
        <img className="h-[22px] w-[100px]" src={Accenture} alt="" />
        <img className="h-[22px] w-[100px]" src={Adobe} alt="" />
        <img className="h-[22px] w-[100px]" src={Amazon} alt="" />
        <img className="h-[22px] w-[100px]" src={AxisBank} alt="" />
      </div>
    </div>
  );
}

export default HiringCompany;
