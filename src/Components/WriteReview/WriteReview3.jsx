import { useState } from "react";
import "../../Style/WriteReview.css";
import { useAppProvider } from "../../Contexts/AppContext";

function WriteReview3() {
  const [text, setText] = useState("");
  const maxLength = 75;
  const { reviewHeadline, setReviewHeadline } = useAppProvider();

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };
  return (
    <div className="container">
      <div className="review-flow">
        <div className="review-header">
          <p className="header-text">Your are creating review for</p>
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
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 11.3333C10.3807 11.3333 11.5 10.214 11.5 8.83325C11.5 7.45254 10.3807 6.33325 9 6.33325C7.61929 6.33325 6.5 7.45254 6.5 8.83325C6.5 10.214 7.61929 11.3333 9 11.3333Z"
                    stroke="#EF6C67"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Glan Yr Afon Road, Swansea SA2
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
                  <input type="radio" id="star5" name="rating" value="5" />
                  <label htmlFor="star5"></label>
                  <input type="radio" id="star4" name="rating" value="4" />
                  <label htmlFor="star4"></label>
                  <input type="radio" id="star3" name="rating" value="3" />
                  <label htmlFor="star3"></label>
                  <input type="radio" id="star2" name="rating" value="2" />
                  <label htmlFor="star2"></label>
                  <input type="radio" id="star1" name="rating" value="1" />
                  <label htmlFor="star1"></label>
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
                  value={text}
                  onChange={handleChange}
                  maxLength={maxLength}
                />
                <div className="character-counter">
                  {maxLength - text.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">Pros</p>

              <div className="input-container">
                <textarea
                  class="custom-textarea"
                  placeholder="Great lightning, smart appliances or cool facilities"
                  rows={4}
                ></textarea>
                <div className="character-counter hidden">
                  {maxLength - text.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">Cons</p>

              <div className="input-container">
                <textarea
                  class="custom-textarea"
                  placeholder="Heating issues, tube sound or no parking "
                  rows={4}
                ></textarea>
                <div className="character-counter hidden">
                  {maxLength - text.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>

          <div className="row">
            <div className="buttons">
              <button className="pre-step" onClick={()=>{ window.location.href = 'write-a-review-2';}}>Previous step</button>
              <button className="next-step"onClick={()=>{ window.location.href = 'write-a-review-4';}}>Next step</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview3;
