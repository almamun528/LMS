import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchBlogs } from "../../ReduxAPI/Blog/blogSlice";
import BlogCard from "./BlogCard";
import useCourses from "../../hook/useCourses";
import CourseCard from "../student/CourseCard";
import Footer from "../Footer/Footer";

function BlogDetails() {
  const { id } = useParams();
  const { blogs, loading, error } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  console.log(id);
  const [blogData, setBlogData] = useState();
  useEffect(() => {
    // Bring all blogs
    dispatch(fetchBlogs());
  }, [dispatch]);
  const { courses } = useCourses();
  console.log(courses);
  useEffect(() => {
    const findBlog = blogs.find((blog) => blog.id == id);
    setBlogData(findBlog);
  }, [blogs, id]);
  console.log(blogData);
  if (loading) return <h2> Loading...</h2>;
  if (error) return <h2> {error}</h2>;
  return (
    <section className="my-3 ">
      <div className="content-area p-2">
        <h2 className="text-xl font-extrabold md:text-2xl text-purple-950">
          {blogData?.title}
        </h2>
        <progress className="progress w-56 text-purple-950 my-5"></progress>
        <div className="banner-area">
          <img className="my-10 rounded mx-auto" src={blogData?.image} alt="" />
        </div>
        {/* sub heading */}
        <h2 className="my-3 text-purple-900">{blogData?.subHeading}</h2>
        <p className="text-gray-500 leading-8">
          {" "}
          <span className="font-semibold my-2">Description : </span>{" "}
          {blogData?.description}
        </p>
      </div>
      {/* Most Popular courses  */}
      <h2 className="text-xl md:text-3xl font-semibold text-center my-10">
        {" "}
        Popular Courses
      </h2>
      <div className="divider divider-primary w-1/4 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2 my-10">
        {courses?.slice(0, 4).map((course, idx) => (
          <CourseCard key={course?.id} course={course} />
        ))}
      </div>
      {/* Related blogs */}
      <h2 className="text-xl md:text-3xl font-semibold text-center my-10">
        {" "}
        Related Blogs{" "}
      </h2>
      <div className="divider divider-primary w-1/4 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 p-2">
        {blogs?.slice(0, 4).map((blog, idx) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
      <div className="text-center">
        <Link
          onClick={() => scrollTo(0, 0)}
          className="mt-2  place-items-center btn  hover:bg-purple-950 hover:text-white border-purple-900 px-10 py-3 rounded"
          to={"/blog"}
        >
          All Blogs
        </Link>
      </div>

      <footer className="mt-10">
        <Footer />
      </footer>
    </section>
  );
}

export default BlogDetails;
