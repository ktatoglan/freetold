import { useState } from "react";
import "../../Style/WriteReview.css";

function WriteReview4() {
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
              <li className="progress active"></li>
              <li className="progress"></li>
            </ul>
          </div>
          <div className="header-step">
            <p>Step 4</p>
          </div>
        </div>
        <div className="review-content">
          <div className="row">
            <h3>Add more details</h3>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">How well does the house heat up?</p>
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
              <p className="input-title">Is it a well-lit home?</p>
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
              <p className="input-title">How is your internet connection?</p>
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
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.34991 0.999906C8.52991 0.829906 9.77991 2.11991 10.1399 3.89991C10.4999 5.66991 9.84991 7.24991 8.66991 7.42991C7.49991 7.60991 6.23991 6.31991 5.86991 4.53991C5.49991 2.76991 6.16991 1.18991 7.34991 0.999906ZM14.4999 0.999906C15.6899 1.18991 16.3499 2.76991 15.9999 4.53991C15.6199 6.31991 14.3699 7.60991 13.1899 7.42991C11.9999 7.24991 11.3499 5.66991 11.7199 3.89991C12.0799 2.11991 13.3299 0.829906 14.4999 0.999906ZM1.99991 5.59991C3.13991 5.10991 4.68991 5.99991 5.49991 7.54991C6.25991 9.12991 5.99991 10.7899 4.86991 11.2799C3.73991 11.7699 2.19991 10.8899 1.40991 9.31991C0.619906 7.74991 0.899906 6.07991 1.99991 5.59991ZM19.9999 5.59991C21.0999 6.07991 21.3799 7.74991 20.5899 9.31991C19.7999 10.8899 18.2599 11.7699 17.1299 11.2799C15.9999 10.7899 15.7399 9.12991 16.4999 7.54991C17.3099 5.99991 18.8599 5.10991 19.9999 5.59991ZM18.3299 16.3799C18.3699 17.3199 17.6499 18.3599 16.7899 18.7499C14.9999 19.5699 12.8799 17.8699 10.8899 17.8699C8.89991 17.8699 6.75991 19.6399 4.99991 18.7499C3.99991 18.2599 3.30991 16.9599 3.43991 15.8799C3.61991 14.3899 5.40991 13.5899 6.46991 12.4999C7.87991 11.0899 8.87991 8.43991 10.8899 8.43991C12.8899 8.43991 13.9499 11.0499 15.2999 12.4999C16.4099 13.7199 18.2599 14.7499 18.3299 16.3799Z"
                    fill="#0A2446"
                  />
                </svg>{" "}
                Is it pet-friendly?
              </p>
              <div className="row mt-small mb-small">
                <div className="radio-group p-0">
                  <input type="radio" name="pet-friendly" id="pet-yes" />
                  <label htmlFor="pet-yes">Yes</label>
                  <input type="radio" name="pet-friendly" id="pet-no" />
                  <label htmlFor="pet-no">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">
                Is there anything that needs to be fixed?
              </p>

              <div className="input-container">
                <textarea
                  class="custom-textarea"
                  placeholder="Such as appliances, windows, etc"
                  rows={4}
                ></textarea>
                <div className="character-counter hidden"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">How quickly did the owner respond? </p>
              <div className="row mt-small mb-small">
                <div class="rating-container mail">
                  <input type="radio" id="mail5" name="rating" value="5" />
                  <label for="mail5"></label>
                  <input type="radio" id="mail4" name="rating" value="4" />
                  <label for="mail4"></label>
                  <input type="radio" id="mail3" name="rating" value="3" />
                  <label for="mail3"></label>
                  <input type="radio" id="mail2" name="rating" value="2" />
                  <label for="mail2"></label>
                  <input type="radio" id="mail1" name="rating" value="1" />
                  <label for="mail1"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">Do you have any health concerns about the property?</p>

              <div className="input-container">
                <textarea
                  class="custom-textarea"
                  placeholder="Mold, leaking, etc."
                  rows={4}
                ></textarea>
                <div className="character-counter hidden"></div>
              </div>
            </div>
          </div>
          <div className="row"></div>

          <div className="row">
            <div className="buttons">
              <button className="pre-step">Previous step</button>
              <button className="next-step" onClick={()=>{ window.location.href = 'write-a-review-5';}}>Next step</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview4;
