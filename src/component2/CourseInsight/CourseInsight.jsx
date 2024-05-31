import React from "react";
import CourseInsight1 from "../../asset/icon/courseInsight1.svg";
import CourseInsight2 from "../../asset/icon/courseInsight2.svg";
import CourseInsight3 from "../../asset/icon/courseInsight3.svg";
import CourseInsight4 from "../../asset/icon/courseInsight4.svg";
import CourseInsight5 from "../../asset/icon/courseInsight5.svg";
import CourseInsight6 from "../../asset/icon/courseInsight6.svg";
import RedButton from "../../GobalComponent/Button/RedButton";
export default function CourseInsight() {
  const insights = [
    {
      img: CourseInsight1,
      text: "Curated Technical Curriculum for Entry-Level Developers",
    },
    {
      img: CourseInsight2,
      text: "Real-World Product Building Expertise",
    },
    {
      img: CourseInsight3,
      text: "Customized Training Solutions Tailored to Business Needs",
    },
    {
      img: CourseInsight4,
      text: "Get Teams Project-Ready fromthe Get-Go",
    },
    {
      img: CourseInsight5,
      text: "Measure Skills Progress with Accurate Data",
    },
    {
      img: CourseInsight6,
      text: "Immersive Learning with Cloud Labs",
    },
  ];

  return (
    <div className="lg:w-[75%] mx-auto mb-[50px]">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 m-[10px]">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-white inherit-all-bg rounded-md border p-2 lg:mx-[10%] lg:my-[10%]"
          >
            <img src={insight.img} alt="" className="mx-auto" />
            <p className="text-center font-semibold text-[10px] lg:text-[14px] p-1">
              {insight.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[30px]">
        <RedButton
          text="Upskill Your Teams"
          attribute="text-white p-2 "
          href="https://wa.me/+916363409869"
        />
      </div>
    </div>
  );
}
