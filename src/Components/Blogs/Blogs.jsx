import React from 'react';
import Sidebar from './Sidebar';
import BlogSearch from './BlogSearch';
import FeaturedBlog from './FeaturedBlog';
import AllBlogs from './AllBlogs';


const Blogs = () => {
  return (
    <div className="blogs-page">
      <Sidebar />
      <div className="content">
        <BlogSearch />
        <FeaturedBlog />
        <AllBlogs />
      </div>
    </div>
  );
};

export default Blogs;
