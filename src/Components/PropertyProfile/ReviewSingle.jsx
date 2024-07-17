import React from 'react';

const ReviewSingle = ({ review }) => (
  <div className="review-single">
    <div className="user-info">
      <div className="avatar-placeholder"></div>
      <div>
        <div className="user-name">{review.user.name}</div>
        <div className="user-duration">{review.user.duration}</div>
      </div>
    </div>
    <h3 className="review-title">{review.title}</h3>
    <div className="review-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}></span>
      ))}
      <span className="review-date">{review.date}</span>
    </div>
    <div className="review-content">
      <div className="pros">
        <strong>Pros</strong>
        <p>{review.pros}</p>
      </div>
      <div className="cons">
        <strong>Cons</strong>
        <p>{review.cons}</p>
      </div>
    </div>
    <div className="review-footer">
      <div className="likes">
        <span className="like-icon"></span>
        <span>{review.likes} likes</span>
      </div>
      <a href={review.fullReviewLink} className="full-review-link">Read full review</a>
    </div>
    <div className="rating-review">
      <h4>Rating review</h4>
      <div className="rating-details">
        <div className="rating-item">
          <span className="icon heating-icon"></span>
          <span>Heating</span>
          <span>{review.ratingReview.heating}</span>
        </div>
        <div className="rating-item">
          <span className="icon internet-icon"></span>
          <span>Internet connection</span>
          <span>{review.ratingReview.internet}</span>
        </div>
        <div className="rating-item">
          <span className="icon noise-icon"></span>
          <span>Noise level</span>
          <span>{review.ratingReview.noise}</span>
        </div>
        <div className="rating-item">
          <span className="icon traffic-icon"></span>
          <span>Traffic</span>
          <span>{review.ratingReview.traffic}</span>
        </div>
        <div className="rating-item">
          <span className="icon owner-icon"></span>
          <span>Owner's respond</span>
          <span>{review.ratingReview.ownerResponse}</span>
        </div>
        <div className="rating-item">
          <span className="icon neighbors-icon"></span>
          <span>Neighbors</span>
          <span>{review.ratingReview.neighbors}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewSingle;
