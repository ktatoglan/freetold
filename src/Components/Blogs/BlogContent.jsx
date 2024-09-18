import {useState, useEffect} from 'react';
import axios from 'axios';

const BlogContent = ({ slug }) => {
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axios.get(`https://blog.freetold.com/wp-json/custom/v1/get-single-post/${slug}`).then((response) => {
      // console.log(response.data);
      setBlog(response.data);
    });
  }, [slug]);
  console.log(blog);
  return (
    <>
      <div className="blog-single-main">
        <div className="blog-single-header">
          <div className="blog-cat">
            <p>{blog.categories_data[0].name}</p>
          </div>
          <div className="blog-date">
            {new Date(blog.date_gmt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
        <h1 className="blog-title">
          {blog.title.rendered}
        </h1>

        <p
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
        ></p>
      </div>
    </>
  );
};

export default BlogContent;
