import React from "react";
import Point from "./Point";
import RedButton from "../../GobalComponent/Button/RedButton"
import Button from "../../GobalComponent/Button/Button";
import shareImg from "../../asset/share.png";
import CodeEditor from "../../asset/codeEditor.png";

function CourseCard() {
  return (
    <div>
      <p className=" mt-[20px] lg:mx-[70px] mx-[20px] font-semibold">
        Home {">"} AI powered Full Stack Development{" "}
      </p>
      <div className="bg-white inherit-all-bg rounded-[40px] pb-[40px] mt-5  border-[1px] border-solid lg:w-[40%] lg:ml-[70px] lg:mx-0  mx-[20px]">
        <div className="  lg:ml-[30px] lg:mt-[40px]  md:flex  sm:block  items-center ">
          <button className="Purple-gradient rounded-[20px] px-3 py-2 lg:text-[10px] text-[8px]  lg:mt-0  mt-[10px] text-white font-semibold md:mx-0 mx-auto block">
            POPULAR
          </button>
          <button className="lg:flex items-center text-[#6A11B0] rounded-[20px] lg:text-[10px] text-[8px] my-[10px]  lg:my-0  px-2 lg:py-2  font-semibold  lg:mx-[10px]  mx-auto block  bg-[#9d9aa3] ">
            <img
              className="h-[14px] p-[2px] "
              src={CodeEditor}
              alt="code-Editor"
            />
            IMMERSIVE LEARNING
          </button>
          <button className="md:mx-0 mx-auto block lg:mb-0  mb-[10px]">
            <img className="h-[16px]" src={shareImg} alt="share" />
          </button>
        </div>
        {/*------------------------------------------------------- */}

        <p className="red-gradient-text font-semibold  ml-[30px]  mt-[20px] lg:text-[12px] text-[10px]">
          AI FULL-STACK DEVELOPMENT BOOTCAMP
        </p>
        {/*----------------------------------------------------- */}

        <p className=" ml-[30px] font-semibold  lg:text-2xl text-xl">
          AI POWERED
        </p>
        {/*-------------------------------------------- */}

        <p className="ml-[30px] font-semibold lg:text-3xl text-2xl red-gradient-text">
          Full-Stack Development
        </p>
        {/*--------------------------------------------------- */}

        <ol className="pl-[26px] pt-1">
          <Point text="Learn from Industry Experts" />
          <Point text="Live Project Experience with 24x7 support" />
          <Point text="6+ Projects to add on your resume" />
          <Point text="6 month work experience" />
          <Point text="Reserve a Seat for INR 5,000/-" />
        </ol>
        {/*------------------------------------------------------ */}

        <div className="flex sm:block md:flex py-[20px] lg:text-[16px] text-[12px] ">
          <Button
            text="Talk to career counsellor"
            attribute=" font-semibold border  border-[2px] rounded  ml-[30px] mr-2  p-1.5 "
          />
          <RedButton
            text="Download Syllabus"
            attribute="border  border-[2px] p-1.5 font-semibold text-white mr-2"
          />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
