import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourses from "../../hook/useCourses";
import { assets } from "../../assets/assets";
import YouTube from "react-youtube";
import {
  calculateChapterTime,
  calculateCourseDuration,
  calculateNoOfLectures,
} from "../../utility/Course.Function";
import humanizeDuration from "humanize-duration";
import useUser from "../../hook/useUser";
import Loading from "../../component/student/Loading";

const CourseDetails = () => {
  const { id } = useParams();
  const [openSections, setOpenSections] = useState({});
  const [courseData, setCourseData] = useState();
  const { courses, loading, error } = useCourses();
  const { isAlreadyEnrolled, setPlayerData, playerData } = useUser();
  const fetchCourseData = () => {
    const findCourse = courses.find((course) => course?._id === id);
    setCourseData(findCourse);
  };
  useEffect(() => {
    if (courses && courses.length > 0) {
      fetchCourseData();
    }
  }, [courses, id]);
  if (loading) return <Loading />;
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
            __html: courseData?.courseDescription?.slice(0, 200),
          }}
        ></p>
        {/* course rating and reviews */}
        <p>Need to add course rating here</p>
        <p className="text-purple-800 my-2">
          {" "}
          Enrolled : {courseData?.enrolledStudents?.length}
          {courseData?.enrolledStudents?.length > 1 ? " students" : " student"}
        </p>
        {/*  */}
        <p>Course by Instructor Name : Mamun need to added dynamically </p>
        <div className="pt-8 text-gray-800">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Course Structure
          </h2>
          <div className="pt-5">
            {courseData?.courseContent?.map((chapter, index) => (
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
                              <button
                                onClick={() =>
                                  setPlayerData({
                                    videoId: lecture.lectureUrl
                                      .split("/")
                                      .pop(),
                                  })
                                }
                                className="text-purple-900 cursor-pointer"
                              >
                                Preview
                              </button>
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
        {/* course Description section  */}
        <div className="mt-3">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-800">
            Course Description
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: courseData?.courseDescription }}
            className="pt-3"
          ></p>
        </div>
      </div>

      {/* Right Area Start------------- */}
      <div className="z-10 shadow-2xl rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
        {playerData ? (
          <YouTube
            videoId={playerData?.videoId}
            opts={{ playerVars: { autoplay: 1 } }}
            iframeClassName="w-full aspect-video"
          />
        ) : (
          <img src={courseData?.courseThumbnail} alt="" />
        )}

        <div className="p-5">
          <div className="flex gap-2">
            <img
              className="w-3.5"
              src={assets.time_left_clock_icon}
              alt="time icon"
            />
            <p className="text-purple-800">
              <span className="font-medium">4 days left at this price !</span>
            </p>
          </div>
          {/*  */}
          <div className="flex gap-3 items-center pt-2">
            <p className="text-gray-800 md:text-3xl text-xl font-semibold ">
              ${" "}
              {(
                courseData?.coursePrice -
                (courseData?.discount * courseData?.coursePrice) / 100
              ).toFixed(2)}{" "}
            </p>
            <p className="md:text-lg text-gray-500 line-through">
              ${courseData?.coursePrice}
            </p>
            <p className="text-lg text-gray-500">{courseData?.discount}%off</p>
          </div>

          <div className="flex items-center text-sm md:text-md gap-4 pt-2 md:pt-4 text-gray-500">
            {/* review and rating  */}
            <div className="flex gap-2">
              {" "}
              <img src={assets.star} alt="star icon" />
              <img src={assets.star} alt="star icon" />
              <img src={assets.star} alt="star icon" />
              <img src={assets.star} alt="star icon" />
              <p>5</p>
            </div>

            {/* time duration and icons */}
            <div className="flex items-center gap-2">
              <img src={assets.time_clock_icon} alt="time clock icons" />
              {courseData && <p>{calculateCourseDuration(courseData)}</p>}
            </div>
            {/* lesson icons and function */}
            <div className="flex items-center gap-2">
              <img src={assets.lesson_icon} alt="lesson icons" />
              {courseData && <p>{calculateNoOfLectures(courseData)} lessons</p>}
            </div>
          </div>
          <button className="btn w-full my-4 bg-purple-950 text-white hover:bg-purple-900">
            {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
          </button>
          {/* bottom description */}
          <div>
            <p className="text-sm md:text-xl text-purple-950 my-1">
              What's in the course?
            </p>
            <ul className="list-inside list-disc leading-6 text-gray-500">
              <li>Lifetime access with free update</li>
              <li>certification after complete</li>
              <li>Job Placement support and guide</li>
              <li>Downloadable resources and source code.</li>
              <li>Assignment and Quiz option</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
