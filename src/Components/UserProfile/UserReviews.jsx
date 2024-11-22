import React from "react";
import UserReviewSingle from "./UserReviewSingle";
import ReviewSingle from "../PropertyProfile/ReviewSingle";
const UserReviews = ({reviews}) => {
  return (
    <div className="reviews-section" id="reviews-section">
      <h3>My Reviews</h3>
      {reviews.length == 0 ?
          <p>You have not written any reviews yet.</p>
        :
        reviews.map((review) => (
          <ReviewSingle key={review.review_id} review={review} />
        ))
      }

    </div>
  );
};

export default UserReviews;
