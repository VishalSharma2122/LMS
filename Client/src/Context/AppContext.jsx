import { dummyCourses } from "@/assets/assets";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export const AppContext = createContext();


export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY
  const [allCourses, setAllCourses]= useState([])
  const navigate = useNavigate()
  const [isEducator, setIsEducator]= useState(true)

  //fetch all course

  const fetchAllCourses = async ()=>{
    setAllCourses(dummyCourses)
  }

  // function to calculateaverage rating of a course
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) {
      return 0;
    }
  
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating;
    });
  
    return totalRating / course.courseRatings.length;
  };
  
useEffect(()=>{
  fetchAllCourses()
},[])

  const value = {
    currency ,  allCourses , navigate, calculateRating , isEducator , setIsEducator 
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
