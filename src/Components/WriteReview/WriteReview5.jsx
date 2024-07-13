import React, { useState } from "react";
import "../../Style/WriteReview.css";
import { useAppProvider } from "../../Contexts/AppContext";

function WriteReview5() {
  const { sendReview, perceptionNeighborsLevel, setPerceptionNeighborsLevel, noiseNeighborsLevel, setNoiseNeighborsLevel, parkingScore, setParkingScore, trafficScore, setTrafficScore, safetyConcerns, setSafetyConcerns, agreeCheckbox, setAgreeCheckbox } = useAppProvider();

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
              Glan Yr Afon Road, Swansea SA2
            </p>
          </div>
          <div className="header-progress-bar">
            <ul>
              <li className="progress"></li>
              <li className="progress"></li>
              <li className="progress"></li>
              <li className="progress"></li>
              <li className="progress active"></li>
            </ul>
          </div>
          <div className="header-step">
            <p>Step 5</p>
          </div>
        </div>
        <div className="review-content">
          <div className="row">
            <h3>Tell us about the neighborhood </h3>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">
                What’s your perception about the neighbors?
              </p>
              <div className="row mt-small mb-small">
                <div className="rating-container heat">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`heat${index + 1}`}
                        name="heat-container"
                        value={index + 1}
                        checked={perceptionNeighborsLevel === 5 - index}
                        onClick={() => setPerceptionNeighborsLevel(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`heat${index + 1}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <p className="input-title">
                How would you describe the noise level in the neighborhood?
              </p>
              <div className="row mt-small mb-small">
                <div className="rating-container lit">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`lit${index + 1}`}
                        name="lit-container"
                        value={index + 1}
                        checked={noiseNeighborsLevel === 5 - index}
                        onClick={() => setNoiseNeighborsLevel(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`lit${index + 1}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">How easy is it to find parking?</p>
              <div className="row mt-small mb-small">
                <div className="rating-container web">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`parking${index + 1}`}
                        name="parking-container"
                        value={index + 1}
                        checked={parkingScore === 5 - index}
                        onClick={() => setParkingScore(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`parking${index + 1}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <p className="input-title">
                How’s the traffic around the property?
              </p>
              <div className="row mt-small mb-small">
                <div className="rating-container web">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`traffic${index + 1}`}
                        name="traffic-container"
                        value={index + 1}
                        checked={trafficScore === 5 - index}
                        onClick={() => setTrafficScore(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`traffic${index + 1}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title mb-small">
                Are there any safety concerns in the surrounding area?
              </p>

              <div className="input-container">
                <textarea
                  className="custom-textarea"
                  placeholder="Whatever"
                  rows={4}
                  value={safetyConcerns}
                  onChange={(e) => setSafetyConcerns(e.target.value)}
                ></textarea>
                <div className="character-counter hidden"></div>
              </div>
              <p className="approval">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree-checkbox"
                  checked={agreeCheckbox}
                  onChange={(e) => setAgreeCheckbox(e.target.checked)}
                />
                I agree to .... and that this review is an honest and accurate account of my experience ....
              </p>
            </div>
          </div>

          <div className="row"></div>

          <div className="row">
            <div className="buttons">
              <button className="pre-step" onClick={() => { window.location.href = 'write-a-review-4'; }}>Previous step</button>
              <button className="next-step" onClick={() => { /*</div>window.location.href = '/';*/ sendReview(); }}>Submit the review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview5;
