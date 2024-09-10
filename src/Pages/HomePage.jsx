import React from 'react';
import HomePageText from '../Components/HomePage/HomePageText';
import HomePageTextWelcome from '../Components/HomePage/HomePageTextWelcome';
import SearchBar from '../Components/HomePage/SearchBar';
import '../Style/HomePage.css';
import { MainBanner } from '../Components/HomePage/MainBanner';
import { MainCards } from '../Components/HomePage/MainCards';
import { Testimonials } from '../Components/HomePage/Testimonials';
import { ContactUs } from '../Components/HomePage/ContactUs';
import { LatestReviews } from '../Components/HomePage/LatestReviews';
import BlogSection from '../Components/HomePage/BlogSection';
const HomePage = () => {
  // Add your component logic here

  return (
    <div>
        <HomePageTextWelcome />
        <ContactUs />

        {/*<SearchBar />
        <MainBanner/>
         <Testimonials />
        <LatestReviews />*/}
        <MainCards />
        <BlogSection />

    </div>
  );
};

export default HomePage;
