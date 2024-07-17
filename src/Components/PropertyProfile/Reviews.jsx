import React from 'react';
import ReviewSingle from './ReviewSingle';


const reviewsData = [
  {
    id: 1,
    user: {
      name: 'M. J., student',
      duration: 'Stayed in this property for 6 months'
    },
    title: 'Horrible place, stay away from there',
    rating: 1,
    date: '2 weeks ago',
    pros: 'Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently Located Near the Center of Town, a short distance to Shops, Amenities and Transport Links.',
    cons: 'Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently Located Near the Center of Town, a short distance to Shops, Amenities and Transport Links.',
    likes: 2,
    fullReviewLink: '#',
    ratingReview: {
      heating: 4.6,
      internet: 3.6,
      noise: 4.6,
      traffic: 5.0,
      ownerResponse: 5.0,
      neighbors: 5.0
    }
  },
  {
    id: 2,
    user: {
      name: 'M. J., student',
      duration: 'Stayed in this property for 6 months'
    },
    title: 'Lovely place for first months',
    rating: 4,
    date: '2 weeks ago',
    pros: 'Newly Refurbished Spacious 2 bedroom mid terraced property.',
    cons: 'Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently Located Near the Center of Town, a short distance to Shops, Amenities and Transport Links.',
    likes: 4,
    fullReviewLink: '#',
    ratingReview: {
      heating: 4.6,
      internet: 3.6,
      noise: 4.6,
      traffic: 5.0,
      ownerResponse: 5.0,
      neighbors: 5.0
    }
  }
];

const Reviews = () => (
  <div className="reviews-container">
    <h2>Reviews</h2>
    {reviewsData.map(review => (
      <ReviewSingle key={review.id} review={review} />
    ))}
  </div>
);

export default Reviews;