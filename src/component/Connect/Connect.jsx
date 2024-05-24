import React from 'react'
import ConnectImg from "../../asset/connect.svg"
function Connect() {
  return (
    <div className=" p-[20px] bg-gradient-to-b from-[#280154] from-30% to-[#15002E] to-100%  lg:flex lg:justify-center lg:items-center block  lg:w-[90%] lg:mx-auto">
      <img
        src={ConnectImg}
        className="lg:mx-0 block mx-auto bg-transparent"
        alt=""
      />
      <div className="m-[20px] bg-transparent  ">
        <p className="text-white w-[90%] text-[15px] font-semibold block mx-auto text-center lg:text-start  lg:mx-0 bg-transparent">
          Ready to turn your tech aspirations into reality?
        </p>
        <button className=" mt-[10px] p-2 rounded-md text-[12px] font-semibold block mx-auto lg:mx-0  bg-white ">
          Connect With Us
        </button>
      </div>
    </div>
  );
}

export default Connect
