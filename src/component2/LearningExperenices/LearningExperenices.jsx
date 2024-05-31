import React, { useEffect, useState, createContext } from "react";
import LearningExperiencesImg from "../../asset/LearningExperiences.svg";
import LearningPoint from "./LearningPoint";
import DownloadButton from "../../GobalComponent/Button/DownloadButton";
import Button from "../../GobalComponent/Button/Button";
export const LearningContext = createContext();

export default function LearningExperiences() {
  const [Data, setData] = useState([]);
  const [Index, setIndex] = useState(-1);

  const changeIndex = (id) => {
    setIndex(id);
  };

  useEffect(() => {
    setData([
      {
        id: 1,
        title: "Learn",
        points: [
          "Expert-Led Training",
          "On-Demand Learning Videos",
          "Peer Learning and Recall Quizzes",
        ],
      },
      {
        id: 2,
        title: "Practice",
        points: [
          "Expert-Led Training",
          "On-Demand Learning Videos",
          "Peer Learning and Recall Quizzes",
        ],
      },
      {
        id: 3,
        title: "Assess",
        points: [
          "Expert-Led Training",
          "On-Demand Learning Videos",
          "Peer Learning and Recall Quizzes",
        ],
      },
      {
        id: 4,
        title: "Insights",
        points: [
          "Expert-Led Training",
          "On-Demand Learning Videos",
          "Peer Learning and Recall Quizzes",
        ],
      },
      {
        id: 5,
        title: "Apply",
        points: [
          "Expert-Led Training",
          "On-Demand Learning Videos",
          "Peer Learning and Recall Quizzes",
        ],
      },
      {
        id: 6,
        title: "Apply",
        points: [
          "Expert-Led Training",
          "On-Demand Learning Videos",
          "Peer Learning and Recall Quizzes",
        ],
      },
    ]);
  }, []);

  return (
    <div className="my-[50px] lg:my-[50px]">
      <LearningContext.Provider value={{ Index, setIndex }}>
        <h3 className=" text-[#C5135D] text-center lg:text-[14px] text-[10px] font-semibold">
          THE UPGRAD ADVANTAGE UNLEASHED
        </h3>
        <h2 className="text-center lg:text-[18px] text-[14px] font-semibold lg:mb-[20px] mb-[0]">
          The New <span className="red-gradient-text">Immersive Learning</span>{" "}
          Experience
        </h2>
        <div className="lg:flex  block justify-center mx-auto lg:p-3 px-3 ">
          <div className="lg:p-4 p-2 lg:mr-[40px]">
            {Data &&
              Data.map((point) => (
                <div onClick={() => changeIndex(point.id)}>
                  <LearningPoint dataPoint={point} key={point.id} />
                </div>
              ))}
          </div>
          <img
            src={LearningExperiencesImg}
            alt="Learning Experiences"
            className="p-[20px] border rounded-md"
          />
        </div>
        <div className="flex justify-center p-3">
          <Button
            text="Contact Academic Counselor"
            attribute=" p-2 mr-3 rounded-md border  font-semibold border border-grey-500 text-[10px] lg:text-[14px] "
          />
          <DownloadButton />
        </div>
      </LearningContext.Provider>
    </div>
  );
}
