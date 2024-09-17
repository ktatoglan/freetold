import BlogCard from "./BlogCard";

const AllBlogs = ({blogs}) => {

  return (
    <div className="all-blogs">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default AllBlogs;
