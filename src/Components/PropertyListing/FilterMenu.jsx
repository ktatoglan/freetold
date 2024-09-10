import React, { useState } from "react";

const FilterMenu = ({ onApplyFilters }) => {
  const [rating, setRating] = useState("");

  const [activeScoreIndex, setActiveScoreIndex] = useState(null);
  const [activeEpcIndex, setActiveEpcIndex] = useState(null);
  const applyFilters = () => {
    // const filters = [];
    // if (priceRange) filters.push(`Price: ${priceRange}`);
    // if (score) filters.push(`Score: ${score}`);
    // if (rating) filters.push(`Rating: ${rating}`);
    // onApplyFilters(filters);
  };
  const resetAllFilters = () => {
    alert("Reset All Filters");
  };

  const handleScoreClick = (index) => {
    setActiveScoreIndex(index);
  };

  const handleEpcClick = (index) => {
    setActiveEpcIndex(index);
  };

  return (
    <div className="filter-menu">
      <p>Filter by:</p>
      <div className="filter-section">
        <div className="filter-option">
          <div className="filter-title">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.833008 10.0002C0.833008 4.93766 4.93717 0.833496 9.99967 0.833496C15.0622 0.833496 19.1663 4.93766 19.1663 10.0002C19.1663 15.0627 15.0622 19.1668 9.99967 19.1668C4.93717 19.1668 0.833008 15.0627 0.833008 10.0002ZM10.833 5.00016C10.4222 5.00016 9.82384 5.11683 9.30467 5.49016C8.74134 5.89516 8.33301 6.56183 8.33301 7.50016V9.16683H7.49967C7.27866 9.16683 7.0667 9.25463 6.91042 9.41091C6.75414 9.56719 6.66634 9.77915 6.66634 10.0002C6.66634 10.2212 6.75414 10.4331 6.91042 10.5894C7.0667 10.7457 7.27866 10.8335 7.49967 10.8335H8.33301V11.6668C8.33301 11.811 8.28301 12.0468 8.15634 12.2218C8.06134 12.3543 7.89467 12.5002 7.49967 12.5002C7.27866 12.5002 7.0667 12.588 6.91042 12.7442C6.75414 12.9005 6.66634 13.1125 6.66634 13.3335C6.66634 13.5545 6.75414 13.7665 6.91042 13.9228C7.0667 14.079 7.27866 14.1668 7.49967 14.1668H12.4997C12.7207 14.1668 12.9326 14.079 13.0889 13.9228C13.2452 13.7665 13.333 13.5545 13.333 13.3335C13.333 13.1125 13.2452 12.9005 13.0889 12.7442C12.9326 12.588 12.7207 12.5002 12.4997 12.5002H9.86134C9.96134 12.1943 9.99967 11.9002 9.99967 11.6668V10.8335H10.833C11.054 10.8335 11.266 10.7457 11.4223 10.5894C11.5785 10.4331 11.6663 10.2212 11.6663 10.0002C11.6663 9.77915 11.5785 9.56719 11.4223 9.41091C11.266 9.25463 11.054 9.16683 10.833 9.16683H9.99967V7.50016C9.99967 7.10516 10.1455 6.9385 10.278 6.8435C10.453 6.71683 10.6888 6.66683 10.833 6.66683C10.9772 6.66683 11.213 6.71683 11.388 6.8435C11.5205 6.9385 11.6663 7.10516 11.6663 7.50016C11.6663 7.72118 11.7541 7.93314 11.9104 8.08942C12.0667 8.2457 12.2787 8.3335 12.4997 8.3335C12.7207 8.3335 12.9326 8.2457 13.0889 8.08942C13.2452 7.93314 13.333 7.72118 13.333 7.50016C13.333 6.56183 12.923 5.89516 12.3613 5.49016C11.9135 5.17536 11.3804 5.00444 10.833 5.00016Z"
                fill="#646464"
              />
            </svg>
            Price per month
          </div>
          <div className="input-line">
            <div className="input-holder">
              <label htmlFor="min-price">Minimum</label>
              <input type="text" name="min-price" id="min-price" />
              <label>£</label>
            </div>
            <div className="input-holder">
              <label htmlFor="max-price">Maximum</label>
              <input type="text" name="max-price" id="max-price" />
              <label>£</label>
            </div>
          </div>
        </div>
        <div className="filter-option">
          <div className="filter-title">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="20" height="20" rx="10" fill="#646464" />
              <path
                d="M10 14.4409L7.17239 16.2244C7.04747 16.3076 6.91688 16.3433 6.78061 16.3314C6.64433 16.3195 6.5251 16.272 6.42289 16.1887C6.32069 16.1055 6.2412 16.0016 6.18442 15.877C6.12764 15.7524 6.11628 15.6125 6.15035 15.4575L6.89984 12.0866L4.39584 9.82146C4.28228 9.71445 4.21142 9.59245 4.18326 9.45548C4.1551 9.3185 4.1635 9.18485 4.20847 9.05453C4.25389 8.92374 4.32203 8.81673 4.41288 8.73349C4.50373 8.65026 4.62864 8.59675 4.78763 8.57297L8.09223 8.26977L9.36978 5.09505C9.42656 4.95236 9.51468 4.84535 9.63414 4.77401C9.75361 4.70266 9.87557 4.66699 10 4.66699C10.125 4.66699 10.2469 4.70266 10.3659 4.77401C10.4849 4.84535 10.5731 4.95236 10.6303 5.09505L11.9078 8.26977L15.2124 8.57297C15.3714 8.59675 15.4963 8.65026 15.5872 8.73349C15.678 8.81673 15.7462 8.92374 15.7916 9.05453C15.837 9.18533 15.8457 9.31921 15.8175 9.45619C15.7893 9.59317 15.7182 9.71492 15.6042 9.82146L13.1002 12.0866L13.8497 15.4575C13.8838 15.6121 13.8724 15.7519 13.8157 15.877C13.7589 16.0021 13.6794 16.106 13.5772 16.1887C13.475 16.272 13.3557 16.3195 13.2195 16.3314C13.0832 16.3433 12.9526 16.3076 12.8277 16.2244L10 14.4409Z"
                fill="white"
              />
            </svg>
            Rating score
          </div>
          <div className="filter-section">
            <ul className="score-list">
              {["Not less than 5", "4+", "3+", "2+", "All", "Unrated"].map(
                (item, index) => (
                  <li
                    key={index}
                    className={activeScoreIndex === index ? "active" : ""}
                    onClick={() => handleScoreClick(index)}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="filter-option">
            <div className="filter-title">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.58366 16.667L13.6337 8.55866H10.8337V3.33366L6.66699 11.442H9.58366V16.667ZM10.0003 1.66699C12.292 1.66699 14.2503 2.50033 15.8753 4.12533C17.5003 5.75033 18.3337 7.70866 18.3337 10.0003C18.3337 12.292 17.5003 14.2503 15.8753 15.8753C14.2503 17.5003 12.292 18.3337 10.0003 18.3337C7.70866 18.3337 5.75033 17.5003 4.12533 15.8753C2.50033 14.2503 1.66699 12.292 1.66699 10.0003C1.66699 7.70866 2.50033 5.75033 4.12533 4.12533C5.75033 2.50033 7.70866 1.66699 10.0003 1.66699Z"
                  fill="#646464"
                />
              </svg>
              EPC rating
            </div>
            <div className="filter-section">
              <ul className="score-list">
                {["A", "B+", "C+", "D+", "All"].map((item, index) => (
                  <li
                    key={index}
                    className={activeEpcIndex === index ? "active" : ""}
                    onClick={() => handleEpcClick(index)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="filter-option">
          <div className="toggle-group">
            <input
              type="checkbox"
              id="pet-friendly"
              // onChange={}
            />
            <label htmlFor="is-sharing">Toggle</label>
            <p>Pet-friendly</p>
          </div>
        </div>
        <div className="filter-option">
          <div className="toggle-group">
            <input
              type="checkbox"
              id="Shared flat"
              // onChange={}
            />
            <label htmlFor="is-sharing">Toggle</label>
            <p>Shared flat</p>
          </div>
        </div>
      </div>
      <div className="btn-line">
        <button className="reset-filters-btn" onClick={resetAllFilters}>
          Reset all filters
        </button>
        <button className="apply-filters-btn" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
