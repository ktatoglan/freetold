import React, {useEffect} from 'react';
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
  useEffect(() => {
    //add meta description tag for SEO
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Freetold is your trusted guide to the UK housing market. Discover real tenant reviews, insights into neighbourhoods, living costs, and utility bills. Learn about landlords, property conditions, and more to make confident renting or buying decisions. Join the community transforming how we find and share property information.';
  },[]);

  return (
    <div>

        <MainBanner />
        {/*<SearchBar />
        <HomePageTextWelcome />
         <Testimonials />
        */}
        <MainCards />
        <LatestReviews />
        <BlogSection />
        <ContactUs />

    </div>
  );
};

export default HomePage;
