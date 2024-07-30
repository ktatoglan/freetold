import React from 'react';

const Sidebar = () => {
  return (
    <div className="review-sidebar">
      <div className="cost">
        <h3>How much it costs to live here</h3>
        <div className="cost-item">
          <span className="label">Monthly rent:</span> <span className="value">1,100 £</span>
        </div>
        <div className="cost-item">
          <span className="label">Electricity:</span> <span className="value">213 £</span>
        </div>
        <div className="cost-item">
          <span className="label">Gas:</span> <span className="value">324 £</span>
        </div>
        <div className="cost-item">
          <span className="label">Water:</span> <span className="value">45 £</span>
        </div>
        <div className="cost-item">
          <span className="label">Internet:</span> <span className="value">59 £</span>
        </div>
      </div>
      <div className="rating">
        <h3>Rating review</h3>
        <div className="rating-item">
          <span className="label">Heating:</span> <span className="stars">⭐⭐⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Lighting:</span> <span className="stars">⭐⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Internet connection:</span> <span className="stars">⭐⭐⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Noise level:</span> <span className="stars">⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Parking:</span> <span className="stars">⭐⭐⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Traffic:</span> <span className="stars">⭐⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Neighbors:</span> <span className="stars">⭐⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Owner's respond:</span> <span className="stars">⭐⭐⭐</span>
        </div>
        <div className="rating-item">
          <span className="label">Pet-friendly:</span> <span className="value">❌</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
