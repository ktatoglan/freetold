import React from 'react';
import Categories from './Categories';
import Tags from './Tags';


const Sidebar = () => {
  return (
    <div className="blogs-sidebar">
      <Categories />
      <Tags />
    </div>
  );
};

export default Sidebar;