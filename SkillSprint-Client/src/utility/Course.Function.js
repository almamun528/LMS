// !==================Function for course related==================================



import humanizeDuration from "humanize-duration";


// function to calculate average rating of course.
 export const  calculateRating = (course) => {
  if (course.courseRatings.length === 0) {
    return 0;
  }
  let totalRating = 0;
  course.courseRatings.forEach((rating) => {
    totalRating += rating.rating;
  });
  return totalRating / course.courseRatings.length;
};

//function to calculate course chapter time
export const calculateChapterTime = (chapter) => {
  let time = 0;
  chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
  // humanize duration to convert the time to Minutes and hours
  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
};
// function to course duration
export const calculateCourseDuration = (course) => {
  let time = 0;
  course.courseContent.map((chapter) =>
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
  );
  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
};
// function to calculate number of Lectures in the course
export const calculateNoOfLectures = (course) => {
  let totalLectures = 0;
  course.courseContent.forEach((chapter) => {
    if (Array.isArray(chapter.chapterContent)) {
      totalLectures += chapter.chapterContent.length;
    }
  });
  return totalLectures;
};
