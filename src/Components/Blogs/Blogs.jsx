import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import BlogSearch from "./BlogSearch";
import FeaturedBlog from "./FeaturedBlog";
import AllBlogs from "./AllBlogs";
import Loading from "./Loading";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlog, setAllBlog] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://blog.freetold.com/wp-json/custom/v1/get-all-posts"
        );
        setAllBlog(response.data);
      } catch (err) {
        setError("Failed to fetch blog posts. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after data fetch completes (either success or failure)
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    //setBlogs(allBlog);
    const urlParams = new URLSearchParams(window.location.search);
      const tag = urlParams.get('tag');
      if(tag && allBlog.length > 0) {
        const filteredBlogs = allBlog.filter(blog => blog.tag.some(t => t.name === tag));
        setBlogs(filteredBlogs);
        //remove parameter from url
        window.history.replaceState({}, document.title, window.location.pathname);

        //add active-blog class to the selected tag
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => tag.classList.remove('active-blog'));
        const selectedTag = Array.from(document.querySelectorAll('.tag')).find(el => el.textContent.includes(`#${tag}`));
        selectedTag.classList.add('active-blog');
      }
      const category = urlParams.get('category');
      if(category && allBlog.length > 0) {
        const filteredBlogs = allBlog.filter(blog => blog.category.some(cat => cat.name === category));
        setBlogs(filteredBlogs);
        //remove parameter from url
        window.history.replaceState({}, document.title, window.location.pathname);

        //add active-category class to the selected category
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => category.classList.remove('active-category'));
        const selectedCategory = Array.from(document.querySelectorAll('.category')).find(el => el.textContent.includes(category));
        selectedCategory.classList.add('active-category');
      }

  }, [allBlog]);



  // Conditionally rendering loading or error state
  // if (loading) {
  //   return <><Loading/></>; // You can replace this with a spinner if needed
  // }

  // if (error) {
  //   return <div>{error}</div>; // Display error message
  // }

  return (
    <div className="blogs-page">
      <Sidebar allBlog={allBlog} setBlogs={setBlogs} />
      <div className="content">
        <BlogSearch allBlog={allBlog} setBlogs={setBlogs} />
        {/* Conditionally render loading spinner or content */}
        {loading ? (
          <><Loading/></> // Loading state inside content area
        ) : error ? (
          <div>{error}</div> // Error message inside content area
        ) : blogs.length > 0 ? (
          <>
            <FeaturedBlog blog={blogs[0]} />{" "}
            {/* Show the first blog as featured */}
            <AllBlogs blogs={blogs.slice(1)} />{" "}
            {/* Show the rest of the blogs */}
          </>
        ) : (
          <div>No blogs available at the moment.</div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
