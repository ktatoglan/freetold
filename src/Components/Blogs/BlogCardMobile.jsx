import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCardMobile({ category, title, tags, slug, img }) {
  const navigate = useNavigate();
  return (
    <div className="blog-card" onClick={()=>{navigate(`/blog/${slug}`)}}>
      <img className="blog-img" src={img} alt={title} />
      <h2 className="blog-category">{category && category[0] && category[0].description ? category[0].description : "Unknown Category"}</h2>
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
