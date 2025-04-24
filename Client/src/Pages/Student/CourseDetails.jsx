import { AppContext } from "@/Context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  const [courseData, setCourseDta] = useState(null);
  const { allCourses } = useContext(AppContext);
  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseDta(findCourse);
  };
  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 pt-20 text-left">
<div className="absolute top-0 left-0 w-full h-section-height -z-1  bg-gradient-to-b from-cyan-100/70"></div>





      {/* left Column */}

      <div></div>

      {/* right Column */}

      <div></div>
    </div>
  );
}

export default CourseDetails;
