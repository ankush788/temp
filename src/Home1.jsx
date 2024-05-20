import React from 'react'
import Achivement from "./component/Achivement/Achivement";
import Connect from "./component/Connect/Connect";
import CourseCard from "./component/CourseCard/CourseCard";
import HiringCompany from "./component/HiringCompany/HiringCompany";
function Home1() {
  return (
    <div>
      <CourseCard/>
      <Achivement/>
      <HiringCompany />
      <Connect />
    </div>
  )
}

export default Home1
