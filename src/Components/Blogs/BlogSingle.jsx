import React from 'react';
import Sidebar from './Sidebar';
import BlogSearch from './BlogSearch';
import BlogContent from './BlogContent';


const BlogSingle = () => {
  return (
    <div className="blogs-page">
      <Sidebar />
      <div className="content">
        <BlogSearch />
        <BlogContent />
      </div>
    </div>
  );
};

export default BlogSingle;
