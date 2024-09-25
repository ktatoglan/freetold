import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCardMobile";
import BlogSearch from "./BlogSearch";
import { ContactUs } from "../HomePage/ContactUs";

function BlogsMobile() {
  const [blogs, setBlogs] = useState([]);
  const [allBlog, setAllBlog] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isTagsOpen, setTagsOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state for general API requests
  const [error, setError] = useState(null); // Error state for error handling

  // Fetch all blogs
  useEffect(() => {
    setLoading(true); // Start loading before fetching data
    axios
      .get("https://blog.freetold.com/wp-json/custom/v1/get-all-posts")
      .then((response) => {
        setAllBlog(response.data);
        setBlogs(response.data); // Default to all blogs on initial load
        setLoading(false); // Data is fetched, loading stops
      })
      .catch((error) => {
        setError("There was an error fetching the blogs."); // Set error message
        setLoading(false); // Stop loading
      });
  }, []);

  // Fetch categories
  useEffect(() => {
    axios
      .get("https://blog.freetold.com/wp-json/custom/v1/get-categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError("There was an error fetching the categories."); // Optional error handling for categories
      });
  }, []);

  // Fetch tags
  useEffect(() => {
    axios
      .get("https://blog.freetold.com/wp-json/custom/v1/get-tags")
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
        setError("There was an error fetching the tags."); // Optional error handling for tags
      });
  }, []);

  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
    setTagsOpen(false); // Close tags when opening categories
  };

  const toggleTags = () => {
    setTagsOpen(!isTagsOpen);
    setCategoriesOpen(false); // Close categories when opening tags
  };

  const closeCategories = () => {
    setCategoriesOpen(false);
  };

  const closeTags = () => {
    setTagsOpen(false);
  };

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div className="loading">Loading blogs...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div className="app-container">
        <header className="blogs-mbl-header">
          <BlogSearch allBlog={allBlog} setAllBlog={setBlogs} />
          <div className="button-container">
            <button
              onClick={toggleCategories}
              className="toggle-button cats-button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="5" fill="#EF6C67" />
                {/* SVG paths */}
              </svg>
              All categories
            </button>
            <button onClick={toggleTags} className="toggle-button tags-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="5" fill="#0A2446" />
                {/* SVG paths */}
              </svg>
              Popular tags
            </button>
          </div>
        </header>

        {/* Categories Dropdown */}
        {isCategoriesOpen && (
          <div className="dropdown">
            <div className="dropdown-header">
              <span>By Category</span>
              <button onClick={closeCategories} className="close-button">
                X
              </button>
            </div>
            <div className="categories">
              <ul>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <li key={category.id}>
                      <img src={category.image} alt={category.name} />
                      {category.name}
                    </li>
                  ))
                ) : (
                  <p>No categories available</p>
                )}
              </ul>
            </div>
          </div>
        )}

        {/* Tags Dropdown */}
        {isTagsOpen && (
          <div className="dropdown">
            <div className="dropdown-header">
              <span>Popular Tags</span>
              <button onClick={closeTags} className="close-button">
                X
              </button>
            </div>
            <div className="tags-container">
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <span key={tag.id} className="tag">
                    #{tag.name}
                  </span>
                ))
              ) : (
                <p>No tags available</p>
              )}
            </div>
          </div>
        )}

        {/* Blog Cards */}
        <div className="blog-container">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <BlogCard
                key={index}
                category={blog.category}
                title={blog.title}
                tags={blog.tags}
              />
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>

      <ContactUs />
    </>
  );
}

export default BlogsMobile;
