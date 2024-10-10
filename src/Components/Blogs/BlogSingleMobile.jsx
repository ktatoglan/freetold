import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContactUs } from "../HomePage/ContactUs";
import Loading from "./Loading";

function BlogSingleMobile() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for general API requests

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://blog.freetold.com/wp-json/custom/v1/get-single-post/${slug}`
      )
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        setLoading(false);
      });
  }, [slug]);

  // Conditional rendering based on loading and error states
  if (loading) {
    return <>
    <Loading/>
    </>;
  }

  return (
    <>
      <div className="">
        {/* Blog */}
        <div className="blog-content-mobile">
          <div className="blog-single-main">
            <div className="blog-single-header">
              <div className="blog-cat">
                <p><span>Blog &#62;</span>  {blog.categories_data && blog.categories_data[0]?.name}</p>
              </div>
            </div>
            <h1 className="blog-title">{blog.title?.rendered}</h1>
            <div className="blog-date">
              {new Date(blog.date_gmt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="blog-tags">
              {blog.tags_data.map((tag) => (
                <span key={tag.id} className="tag">
                  #{tag.name}
                </span>
              ))}
            </div>
            <p
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content?.rendered }}
            ></p>
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
}

export default BlogSingleMobile;
