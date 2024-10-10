import {useEffect, useState} from "react";
import  axios  from "axios";
import Sidebar from './Sidebar';
import BlogSearch from './BlogSearch';
import FeaturedBlog from './FeaturedBlog';
import AllBlogs from './AllBlogs';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlog, setAllBlog] = useState([]);
  useEffect(() => {
    axios.get('https://blog.freetold.com/wp-json/custom/v1/get-all-posts').then((response) => {
      setAllBlog(response.data);

    });
  }, []);

  useEffect(() => {
    setBlogs(allBlog);
  }, [allBlog]);





  return (
    <div className="blogs-page">
      <Sidebar />
      <div className="content">
        <BlogSearch allBlog = {allBlog} setBlogs = {setBlogs}/>
        <FeaturedBlog blog={blogs[0]}/>
        <AllBlogs blogs={blogs.slice(1)} />
      </div>
    </div>
  );
};

export default Blogs;
