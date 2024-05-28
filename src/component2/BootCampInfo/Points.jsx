import React from 'react'

export default function Points( props) {
  return (
    <div className="flex lg:justify-start  justify-center px-[10px] lg:text-[10px] text-[8px] border-b mt-[6px] pb-[4px] text-[#333333]">
      <img src={props.img} alt="" className="mx-[5px] h-[12px]" />
      <p>{props.text}</p>
    </div>
  );
}
