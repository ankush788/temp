import React from 'react'
import star from "../../asset/star.png";
function Point(props) {
  return (
    <li className="flex items-center py-0.5">
      <img src={star} className="h-[14px] mr-[5px]" alt="star" />
      <p className="lg:text-[14px] text-[10px]">{props.text}</p>
    </li>
  );
}

export default Point
