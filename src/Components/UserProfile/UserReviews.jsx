import React from "react";
import UserReviewSingle from "./UserReviewSingle";

const UserReviews = () => {
  return (
    <div className="reviews-section">
      <h3>Ooops! You don't have any reviews yet!</h3>
      <button className="write-review-button">Write your first review</button>

      {/* OR */}
      <br />
      <br />
      <br />

      <h3>My Reviews</h3>
        <UserReviewSingle />
        <UserReviewSingle />
    </div>
  );
};

export default UserReviews;
