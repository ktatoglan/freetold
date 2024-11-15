import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCardMobile({ category, title, tag, slug, img }) {
  const navigate = useNavigate();
  return (
    <div className="blog-card" onClick={()=>{navigate(`/blog/${slug}`)}}>
      {img && <img className="blog-img" src={img} alt={title} />}
      <h2 className="blog-category">{category && category[0] && category[0].name ? category[0].name : "Unknown Category"}</h2>
      <h3 className="blog-title">{title}</h3>
      <div className="blog-tags">
        {tag && tag.length > 0 ? (
          tag.map((tagItem, index) => (
            <span key={index} className="blog-tag">
              #{tagItem.name}
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
