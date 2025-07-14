import React, { useEffect, useRef, useState } from "react";
import uniqid from "uniquid";
import Quill from "quill";
import { assets } from "../../assets/assets";
import useUser from "../../hook/useUser";
import axiosInstance from "../../AxiosApi/axiosInstance";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);
  const { user } = useUser();
  // states
  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);

  const [showPopup, setshowPopup] = useState(null);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });
  // states ends
  useEffect(() => {
    // Initial Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  // add chapter function
  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter Chapter Name");
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapse: false,
          chapterOrder:
            chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === "remove") {
      setChapters(
        chapters.filter((chapter) => chapter.chapterId !== chapterId)
      );
    } else if (action === "toggle") {
      setChapters(
        chapters.map((chapter) =>
          chapterId ? { ...chapter, collapse: !chapter.collapse } : chapter
        )
      );
    }
  };
  // add lecture
  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === "add") {
      setCurrentChapterId(chapterId);
      setshowPopup(true);
    } else if (action === "remove") {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter;
        })
      );
    }
  };

  // Add lecture
  const handleAddLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );
    setshowPopup(false);
    setLectureDetails({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    });
  };

  // backend APis call

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Image is not attached");
      return;
    }

    try {
      const educatorId = user.uid;
      const courseData = {
        courseTitle,
        courseDescription: quillRef.current.root.innerHTML,
        coursePrice: Number(coursePrice),
        discount: Number(discount),
        courseContent: chapters,
        educatorId,
      };

      // !form data object 
      const formData = new FormData();
      formData.append("courseData", JSON.stringify(courseData));
      formData.append("image", image);

      const { data } = await axiosInstance.post(
        "/api/educator/add-course",
        formData
      );

      if (data?.success) {
        alert("Course Published Successfully");
        setCourseTitle("");
        setChapters([]);
        setCoursePrice(0);
        setDiscount(0);
        setImage(null);
        quillRef.current.root.innerHTML = "";
      } else {
        console.log(data?.message);
      }
    } catch (error) {
      console.error("Course Add Error:", error);
    }
  };

  return (
    <section className="h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md w-full text-gray-500"
      >
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            type="text"
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Type Here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-purple-950"
            required
          />
        </div>
        {/* Description field */}
        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        {/* Course price and Thumbnail Area */}
        <div className="flex items-center justify-between flex-wrap">
          {/* price Column */}
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              type="number"
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              placeholder="0"
              className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-purple-950"
              required
            />
          </div>
          {/* Thumbnail Column  */}
          <div className="flex md:flex-row flex-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3">
              <img
                src={assets.file_upload_icon}
                alt="file-upload"
                className="p-3 bg-purple-700 hover:cursor-pointer"
                required
              />
              <input
                type="file"
                id="thumbnailImage"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                hidden
              />
              <img
                src={image ? URL.createObjectURL(image) : "No-Image-Found"}
                className="max-h-10"
                alt=""
              />
            </label>
          </div>
        </div>

        {/* Discount Ares */}
        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            placeholder="0"
            min={0}
            max={100}
            className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-purple-950"
            required
          />
        </div>

        {/* adding chapter and lecture */}

        <div>
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="bg-white border rounded-lg mb-4">
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  <img
                    onClick={() => handleChapter("toggle", chapter.chapterId)}
                    src={assets.dropdown_icon}
                    width={14}
                    alt="arrow"
                    className={`mr-2 cursor-pointer transition-all ${
                      chapter.collapse && "-rotate-90"
                    }`}
                  />
                  <span className="font-semibold">
                    {" "}
                    {chapterIndex + 1} {chapter.chapterTitle}
                  </span>
                </div>
                <span className="text-gray-500">
                  {chapter.chapterContent.length} Lecture
                </span>
                <img
                  src={assets.cross_icon}
                  className="cursor-pointer"
                  alt="cross-icons"
                  onClick={() => handleChapter("remove", chapter.chapterId)}
                />
              </div>
              {/*  */}
              {!chapter.collapse && (
                <div className="p-4">
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className="flex justify-between items-center mb-2"
                    >
                      <span>
                        {lectureIndex + 1} {lecture.lectureTitle} -
                        {lecture.lectureDuration} mins
                        <a
                          href={lecture.lectureUrl}
                          target="_blank"
                          className="text-purple-700"
                        >
                          Link
                        </a>{" "}
                        -{lecture.isPreviewFree ? "free Preview" : "Paid"}
                      </span>
                      <img
                        onClick={() =>
                          handleLecture(
                            "remove",
                            chapter.chapterId,
                            lectureIndex
                          )
                        }
                        src={assets.cross_icon}
                        className="cursor-pointer"
                        alt=""
                      />
                    </div>
                  ))}
                  {/* button for add lecture */}
                  <button
                    onClick={() => handleLecture("add", chapter.chapterId)}
                    className="p-3 inline-flex bg-purple-950 text-white rounded hover:cursor-pointer mt-2"
                  >
                    + Add Lecture
                  </button>
                </div>
              )}
            </div>
          ))}
          {/* Add Chapter */}
          <button
            onClick={() => handleChapter("add")}
            className=" p-3 bg-purple-950 text-white w-full  rounded hover:cursor-pointer mt-2"
          >
            + Add chapter
          </button>

          {/* PopUp */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
                <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>

                {/* Lecture title */}
                <div className="mb-2">
                  <p>Lecture Title</p>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureTitle}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureTitle: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Lecture Duration */}
                <div className="mb-2">
                  <p>Duration (minutes)</p>
                  <input
                    type="number"
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureDuration}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureDuration: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Lecture Duration */}
                <div className="mb-2">
                  <p>Duration (minutes)</p>
                  <input
                    type="number"
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureDuration}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureDuration: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Lecture URL */}
                <div className="mb-2">
                  <p>Lecture URL</p>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded py-1 px-2"
                    value={lectureDetails.lectureUrl}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureUrl: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Is Preview Free Or Paid */}
                <div className="flex gap-2 my-4">
                  <p>Is Preview Free ? </p>
                  <input
                    type="checkbox"
                    className="mt-1 scale-125"
                    checked={lectureDetails.isPreviewFree}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        isPreviewFree: e.target.checked,
                      })
                    }
                  />
                </div>
                <button
                  onClick={handleAddLecture}
                  type="button"
                  className="w-full bg-purple-950 text-white px-4 py-2 rounded hover:cursor-pointer"
                >
                  ADD
                </button>
                <img
                  src={assets.cross_icon}
                  alt="cross-icon"
                  className="absolute top-4 right-4 w-4 cursor-pointer"
                  onClick={() => setshowPopup(false)}
                />
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-purple-700 hover:cursor-pointer text-white w-max py-2.5 px-8 rounded my-4"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddCourse;
