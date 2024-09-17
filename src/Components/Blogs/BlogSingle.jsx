import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import BlogSearch from './BlogSearch';
import BlogContent from './BlogContent';


const BlogSingle = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axios.get(`https://blog.freetold.com/wp-json/custom/v1/get-single-post/${id}`).then((response) => {
      console.log(response.data);
      setBlog(response.data);
    });
  }, [id]);
  return (
    <div className="blogs-page">
      <Sidebar />
      <div className="content">
        <BlogSearch />
        <BlogContent blog={blog}/>
      </div>
    </div>
  );
};

export default BlogSingle;
