import React from 'react';
import HomePageText from '../Components/HomePage/HomePageText';
import SearchBar from '../Components/HomePage/SearchBar';
import '../Style/HomePage.css';
const HomePage = () => {
  // Add your component logic here

  return (
    <div>
        <HomePageText />
        <SearchBar />
    </div>
  );
};

export default HomePage;
