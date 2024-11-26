import React, { useState } from "react";
import "../../Style/WriteReview.css";
import { useAppProvider } from "../../Contexts/AppContext";
import { useNavigate } from "react-router-dom";

function WriteReview3() {
  const [text, setText] = useState("");
  const maxLength = 75;
  const {
    addressLine1,
    addressLine2,
    postCode,
    reviewScore,
    setReviewScore,
    reviewHeadline,
    setReviewHeadline,
    reviewPros,
    setReviewPros,
    reviewCons,
    setReviewCons,
  } = useAppProvider();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  const handleFocus = (setter) => (e) => {
    if (e.target.value === "0") {
      setter("");
    }
  };

  return (
    <div className="container">
      <div className="review-flow wr3">
        <div className="review-header">
          <p className="header-text">You are writing a review for</p>
          <div className="header-address">
            <p>
              <span className="address-icon">
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.83325C16.5 14.6666 9 19.6666 9 19.6666C9 19.6666 1.5 14.6666 1.5 8.83325C1.5 6.84413 2.29018 4.93647 3.6967 3.52995C5.10322 2.12343 7.01088 1.33325 9 1.33325C10.9891 1.33325 12.8968 2.12343 14.3033 3.52995C15.7098 4.93647 16.5 6.84413 16.5 8.83325Z"
                    stroke="#EF6C67"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11.3333C10.3807 11.3333 11.5 10.214 11.5 8.83325C11.5 7.45254 10.3807 6.33325 9 6.33325C7.61929 6.33325 6.5 7.45254 6.5 8.83325C6.5 10.214 7.61929 11.3333 9 11.3333Z"
                    stroke="#EF6C67"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {addressLine1} {addressLine2}, {postCode}
            </p>
          </div>
          <div className="header-progress-bar">
            <ul>
              <li className="progress"></li>
              <li className="progress"></li>
              <li className="progress active"></li>
              <li className="progress"></li>
              <li className="progress"></li>
            </ul>
          </div>
          <div className="header-step">
            <p>Step 3</p>
          </div>
        </div>
        <div className="review-content">
          <div className="row">
            <h3>Review your property</h3>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">Rate your current property</p>
              <div className="row mt-small mb-small">
                <div className="rating-container stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`star${index + 1}`}
                        name="rating"
                        value={index + 1}
                        checked={reviewScore === 5 - index}
                        onClick={() => setReviewScore(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`star${index + 1}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">
                Write a headline for your review
              </p>

              <div className="input-container">
                <input
                  type="text"
                  value={reviewHeadline}
                  onChange={(event) => setReviewHeadline(event.target.value)}
                  maxLength={maxLength}
                  onFocus={handleFocus(setReviewHeadline)}
                />
                <div className="character-counter">
                  {maxLength - reviewHeadline.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">Pros</p>

              <div className="input-container">
                <textarea
                  className="custom-textarea"
                  placeholder="Great lightning, smart appliances or cool facilities"
                  rows={4}
                  value={reviewPros}
                  onChange={(event) => setReviewPros(event.target.value)}
                ></textarea>
                <div className="character-counter hidden">
                  {maxLength - reviewPros.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">Cons</p>

              <div className="input-container">
                <textarea
                  className="custom-textarea"
                  placeholder="Heating issues, tube sound or no parking "
                  rows={4}
                  value={reviewCons}
                  onChange={(event) => setReviewCons(event.target.value)}
                ></textarea>
                <div className="character-counter hidden">
                  {maxLength - reviewCons.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>

          <div className="row">
            <div className="buttons">
              <button
                className="pre-step"
                onClick={() => {
                  navigate("/write-a-review-2");
                }}
              >
                Previous step
              </button>
              <button
                className="next-step"
                onClick={() => {
                  navigate("/write-a-review-4");
                }}
              >
                Next step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview3;
