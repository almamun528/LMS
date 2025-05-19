import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
const dummyCourses = [
  {
    _id: "98148nnf93ll03",
    courseTitle: "Introduction to JavaScript",
    courseDescription:
      "<h2>Learn the basic of javascript</h2> <p>javascript is the most popular programming language it is very heigh level language and user can interact with it</p>  <p>            A card component has a figure, a body part, and inside body there are title and actions parts</p> <ul> <li>understand the basic</li>  <li>Web-Dev</li> <li>Basic es-6</li> </ul>",
    coursePrice: 49.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterID: "chapter1",
        chapterOrder: 1,
        chapterTitle: "getting started with javascript",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "what is JavaScript",
            lectureDuration: 16,
            lectureUrl: "https://youtu.be/fPc7UxB0BEE?si=oZjlM_RuBZwUDYC5",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setup Environment ",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/fPc7UxB0BEE?si=oZjlM_RuBZwUDYC5",
            isPreviewFree: true,
            lectureOrder: 1,
          },
        ],
      },
    ],
    createdAt: "2024-12-27T10:00:00.000Z",
    updatedAt: "2024-12-31T09:57:48.992Z",
    __v: 3,
    courseThumbnail:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anN8ZW58MHx8MHx8fDA%3D",
  },
  {
    _id: "98148nnf93ll04",
    courseTitle: "Mastering HTML & CSS",
    courseDescription:
      "<h2>Build beautiful websites</h2> <p>Learn how to structure pages with HTML and style them with CSS. This course covers both fundamentals and best practices.</p> <ul> <li>HTML5 Basics</li> <li>Responsive Design</li> <li>CSS Grid & Flexbox</li> </ul>",
    coursePrice: 39.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterID: "chapter1",
        chapterOrder: 1,
        chapterTitle: "HTML Essentials",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Intro to HTML",
            lectureDuration: 12,
            lectureUrl: "https://youtu.be/dD2EISBDjWM",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "HTML Elements",
            lectureDuration: 15,
            lectureUrl: "https://youtu.be/qz0aGYrrlhU",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "78302842248911",
    enrolledStudents: [
      "user_2qlvxyr02B4Bq6hT0Gvaasft9V",
      "user_2qlvxyr02B4Bq6hT0Gvaasft9x",
      "user_2qlvxyr02B4Bq6hT0Gvaasft9w",
      "user_2qlvxyr02B4Bq6hT0Gvaasft9z",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpir2flWRzvwktE0w",
        rating: 5,
        _id: "6773e3760cb0ab9742183012134",
      },
    ],
    createdAt: "2025-01-02T12:30:00.000Z",
    updatedAt: "2025-01-03T11:20:00.000Z",
    __v: 1,
    courseThumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
  },
  {
    _id: "98148nnf93ll05",
    courseTitle: "React for Beginners",
    courseDescription:
      "<h2>Learn React step by step</h2> <p>This course is designed for front-end developers who want to master React, including components, hooks, and routing.</p> <ul> <li>JSX & Components</li> <li>useState & useEffect</li> <li>React Router</li> </ul>",
    coursePrice: 59.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterID: "chapter1",
        chapterOrder: 1,
        chapterTitle: "React Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Why React?",
            lectureDuration: 14,
            lectureUrl: "https://youtu.be/bMknfKXIFA8",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "JSX and Components",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/9D1x7-2FmTA",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "78302842248912",
    enrolledStudents: [
      "user_2qlvxyr02B4Bq6hT0Gvasft9V",
      "user_2qlvxyr02B4Bq6T0Gvaasft9x",
      "user_2qlvxyr02B4B6hT0Gvaasft9w",
      "user_2qlvxyr02BBq6hT0Gvaasft9z",
    ],
    courseRatings: [
      {
        userId: "user_2qjgkAqIMpir2flWRzvwktE0w",
        rating: 4,
        _id: "6773e760cb0ab9742183012134",
      },
    ],
    createdAt: "2025-01-05T09:15:00.000Z",
    updatedAt: "2025-01-06T10:45:00.000Z",
    __v: 1,
    courseThumbnail:
      "https://images.unsplash.com/photo-1584697964154-55f9cbdcc61e?w=500&auto=format&fit=crop&q=60",
  },
];

// Async thunk to fetch courses
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    // const response = await axios.get("http://localhost/all-courses");
    // return response.data; // assuming backend returns an array of courses
    return dummyCourses;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const coursesReducer = coursesSlice.reducer;
