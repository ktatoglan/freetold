import React, { useState } from "react";
import "../../Style/WriteReview.css";
import { useAppProvider } from "../../Contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Toastify import

function WriteReview4() {
  const {
    addressLine1,
    addressLine2,
    postCode,
    heatUpLevel,
    setHeatUpLevel,
    wellLitLevel,
    setWellLitLevel,
    internetConnectionLevel,
    setInternetConnectionLevel,
    isItPetFriendly,
    setIsItPetFriendly,
    anythingToBeFixed,
    setAnythingToBeFixed,
    ownerRespondScore,
    setOwnerRespondScore,
    healthConcerns,
    setHealthConcerns,
  } = useAppProvider();

  const [reviewScore, setReviewScore] = useState(0);
  const navigate = useNavigate();

  const validateFields = () => {
    let isValid = true;

    // Rating Alanlarının Kontrolü
    const ratings = [
      { value: heatUpLevel, id: "heat", name: "Heat Up Level" },
      { value: wellLitLevel, id: "lit", name: "Well-Lit Level" },
      {
        value: internetConnectionLevel,
        id: "web",
        name: "Internet Connection",
      },
      { value: ownerRespondScore, id: "mail", name: "Owner Response Score" },
    ];

    ratings.forEach((rating) => {
      const container = document.querySelector(
        `.rating-container.${rating.id}`
      );
      if (!rating.value) {
        isValid = false;
        toast.error(`Please rate the ${rating.name}!`);
        if (container) container.classList.add("error");
      } else {
        if (container) container.classList.remove("error");
      }
    });

    // Textarea Alanlarının Kontrolü
    const textareas = [
      {
        value: anythingToBeFixed,
        id: "anything-to-be-fixed",
        name: "Anything to be fixed",
      },
      { value: healthConcerns, id: "health-concerns", name: "Health Concerns" },
    ];

    textareas.forEach((textarea) => {
      const inputElement = document.getElementById(textarea.id);
      if (!textarea.value.trim()) {
        isValid = false;
        toast.error(`${textarea.name} cannot be empty!`);
        if (inputElement) inputElement.classList.add("error");
      } else {
        if (inputElement) inputElement.classList.remove("error");
      }
    });

    return isValid;
  };

  const handleNextStep = () => {
    if (validateFields()) {
      navigate("/write-a-review-5");
    }
  };

  return (
    <div className="container">
      <div className="review-flow wr4">
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
                <div className="rating-container heat">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`heat${index + 1}`}
                        name="heat-container"
                        value={index + 1}
                        checked={heatUpLevel === 5 - index}
                        onClick={() => setHeatUpLevel(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`heat${index + 1}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <p className="input-title">Is it a well-lit home?</p>
              <div className="row mt-small mb-small">
                <div className="rating-container lit">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`lit${index + 1}`}
                        name="lit-container"
                        value={index + 1}
                        checked={wellLitLevel === 5 - index}
                        onClick={() => setWellLitLevel(5 - index)}
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
              <p className="input-title">How is the internet connection? </p>
              <div className="row mt-small mb-small">
                <div className="rating-container web">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`web${index + 1}`}
                        name="web-container"
                        value={index + 1}
                        checked={internetConnectionLevel === 5 - index}
                        onClick={() => setInternetConnectionLevel(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`web${index + 1}`}></label>
                    </React.Fragment>
                  ))}
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
                  <input
                    type="radio"
                    name="pet-friendly"
                    id="pet-yes"
                    checked={isItPetFriendly}
                    onClick={() => setIsItPetFriendly(true)}
                    onChange={() => {}}
                  />
                  <label htmlFor="pet-yes">Yes</label>
                  <input
                    type="radio"
                    name="pet-friendly"
                    id="pet-no"
                    checked={!isItPetFriendly}
                    onClick={() => setIsItPetFriendly(false)}
                    onChange={() => {}}
                  />
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
                  id="anything-to-be-fixed"
                  className="custom-textarea"
                  placeholder="Such as appliances, windows, etc"
                  rows={4}
                  value={anythingToBeFixed}
                  onChange={(e) => setAnythingToBeFixed(e.target.value)}
                ></textarea>
                <div className="character-counter hidden"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">How quickly did the owner respond? </p>
              <div className="row mt-small mb-small">
                <div className="rating-container mail">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`mail${index + 1}`}
                        name="mail-container"
                        value={index + 1}
                        checked={ownerRespondScore === 5 - index}
                        onClick={() => setOwnerRespondScore(5 - index)}
                        onChange={() => {}}
                      />
                      <label htmlFor={`mail${index + 1}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content">
              <p className="contact-title input-title">
                Do you have any health concerns about the property?
              </p>

              <div className="input-container">
                <textarea
                  id="health-concerns"
                  className="custom-textarea"
                  placeholder="Mold, leaking, etc."
                  rows={4}
                  value={healthConcerns}
                  onChange={(e) => setHealthConcerns(e.target.value)}
                ></textarea>
                <div className="character-counter hidden"></div>
              </div>
            </div>
          </div>
          <div className="row"></div>

          <div className="row">
            <div className="buttons">
              <button
                className="pre-step"
                onClick={() => {
                  navigate("/write-a-review-3");
                }}
              >
                Previous step
              </button>
              <button className="next-step" onClick={handleNextStep}>
                Next step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview4;
