import { useState } from "react";
import "../../Style/WriteReview.css";

function WriteReview5() {
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
                <div class="rating-container heat">
                  <input type="radio" id="heat5" name="rating" value="5" />
                  <label htmlFor="heat5"></label>
                  <input type="radio" id="heat4" name="rating" value="4" />
                  <label htmlFor="heat4"></label>
                  <input type="radio" id="heat3" name="rating" value="3" />
                  <label htmlFor="heat3"></label>
                  <input type="radio" id="heat2" name="rating" value="2" />
                  <label htmlFor="heat2"></label>
                  <input type="radio" id="heat1" name="rating" value="1" />
                  <label htmlFor="heat1"></label>
                </div>
              </div>
            </div>
            <div className="col">
              <p className="input-title">
                How would you describe the noise level in the neighborhood?
              </p>
              <div className="row mt-small mb-small">
                <div class="rating-container lit">
                  <input type="radio" id="lit5" name="rating" value="5" />
                  <label for="lit5"></label>
                  <input type="radio" id="lit4" name="rating" value="4" />
                  <label for="lit4"></label>
                  <input type="radio" id="lit3" name="rating" value="3" />
                  <label for="lit3"></label>
                  <input type="radio" id="lit2" name="rating" value="2" />
                  <label for="lit2"></label>
                  <input type="radio" id="lit1" name="rating" value="1" />
                  <label for="lit1"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">How easy is it to find parking?</p>
              <div className="row mt-small mb-small">
                <div class="rating-container web">
                  <input type="radio" id="web5" name="rating" value="5" />
                  <label for="web5"></label>
                  <input type="radio" id="web4" name="rating" value="4" />
                  <label for="web4"></label>
                  <input type="radio" id="web3" name="rating" value="3" />
                  <label for="web3"></label>
                  <input type="radio" id="web2" name="rating" value="2" />
                  <label for="web2"></label>
                  <input type="radio" id="web1" name="rating" value="1" />
                  <label for="web1"></label>
                </div>
              </div>
            </div>
            <div className="col">
              <p className="input-title">
                How’s the traffic around the property?
              </p>
              <div className="row mt-small mb-small">
                <div class="rating-container web">
                  <input type="radio" id="web5" name="rating" value="5" />
                  <label for="web5"></label>
                  <input type="radio" id="web4" name="rating" value="4" />
                  <label for="web4"></label>
                  <input type="radio" id="web3" name="rating" value="3" />
                  <label for="web3"></label>
                  <input type="radio" id="web2" name="rating" value="2" />
                  <label for="web2"></label>
                  <input type="radio" id="web1" name="rating" value="1" />
                  <label for="web1"></label>
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
                  class="custom-textarea"
                  placeholder="Whatever"
                  rows={4}
                ></textarea>
                <div className="character-counter hidden"></div>
              </div>
              <p className="approval">
              <input type="checkbox" name="agree" id="agree-checkbox" />
              I agree to .... and that this review is an honest and accurate account of my experience ....
              </p>
            </div>
          </div>

          <div className="row"></div>

          <div className="row">
            <div className="buttons">
              <button className="pre-step" onClick={()=>{ window.location.href = 'write-a-review-4';}}>Previous step</button>
              <button className="next-step"onClick={()=>{ window.location.href = '/';}}>Submit the review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview5;
