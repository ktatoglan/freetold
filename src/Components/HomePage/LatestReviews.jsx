import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";

export const LatestReviews = () => {
  var settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
          }
        }
      ]
  };
  return (
    <section className="latest-reviews">
      <div className="container-fluid">
        <h3 className="title">Latest reviews from our users</h3>
        <div className="reviews-holder">
          <Slider {...settings}>
            <ReviewCard ReviewID={141414} />
            <ReviewCard ReviewID={232323} />
            <ReviewCard ReviewID={141414} />
            <ReviewCard ReviewID={232323} />
            <ReviewCard ReviewID={141414} />
            <ReviewCard ReviewID={232323} />
          </Slider>
        </div>
      </div>
    </section>
  );
};
