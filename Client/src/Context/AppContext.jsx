import { dummyCourses } from "@/assets/assets";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();
  const [isEducator, setIsEducator] = useState(true);

  //fetch all course

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // function to calculateaverage rating of a course
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) {
      return 0;
    }

    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });

    return totalRating / course.courseRatings.length;
  };

  //function to calculate chapter time

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //function to calculate total duretion of course

  const calculateCourseDuration = (course) => {
    let time = 0;

    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //function to calculate lecture available in this course 

  const calculateNoOfLecture = (course) => {
    let totalLecture = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLecture += chapter.chapterContent.length;
      }
    });
    return totalLecture;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLecture, 
    
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
