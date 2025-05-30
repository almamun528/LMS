import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  
  return (
    <section>
     
      <div className="card bg-base-100  shadow-sm border-1 border-purple-800 hover:shadow-2xl hover:bg-gray-50">
        <figure>
          <img className="h-48 mt-4 rounded shadow" src={blog.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-purple-950 text-lg">
            {blog.title.slice(0, 50)}...
          </h2>
          {/* description area */}
          <p>{blog?.description.slice(0, 60)}....</p>
          <div className="card-actions">
            <Link
              onClick={() => scrollTo(0, 0)}
              to={"/blog/" + blog?.id}
              className="btn bg-purple-950 text-white hover:bg-purple-800"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
