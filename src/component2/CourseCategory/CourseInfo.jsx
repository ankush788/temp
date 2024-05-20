import React, { useState } from "react";
import Point from "./Point";


export default function CourseInfo(props) {
  const [showMore, setshowMore] = useState(false);
  const changeVisibility = () => {
    if (showMore === true) {
      setshowMore(false);
    } else {
      setshowMore(true);
    }
  };
  return (
    <div className="lg:mx-[70px] mx-[20px] p-[15px] rounded-md bg-white inherit-all-bg  ">
      <p className="font-bold lg:text-[14px] text-[10px] mb-[10px]">
        Fundamentals of Programming
      </p>
      <p className="lg:text-[12px] text-[10px]">
        This module helps you take your first steps towards becoming a
        successful coder. You will be introduced to computer programming as you
        learn about programming languages, how computer programs work, and how
        to build programming logic using Pseudocode.
      </p>
      <p className="font-bold lg:text-[14px] text-[10px]  mb-[10px] mt-[20px]">
        Topics Covered
      </p>
      <div>
        <Point text="Introduction to Programming" />
        <Point text="Syntax and Pseudocode" />
        {showMore === false ? (
          <p
            className="text-[14px] text-[#ca4c52] w-min cursor-pointer"
            onClick={changeVisibility}
          >
            ReadMore..
          </p>
        ) : (
          <div>
            <Point text="Syntax and Pseudocode" />
            <Point text="Syntax and Pseudocode" />
            <Point text="Syntax and Pseudocode" />
            <Point text="Syntax and Pseudocode" />
            <Point text="Syntax and Pseudocode" />
            <p
              className="text-[14px] text-[#ca4c52] w-min cursor-pointer"
              onClick={changeVisibility}
            >
              Hide..
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
