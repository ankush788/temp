import React from 'react'
import circleTick from "../../asset/circleTick.svg";
export default function Point(props) {
  return (
    <div className="flex my-[5px] ">
      <img src={circleTick} alt="" className=" lg:h-[15px] h-[10px]" />
      <p className="lg:text-[12px] text-[10px] ml-[5px]">{props.text}</p>
    </div>
  );
}
