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
