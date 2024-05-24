import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Amazon from "../../asset/Amazon.png";
import AxisBank from "../../asset/Axis.png";
import Accenture from "../../asset/Accenture.png";
import Adobe from "../../asset/Adobe.png";
import "./slick-custom.css";

function HiringCompany() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slide every 3 seconds (3000ms)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hiring-company lg:mx-[90px] mx-[40px] my-[20px]">
      <Slider {...settings} style={{ display: "flex" }}>
        <div id="slick-component">
          <img className="h-[22px] w-[100px]" src={Amazon} alt="" />
          <img className="h-[22px] w-[100px]" src={AxisBank} alt="" />
          <img className="h-[22px] w-[100px]" src={Accenture} alt="" />
          <img className="h-[22px] w-[100px]" src={Adobe} alt="" />
        </div>
        <div id="slick-component">
          <img className="h-[22px] w-[100px]" src={Amazon} alt="" />
          <img className="h-[22px] w-[100px]" src={AxisBank} alt="" />
          <img className="h-[22px] w-[100px]" src={Accenture} alt="" />
          <img className="h-[22px] w-[100px]" src={Adobe} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default HiringCompany;
