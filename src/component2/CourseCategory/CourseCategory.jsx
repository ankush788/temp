import React, { useState } from "react";
import CourseInfo from "./CourseInfo";
export default function CourseCategory() {
  const [count, setCount] = useState(1);
  const changeCount = (props) => {
    setCount(props);
  };

  return (
    <div>
      <div className="flex items-center justify-between lg:mx-[70px]  my-[20px]  text-center font-semibold lg:text-[14px] text-[10px] mx-[5px]">
        <div
          className={`border border-solid rounded-md  lg:w-[14%] text-[8px] cursor-pointer  ${
            count === 1 ? "red-gradient border-transparent" : "border-grey-500"
          }`}
          onClick={() => changeCount(1)}
        >
          <div className=" bg-white inherit-all-bg p-[10px] rounded-md">
            <p>Module 1</p>
            <p className={`${count === 1 ? "red-gradient-text" : "text-black"}`}>
              Programming
            </p>
          </div>
        </div>
        <div
          className={`border border-solid rounded-md  lg:w-[14%] text-[8px] ml-[5px]  cursor-pointer  ${
            count === 2 ? "red-gradient border-transparent" : "border-grey-500"
          }`}
          onClick={() => changeCount(2)}
        >
          <div className=" bg-white inherit-all-bg p-[10px] rounded-md">
            <p>Module 2</p>
            <p className={`${count === 2 ? "red-gradient-text" : "text-black"}`}>
              Frontend
            </p>
          </div>
        </div>
        <div
          className={`border border-solid rounded-md  lg:w-[14%] text-[8px] ml-[5px]  cursor-pointer  ${
            count === 3 ? "red-gradient border-transparent" : "border-grey-500"
          }`}
          onClick={() => changeCount(3)}
        >
          <div className=" bg-white inherit-all-bg p-[10px] rounded-md">
            <p>Module 3</p>
            <p className={`${count === 3 ? "red-gradient-text" : "text-black"}`}>
              Data Structures
            </p>
          </div>
        </div>
        <div
          className={`border border-solid rounded-md  lg: w-[14%] text-[8px]  ml-[5px]  cursor-pointer  ${
            count === 4 ? "red-gradient border-transparent" : "border-grey-500"
          }`}
          onClick={() => changeCount(4)}
        >
          <div className=" bg-white inherit-all-bg p-[10px] rounded-md">
            <p>Module 4</p>
            <p className={`${count === 4 ? "red-gradient-text" : "text-black"}`}>
              Backend
            </p>
          </div>
        </div>
        <div
          className={`border border-solid rounded-md lg:w-[14%] text-[8px]  ml-[5px]  cursor-pointer  ${
            count === 5 ? "red-gradient border-transparent" : "border-grey-500"
          }`}
          onClick={() => changeCount(5)}
        >
          <div className=" bg-white inherit-all-bg p-[10px] rounded-md">
            <p>Module 5</p>
            <p className={`${count === 5 ? "red-gradient-text" : "text-black"}`}>
              T&D
            </p>
          </div>
        </div>
        <div
          className={`border border-solid rounded-md  lg:w-[14%] text-[8px]  ml-[5px]  cursor-pointer  ${
            count === 6 ? "red-gradient border-transparent" : "border-grey-500"
          }`}
          onClick={() => changeCount(6)}
        >
          <div className=" bg-white inherit-all-bg p-[10px] rounded-md">
            <p>Module 6</p>
            <p className={`${count === 6 ? "red-gradient-text" : "text-black"}`}>
              SD & A
            </p>
          </div>
        </div>
      </div>
      <CourseInfo currCount={count} />
    </div>
  );
}
