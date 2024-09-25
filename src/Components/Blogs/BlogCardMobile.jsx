import React from "react";

function BlogCardMobile({ category, title, tags }) {
  return (
    <div className="blog-card">
      <h2 className="blog-category">{category ? category : "Unknown Category"}</h2>
      <h3 className="blog-title">{title}</h3>
      <div className="blog-tags">
        {tags && tags.length > 0 ? (
          tags.map((tag, index) => (
            <span key={index} className="blog-tag">
              {tag}
            </span>
          ))
        ) : (
          <span>No tags available</span>
        )}
      </div>
    </div>
  );
}

export default BlogCardMobile;
