import { assets } from "@/assets/assets";
import Loading from "@/Components/Student/Loading";
import { AppContext } from "@/Context/AppContext";
import humanizeDuration from "humanize-duration";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSections] = useState({});
  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLecture, 
    currency,
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    if (!allCourses || allCourses.length === 0) {
      console.error("allCourses is not loaded or empty.");
      return;
    }
    const findCourse = allCourses.find((course) => course._id === id);
    if (!findCourse) {
      console.error(`Course with id ${id} not found.`);
      return;
    }
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));    
  };

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 pt-20 pb-20 text-left bg-gradient-to-b from-cyan-100/70">
        <div className="absolute top-0 left-0 w-full h-section-height -z-10 bg-gradient-to-b from-cyan-100/70"></div>

        {/* Left Column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="text-[26px] leading-[36px] md:text-[36px] md:leading-[44px] font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
            className="pt-4 md:text-base text-sm"
          ></p>
          {/* review nad rating */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-gray-500">
              {courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length > 1 ? "Ratings" : "Rating"}
            </p>
            <p className="text-blue-600">
              ({courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length > 1 ? "Students" : "Student"})
            </p>
          </div>
          <p className="text-sm">
            Course by{" "}
            <span className="text-blue-600 underline">CodeWithVishal</span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Stucture</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className=" border border-gray-300 bg-white mb-2 rounded"
                >
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none "
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className={`transform transition-transform ${
                          openSection[index] ? "rotate-180" : ""
                        } `}
                        src={assets.down_arrow_icon}
                        alt="arroe icon"
                      />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm md:text-default">
                      {chapter.chapterContent.length} lectures -
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300 ">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img
                            src={assets.play_icon}
                            alt="play icon "
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex  gap-2">
                              {lecture.isPreviewFree && (
                                <p className="text-blue-500 cursor-pointer">
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-20  text-sm md:text-default">
              <h3 className="text-xl font-semibold text-gray-800">
                Course Description
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription,
                }}
                className="pt-3 rich-text "
              ></p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className=" max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none bg-white min-w-[30px] sm:min-w-[420px] ">
          <img src={courseData.courseThumbnail} alt="Thumbnail" />
          <div className="p-5 ">
            <div className="flex items-center gap-2 ">
              <img
                className="w-3.5"
                src={assets.time_left_clock_icon}
                alt=" tijme left icon"
              />
              <p className=" text-red-500"> <span className="font-medium ">5 days</span> left at this price
              </p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default CourseDetails;
