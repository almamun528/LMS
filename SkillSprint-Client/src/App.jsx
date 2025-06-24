import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CoursesList from "./pages/student/CoursesList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Loading from "./component/student/Loading";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentEnrolled from "./pages/educator/StudentEnrolled";
import Navbar from "./component/student/Navbar";
import Login from "./component/Events/Login";
import SignUp from "./component/events/SignUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authObserver } from "./ReduxAPI/Auth/authObserver";
import RedirectIfAuth from "./component/RedirectIfAuth/RedirectIfAuth";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./component/Blogs/BlogDetails";
import "quill/dist/quill.snow.css";
import AboutUs from "./component/About Us/AboutUs";
import AllUser from "./pages/Admin /AllUser";
import UsersProfile from "./pages/Admin /UsersProfile";

const App = () => {
  const dispatch = useDispatch();
  //!User Observer
  useEffect(() => {
    const unsubscribe = authObserver(dispatch);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const isEducatorRoute = useMatch("/educator/*"); //is the user belongs from tutor
  return (
    <section>
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route
          path="/sign-up"
          element={
            <RedirectIfAuth>
              <SignUp />
            </RedirectIfAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectIfAuth>
              <Login />
            </RedirectIfAuth>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseID" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Admin Route */}
        <Route path="/admin/all-users" element={<AllUser />} />
        <Route path="/user-profile/:userId" element={<UsersProfile />} />

        {/* ✅ Nested routes setup */}
        <Route path="/educator" element={<Educator />}>
          <Route index element={<Dashboard />} /> {/* default nested route */}
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </section>
  );
};

export default App;
// 6h 51m
