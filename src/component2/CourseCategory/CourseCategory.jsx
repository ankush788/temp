import React, { useState } from "react";
import CourseInfo from "./CourseInfo";
export default function CourseCategory() {
  const [count, setCount] = useState(1);
  const changeCount = (props)=>{
   
    setCount(props);
  }

  return (
    <div>
      <div className="flex items-center justify-between lg:mx-[70px]  my-[20px]  text-center font-semibold lg:text-[14px] text-[10px] mx-[5px]">
        <div
          className={`border border-solid rounded-md p-[10px] lg:w-[14%] text-[8px] cursor-pointer  ${
            count === 1 ? "border-red-300" : "border-grey-500"
          }`}
          onClick={() => changeCount(1)}
        >
          <p>Module 1</p>
          <p className={`${count === 1 ? "text-red-500" : "text-black"}`}>
            Programming
          </p>
        </div>
        <div
          className={`border border-solid rounded-md p-[10px] lg:w-[14%] text-[8px] ml-[5px]  cursor-pointer  ${
            count === 2 ? "border-red-300" : "border-grey-500"
          }`}
          onClick={() => changeCount(2)}
        >
          <p>Module 2</p>
          <p className={`${count === 2 ? "text-red-500" : "text-black"}`}>
            Frontend
          </p>
        </div>
        <div
          className={`border border-solid rounded-md p-[10px] lg:w-[14%] text-[8px] ml-[5px]  cursor-pointer  ${
            count === 3 ? "border-red-300" : "border-grey-500"
          }`}
          onClick={() => changeCount(3)}
        >
          <p>Module 3</p>
          <p className={`${count === 3 ? "text-red-500" : "text-black"}`}>
            Data Structures
          </p>
        </div>
        <div
          className={`border border-solid rounded-md p-[10px] lg: w-[14%] text-[8px]  ml-[5px]  cursor-pointer  ${
            count === 4 ? "border-red-300" : "border-grey-500"
          }`}
          onClick={() => changeCount(4)}
        >
          <p>Module 4</p>
          <p className={`${count === 4 ? "text-red-500" : "text-black"}`}>
            Backend
          </p>
        </div>
        <div
          className={`border border-solid rounded-md p-[10px] lg:w-[14%] text-[8px]  ml-[5px]  cursor-pointer  ${
            count === 5 ? "border-red-300" : "border-grey-500"
          }`}
          onClick={() => changeCount(5)}
        >
          <p>Module 5</p>
          <p className={`${count === 5 ? "text-red-500" : "text-black"}`}>
            T&D
          </p>
        </div>
        <div
          className={`border border-solid rounded-md p-[10px] lg:w-[14%] text-[8px]  ml-[5px]  cursor-pointer  ${
            count === 6 ? "border-red-300" : "border-grey-500"
          }`}
          onClick={() => changeCount(6)}
        >
          <p>Module 6</p>
          <p className={`${count === 6 ? "text-red-500" : "text-black"}`}>
            SD & A
          </p>
        </div>
      </div>
      <CourseInfo  currCount={count} />
    </div>
  );
}
