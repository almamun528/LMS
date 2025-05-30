import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../ReduxAPI/Blog/blogSlice";
import Marquee from "react-fast-marquee";
import BlogCard from './BlogCard';
import { Link } from "react-router-dom";

function BlogFeature() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);


  return (
    <section className="mt-10 md:mt-20 mb-5">
      <div className="my-10 text-center">
        <h2 className=" py-5 font-semibold text-xl md:text-3xl text-purple-950">
          Explore Our Latest Blog Posts
        </h2>
        <p className="text-center w-full md:w-8/12 mx-auto">
          Stay updated with insightful articles, real-world examples, and
          practical tips that help you grow in your learning journey. Dive into
          expert content created by mentors and professionals.
        </p>
        <div>
          <Link
          onClick={()=>scrollTo(0,0)}
              to={"/blog"}
              className="mt-4  place-items-center btn  hover:bg-purple-950 hover:text-white border-purple-900 px-10 py-3 rounded"
            >
              Blogs
            </Link>
        </div>
      </div>
      <Marquee direction="right">
        <div className="flex gap-4 px-4">
          {blogs.map((blog, idx) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default BlogFeature;
