import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const BlogContent = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <>
    <Loading/>
    </>;
  }

  if (!blog) {
    return <p>Blog bulunamadı.</p>;
  }

  // Verileri kontrol ederek render edin
  return (
    <div className="blog-single-main">
      <div className="blog-single-header">
        <div className="blog-cat">
          <p>{blog.categories_data && blog.categories_data[0]?.name}</p>
        </div>
        <div className="blog-date">
          {new Date(blog.date_gmt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
      <h1 className="blog-title">{blog.title?.rendered}</h1>
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
  );
};

export default BlogContent;
