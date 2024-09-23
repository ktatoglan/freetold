import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import BlogSearch from './BlogSearch';
import BlogContent from './BlogContent';


const BlogSingle = () => {
  const {slug} = useParams();

  return (
    <div className="blogs-page">
      <Sidebar />
      <div className="content">
        <BlogSearch />
        <BlogContent slug={slug}/>
      </div>
    </div>
  );
};

export default BlogSingle;
