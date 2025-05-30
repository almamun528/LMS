import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../ReduxAPI/Blog/blogSlice";
import BlogCard from "../../component/Blogs/BlogCard";
import { Link } from "react-router-dom";
import blogBannerImage from '../../assets/Blogs/BlogBanner.avif'
import Footer from "../../component/Footer/Footer";



function Blog() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      {/* blog banner  */}
      <div
        className="hero h-[300px] md:h-[500px] mb-10 "
        style={{
          backgroundImage: `url(${blogBannerImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Unlock Your Learning Journey
            </h1>
            <p className="mb-5">
              Empower your future with high-quality courses designed by industry
              experts. Learn at your pace, anytime, anywhere, and gain the
              skills to thrive in today’s competitive world.
            </p>
            {/* <Link
              to={"/course-list"}
              className="animate-bounce mt-2  place-items-center btn  hover:bg-purple-950 hover:text-white border-purple-900 px-10 py-3 rounded"
            >
              Courses
            </Link> */}
          </div>
        </div>
      </div>
      {/* main blog Content */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Insights to Inspire Your Learning Journey
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover expert tips, student success stories, and the latest in
          online education. Our blog is your go-to resource to stay motivated,
          informed, and ahead in your learning path.
        </p>
        <Link
          to="/course-list"
          className="inline-block mt-6 bg-purple-950 text-white py-2 px-6 rounded hover:bg-purple-800 transition"
        >
          Browse Courses
        </Link>
      </div>

      <main className="px-3 md:px-0 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2">
        {blogs?.map((blog, idx) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </main>
      {/* footer  */}

      <footer className="mt-10">
        <Footer />
      </footer>
    </section>
  );
}

export default Blog;
