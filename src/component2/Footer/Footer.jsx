import React from "react";
import phoneImg from "../../asset/icon/phone.svg";
export default function Footer() {
  return (
    <div className=" mt-[100px] lg:mx-[70px] mx-[20px] font-semibold mb-[50px] ">
      <h2 className="lg:text-[18px] text-[14px]">
        Propel <span className="smallRed-gradient-text">Learner Support</span>
      </h2>
      <p className="lg:text-[14px] text-[12px] text-[#666666]">
        Talk to our experts. We’re available 24/7.
      </p>
      <div className="lg:flex  lg:justify-evenly ">
        <div className="flex mt-[20px] justify-center items-center">
          <p>Indian Nationals </p>
          <div className=" red-gradient  rounded-full ml-4">
            <div className=" m-[1px] rounded-full p-[6px]">
              <a
                className="flex  px-[10px] py-[3px]  items-center"
                href="tel:+916363409869"
              >
                <img
                  src={phoneImg}
                  alt=""
                  className="lg:h-[14px] h-[12px] m-1"
                />
                <span className="font-semibold lg:text-[12px] text-[10px]">
                  +916363409869
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-[20px] justify-center items-center">
          <p className="">Foreign Nationals</p>
          <div className=" red-gradient  rounded-full ml-4">
            <div className=" m-[1px] rounded-full p-[6px]">
              <a
                className="flex  px-[10px] py-[3px]  items-center"
                href="tel:+916363409869"
              >
                <img
                  src={phoneImg}
                  alt=""
                  className="lg:h-[14px] h-[12px] m-1"
                />
                <span className="font-semibold lg:text-[12px] text-[10px]">
                  +916363409869
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
