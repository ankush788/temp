import React from 'react'
import HeadLine from './component2/HeadLine/HeadLine'
import CourseCategory from './component2/CourseCategory/CourseCategory';
import Certification from './component2/Certification/Certification';
import BootCampInfo from './component2/BootCampInfo/BootCampInfo';
import LearningExperenices from './component2/LearningExperenices/LearningExperenices';
export default function Home2() {
  return (
    <div>
      <HeadLine />
      <CourseCategory />
      <Certification />
      <BootCampInfo />
      <LearningExperenices />
    </div>
  );
}
