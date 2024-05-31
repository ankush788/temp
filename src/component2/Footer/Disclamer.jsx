import React, { useState } from "react";

export default function Disclaimer() {
  const data =
    "upGrad does not grant credit; credits are granted, accepted or transferred at the sole discretion of the relevant educational institution offering the diploma or degree. We advise you to enquire further regarding the suitability of this program for your academic and professional requirements before enrolling.";
  const [isHidden, setIsHidden] = useState(true);

  function changeVisibility() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="mt-[20px] lg:mx-[70px] mx-[20px] mb-[30px] text-start ">
      <h2 className="text-[18px] font-semibold lg:text-start  text-center">
        Disclaimer
      </h2>
      <div>
        <p>{isHidden ? `${data.substring(0, 100)}...` : data}</p>
        <button
          onClick={changeVisibility}
          className="text-[#EE2C3C] hover:underline"
        >
          {isHidden ? "Read More" : "Read Less"}
        </button>
      </div>
    </div>
  );
}
