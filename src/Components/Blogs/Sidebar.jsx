import React from 'react';
import Categories from './Categories';
import Tags from './Tags';


const Sidebar = ({allBlog, setBlogs}) => {
  return (
    <div className="blogs-sidebar">
      <Categories allBlog = {allBlog} setBlogs = {setBlogs}/>
      <Tags allBlog = {allBlog} setBlogs = {setBlogs}/>
    </div>
  );
};

export default Sidebar;