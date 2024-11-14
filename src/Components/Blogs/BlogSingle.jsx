import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import BlogSearch from './BlogSearch';
import BlogContent from './BlogContent';
import { ContactUs } from '../HomePage/ContactUs';


const BlogSingle = () => {
  const {slug} = useParams();

  return (
    <div className="blogs-page">
      <Sidebar />
      <div className="content">
        <BlogSearch />
        <BlogContent slug={slug}/>
        <ContactUs />
      </div>
      
    </div>
  );
};

export default BlogSingle;
