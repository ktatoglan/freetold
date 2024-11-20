import React, { useState, useEffect } from "react";
import ReviewSingle from "./ReviewSingle";

const Reviews = ({ reviews }) => {
  const [sortedReviews, setSortedReviews] = useState([]);
  const [sortOption, setSortOption] = useState("rating");

  useEffect(() => {
    let sortedArray = [...reviews];
    if (sortOption === "rating") {
      sortedArray.sort((a, b) => b.review_score - a.review_score);
    } else if (sortOption === "date") {
      sortedArray.sort((a, b) => new Date(b.move_in_date) - new Date(a.move_in_date));
    }
    setSortedReviews(sortedArray);
  }, [reviews, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h3>Reviews</h3>
        <div className="sort-by">
          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" value={sortOption} onChange={handleSortChange}>
            <option value="rating">Rating</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
      {
      reviews.length === 0 ?
      <div>
        <p>No reviews available, Do you want add one?</p>
        <button
          className="write-a-review-btn"
          onClick={() => {
            window.location.href = "/write-a-review-0";
          }}
        >
          Write a review
        </button>
      </div>

      :
      sortedReviews.map((review) => (
        <ReviewSingle key={review.review_id} review={review} />
      ))

      }
    </div>
  );
};

export default Reviews;
