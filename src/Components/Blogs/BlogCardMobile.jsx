import React from "react";

function BlogCardMobile({ category, title, tags }) {
  return (
    <div className="blog-card">
      <h2 className="blog-category">{category}</h2>
      <h3 className="blog-title">{title}</h3>
      <div className="blog-tags">
        {tags.map((tag, index) => (
          <span key={index} className="blog-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BlogCardMobile;
