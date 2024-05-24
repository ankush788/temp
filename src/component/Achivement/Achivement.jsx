import React from 'react'

function Achivement() {
  return (
    <div
      className="flex justify-between   items-center text-center border border-solid  shadow-[2px_2px_2px_#FCF1F5] rounded-[10px] py-2 
    lg:mx-[70px] mx-[20px]  my-[20px] bg-white inherit-all-bg"
    >
      <div className="flex-1">
        <p className="red-gradient-text font-semibold lg:text-[20px] text-[14px] ">
          ₹12LPA
        </p>
        <p className="text-[#504f4f]  lg:text-[14px] text-[10px]  font-medium">
          Average Salary
        </p>
      </div>
      <div className="border-l flex-1 ">
        <p className="red-gradient-text font-semibold  lg:text-[20px] text-[14px]">
          44%
        </p>
        <p className="text-[#504f4f]  lg:text-[14px] text-[10px] font-medium">
          Average Hike
        </p>
      </div>
      <div className="border-l flex-1">
        <p className="red-gradient-text font-semibold  lg:text-[20px] text-[14px]">
          302%
        </p>
        <p className="text-[#504f4f]  lg:text-[14px] text-[10px] font-medium">
          Highest Salary Hike
        </p>
      </div>
      <div className="border-l flex-1">
        <p className="red-gradient-text font-semibold  lg:text-[20px] text-[14px]">
          4,500+
        </p>
        <p className="text-[#504f4f]  lg:text-[14px] text-[10px] font-medium">
          Hiring Partners
        </p>
      </div>
      <div className="border-l flex-1">
        <p className="red-gradient-text font-semibold  lg:text-[20px] text-[14px]">
          450,000+
        </p>
        <p className="text-[#504f4f]  lg:text-[14px] text-[10px] font-medium">
          Careers Transitioned
        </p>
      </div>
    </div>
  );
}

export default Achivement
