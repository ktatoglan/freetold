import React from "react";
import selectedStarSrc from "../assets/img/star-selected.svg";
import defaultStarSrc from "../assets/img/star-default.svg";

const createStar = (times, additionalClass) => {
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    const isSelected = index < times;
    return (
      <img
        key={index}
        src={isSelected ? selectedStarSrc : defaultStarSrc}
        alt={isSelected ? "Selected Star" : "Default Star"}
        className="star-icon"
      />
    );
  });

  return <div className={`star-rating ${additionalClass}`}>{stars}</div>;
};

export default createStar;
