import React from "react";

export const MainCardSingle = ({ image, title, text }) => {
  return (
    <>
      <div className="card-single">
        <div className="card-content">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
          <div className="card-title">
            <h4>{title}</h4>
          </div>
          <div className="card-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
