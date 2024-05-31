import React from "react";
import CertificationImg from "../../asset/certificateImg.svg";
import protection from "../../asset/icon/protection.svg";
import sharable from "../../asset/icon/sharable.svg";
import upgrade from "../../asset/upgrade.svg";
export default function Certification() {
  return (
    <div className="lg:mx-[70px] mx-[20px] my-[40px] lg:w-[65%] ">
      <h3 className="text-[#C5135D] lg:text-[14px] text-[10px] ">
        FULL-STACK DEVELOPMENT BOOTCAMP CERTIFICATION
      </h3>
      <h2 className="font-semibold lg:text-[20px] text-[14px] ">
        Your Full-Stack Development{" "}
      </h2>
      <h2 className="smallRed-gradient-text lg:text-[20px] text-[14px] font-semibold">
        Certificate Awaits
      </h2>
      <div className="lg:flex block mt-[20px] ">
        <div>
          <div className="flex">
            <img src={protection} alt="" />
            <div className="p-[15px]">
              <h2 className="lg:text-[16px] text-[10px] font-semibold">
                Industry-Acclaimed Certification
              </h2>
              <p className="lg:text-[14px] text-[10px] text-[#666666]">
                Enhance your credibility and distinguish yourself among peers
                and industry professionals.
              </p>
            </div>
          </div>
          <div className="flex">
            <img src={sharable} alt="" />
            <div className="p-[15px]">
              <h2 className="lg:text-[16px] text-[10px] font-semibold">
                Easily Shareable
              </h2>
              <p className="lg:text-[14px] text-[10px] text-[#666666]">
                Showcase your achievements to a wider audience for increased
                impact.
              </p>
            </div>
          </div>
          <div className="flex">
            <img src={upgrade} alt="" />
            <div className="p-[15px]">
              <h2 className="lg:text-[16px] text-[10px] font-semibold">
                upGrad Alumni Status
              </h2>
              <p className="lg:text-[14px] text-[10px] text-[#666666]">
                Forge lasting connections with a global network of tech experts
                and experienced peers.
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <img src={CertificationImg} className="" alt="" />
      </div>
    </div>
  );
}
