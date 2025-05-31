import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourses from "../../hook/useCourses";

import { assets } from "../../assets/assets";
import { calculateChapterTime } from "../../utility/Course.Function";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams();
  const [openSections, setOpenSections] = useState({});
  const [courseData, setCourseData] = useState();
  const { courses, loading, error } = useCourses();

  const fetchCourseData = () => {
    const findCourse = courses.find((course) => course?._id === id);
    setCourseData(findCourse);
  };
  useEffect(() => {
    if (courses && courses.length > 0) {
      fetchCourseData();
    }
  }, [courses, id]);
  if (loading)
    return <span className="loading loading-spinner loading-xl"></span>;
  if (error) return <h2>Error {error}</h2>;
  // !function for toggle
  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <section className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md;pt-30 pt-20 text-left">
      {/* top area */}
      <div className="absolute top-0 left-0 w-full -z-1 bg-gradient-to-b from-purple-100/70 h-[500px]"></div>
      {/* left area Starts*/}
      <div className="max-w-xl z-10 text-gray-500">
        <h1 className="text-purple-900 font-semibold text-xl md:text-3xl my-2">
          {courseData?.courseTitle}
        </h1>

        <p
          className="pt-4 md:text-base text-sm"
          dangerouslySetInnerHTML={{
            __html: courseData?.courseDescription.slice(0, 200),
          }}
        ></p>
        {/* course rating and reviews */}
        <p>Need to add course rating here</p>
        <p className="text-purple-800 my-2">
          {" "}
          Enrolled : {courseData?.enrolledStudents.length}
          {courseData?.enrolledStudents.length > 1 ? " students" : " student"}
        </p>
        {/*  */}
        <p>Course by Instructor Name : Mamun need to added dynamically </p>
        <div className="pt-8 text-gray-800">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Course Structure
          </h2>
          <div className="pt-5">
            {courseData?.courseContent.map((chapter, index) => (
              <div
                className="border border-purple-900 bg-white mb-2 rounded"
                key={index}
              >
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      className={`transform transition-transform ${
                        openSections[index] ? "rotate-180" : ""
                      }`}
                      src={assets.down_arrow_icon}
                      alt="down arrow"
                    />
                    <p className="font-medium md:text-base text-sm">
                      {chapter.chapterTitle}
                    </p>
                  </div>
                  <p className="text-sm md:text-md">
                    {chapter?.chapterContent.length} lectures -{" "}
                    {calculateChapterTime(chapter)}{" "}
                  </p>
                </div>
                {/*  */}
                <div
                  className={`overflow-hidden transition-all duration-300 
                  ${openSections[index] ? "max-h-96" : "max-h-0"}`}
                >
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-purple-700">
                    {chapter?.chapterContent.map((lecture, idx) => (
                      <li className="flex items-start gap-2 py-1" key={idx}>
                        <img
                          className="w-4 h-4 mt-1"
                          src={assets?.play_icon}
                          alt="video play Icon"
                        />
                        <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-md">
                          <p>{lecture?.lectureTitle}</p>
                          <div className="flex gap-2">
                            {lecture?.isPreviewFree && (
                              <p className="text-purple-900 cursor-pointer">
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
        </div>
      </div>

      {/* Right Area Start */}
      <div></div>
    </section>
  );
};

export default CourseDetails;
