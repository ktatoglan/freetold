import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import { useAppProvider } from "../../Contexts/AppContext";
import axios from "axios";

export const LatestReviews = () => {
  const[reviews, setReviews] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const { serverUrl } = useAppProvider();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/review/latest-reviews`
        );
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reviews. Please try again later.");
        setLoading(false);
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);


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
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
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
            {reviews.map((review) => (
              <ReviewCard key={review.review_id} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
