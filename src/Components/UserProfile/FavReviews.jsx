import React from "react";
import ReviewSingle from "../PropertyProfile/ReviewSingle";
const UserReviews = ({reviews}) => {
  return (
    <div className="reviews-section" id="reviews-section">
      <h3>Favourite Reviews</h3>
      {reviews.length == 0 ?
          <p>You didn't add any review to favourites.</p>
        :
        reviews.map((review) => (
          <ReviewSingle key={review.review_id + "f"} review={review} />
        ))
      }

    </div>
  );
};

export default UserReviews;
