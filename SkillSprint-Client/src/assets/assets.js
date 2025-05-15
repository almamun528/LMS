import Logo from "./logo.png";
import BGLogo from "./logoBG.png";
import Search_Icon from "./icons/search.png";
import Teacher1 from "./Teacher/Teacher-image-1.jpg";
import Teacher2 from "./Teacher/Teacher-image-2.jpg";
import Teacher3 from "./Teacher/Teacher-image-3.jpg";
import Teacher4 from "./Teacher/Teacher-image-4.jpg";
import Teacher5 from "./Teacher/Teacher-image-5.jpg";
export const assets = {
  Logo,
  BGLogo,
  Search_Icon,
  Teacher1,
  Teacher2,
  Teacher3,
  Teacher4,
  Teacher5,
};

export const dummyEducatorData = {
  _id: "9823434324242340010423",
  name: "John Doe",
  email: "john@gmail.com",
  image: Teacher1,
  createdAt: "2024--12-12T10:56:17.930z",
  updatedAt: "2024-12-12T10:56:17.930z",
  __v: 0,
};
// !testimonial
export const dummyTestimonial = [
  {
    name: "John Jackman",
    role: "SWE at Amazon",
    image: Teacher1,
    rating: 5,
    feedback:
      "I've been using Imagery for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier",
  },
  {
    name: "Alena",
    role: "Digital Marketer at Google",
    image: Teacher2,
    rating: 5,
    feedback:
      "I've been using Imagery for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier",
  },
  {
    name: "Jack Gomaz",
    role: "Programmer at google",
    image: Teacher3,
    rating: 5,
    feedback:
      "I've been using Imagery for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier",
  },
  {
    name: "John Poul",
    role: "AI Eng at Meta",
    image: Teacher4,
    rating: 5,
    feedback:
      "I've been using Imagery for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier",
  },
  {
    name: "John Jackman",
    role: "SWE at Uber",
    image: Teacher5,
    rating: 5,
    feedback:
      "I've been using Imagery for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier",
  },
];
// dummy dashboard data
export const dummyDashboardData = {
  totalEarnings: 707.38,
  enrolledStudentsData: [
    {
      CourseTitle: "Introduction to JavaScript",
      student: {
        _id: "user_2123jbcjdbva3414f",
        name: "Mamun",
        imageUrl:
          "https://images.unsplash.com/file-1715714098234-25b8b4e9d8faimage?w=416&dpr=2&auto=format&fit=crop&q=60",
      },
    },
    {
      CourseTitle: "Introduction to Python Programming",
      student: {
        _id: "user_2123jbcjdbva3414kkre00f",
        name: "Jahangir Kabir",
        imageUrl:
          "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHB5dGhvbnxlbnwwfHwwfHx8MA%3D%3D",
      },
    },
  ],
};

export const dummyStudentEnrolled = [
  {
    student: {
      _id: "user_2123jbcjdbva3414f",
      name: "Mamun",
      imageUrl:
        "https://images.unsplash.com/file-1715714098234-25b8b4e9d8faimage?w=416&dpr=2&auto=format&fit=crop&q=60",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509z",
  },
  {
    student: {
      _id: "user_2123jbcjdbva341ee4f",
      name: "Alena Rozario",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMGltYWdlfGVufDB8fDB8fHww",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509z",
  },
];

export const dummyCourses = [
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
    createdAt: "2025-01-05T09:15:00.000Z",
    updatedAt: "2025-01-06T10:45:00.000Z",
    __v: 1,
    courseThumbnail:
      "https://images.unsplash.com/photo-1584697964154-55f9cbdcc61e?w=500&auto=format&fit=crop&q=60",
  },
];

// export const dummyCourses = [
//   {
//     _id: "98148nnf93ll03",
//     courseTitle: "Introduction to JavaScript",
//     courseDescription:
//       "<h2>Learn the basic of javascript</h2> <p>javascript is the most popular programming language it is very heigh level language and user can interact with it</p>  <p>            A card component has a figure, a body part, and inside body there are title and actions parts</p> <ul> <li>understand the basic</li>  <li>Web-Dev</li> <li>Basic es-6</li> </ul>",
//     coursePrice: 49.99,
//     isPublished: true,
//     discount: 20,
//     courseContent: [
//       {
//         chapterID: "chapter1",
//         chapterOrder: 1,
//         chapterTitle: "getting started with javascript",
//         chapterContent: [
//           {
//             lectureId: "lecture1",
//             lectureTitle: "what is JavaScript",
//             lectureDuration: 16,
//             lectureUrl: "https://youtu.be/fPc7UxB0BEE?si=oZjlM_RuBZwUDYC5",
//             isPreviewFree: true,
//             lectureOrder: 1,
//           },
//           {
//             lectureId: "lecture2",
//             lectureTitle: "Setup Environment ",
//             lectureDuration: 19,
//             lectureUrl: "https://youtu.be/fPc7UxB0BEE?si=oZjlM_RuBZwUDYC5",
//             isPreviewFree: true,
//             lectureOrder: 1,
//           },
//         ],
//       },
//     ],
//     createdAt: "2024-12-27T10:00:00.000Z",
//     updatedAt: "2024-12-31T09:57:48.992Z",
//     __v: 3,
//     courseThumbnail:
//       "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anN8ZW58MHx8MHx8fDA%3D",
//   },
// ];
