import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourses from "../../hook/useCourses";
import humanizeDuration from "humanize-duration";
import { calculateChapterTime } from "../../utility/Course.Function";
import { assets } from "../../assets/assets";
import YouTube from "react-youtube";
import Rating from "../../component/student/Rating";
import Footer from "../../component/Footer/Footer";

const Player = () => {
  const [courseData, setCourseData] = useState(null);
  const { courseID } = useParams();
  const { course: enrolledCourses, loading, error } = useCourses();
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);

  const getCourseData = () => {
    enrolledCourses?.map((course) => {
      if (course?._id == courseID) {
        setCourseData(course);
      }
    });
  };
  useEffect(() => {
    if (!loading) {
      getCourseData();
    }
  }, [enrolledCourses, loading]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <>
      <section className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/* left column */}
        <div className="left-side text-purple-950">
          <h2 className="text-xl font-semibold">Course Structure</h2>

          <div className="pt-5">
            {!loading &&
              !error &&
              courseData &&
              courseData?.courseContent?.map((chapter, index) => (
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
                        src={assets?.down_arrow_icon}
                        alt="down arrow"
                      />
                      <p className="font-medium md:text-base text-sm">
                        {chapter?.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm md:text-md">
                      {chapter?.chapterContent?.length} lectures -{" "}
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
                            src={
                              false ? assets.blue_tick_icon : assets.play_icon
                            }
                            // !backend api need to add
                            alt="video play Icon"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-md">
                            <p>{lecture?.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture?.lectureUrl && (
                                <button
                                  onClick={() =>
                                    setPlayerData({
                                      ...lecture,
                                      chapter: index + 1,
                                      lecture: idx + 1,
                                    })
                                  }
                                  className="text-purple-900 cursor-pointer"
                                >
                                  Watch
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
          {/* Rating */}
          <div className="flex gap-2 items-center">
            <h1 className="text-xl font-bold text-purple-950">
              Rate this Course :{" "}
            </h1>
            <Rating initialRating={0} />
          </div>
        </div>
        {/* right column */}
        <div className="right-side ">
          {playerData ? (
            <div>
              <YouTube
                videoId={playerData.lectureUrl.split("/").pop()}
                iframeClassName="w-full aspect-video"
              />
              <div className="flex justify-between items-center mt-2">
                <p>
                  {playerData?.chapter}.{playerData?.lecture}
                  {playerData?.lectureTitle}
                </p>
                <button className="bg-purple-950 text-white hover:bg-purple-900 px-3 py-1 rounded">
                  {false ? "Complete" : "Mark Complete"}
                </button>
              </div>
            </div>
          ) : (
            <img
              src={courseData ? courseData?.courseThumbnail : "No Image Found"}
              alt="Course thumbnail"
            />
          )}
        </div>
      </section>

      <footer className="mt-10 md:mt-52">
        <Footer />
      </footer>
    </>
  );
};

export default Player;
