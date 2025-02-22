import React, { useState } from "react";
import "../../Style/WriteReview.css";
import { useAppProvider } from "../../Contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function WriteReview5() {
  const {
    addressLine1,
    addressLine2,
    postCode,
    sendReview,
    perceptionNeighborsLevel,
    setPerceptionNeighborsLevel,
    noiseNeighborsLevel,
    setNoiseNeighborsLevel,
    parkingScore,
    setParkingScore,
    trafficScore,
    setTrafficScore,
    safetyConcerns,
    setSafetyConcerns,
    agreeCheckbox,
    setAgreeCheckbox,
    anonymous,
    setAnonymous
  } = useAppProvider();
  const navigate = useNavigate();

  const validateFields = () => {
    let isValid = true;

    // Rating Alanlarının Kontrolü
    const ratings = [
      {
        value: perceptionNeighborsLevel,
        id: "neighbor",
        name: "Perception about neighbors",
      },
      { value: noiseNeighborsLevel, id: "sound", name: "Noise level" },
      { value: parkingScore, id: "parking", name: "Parking" },
      { value: trafficScore, id: "traffic", name: "Traffic" },
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

    // Textarea Kontrolü
    const textareaElement = document.querySelector(".custom-textarea");
    if (!safetyConcerns.trim()) {
      isValid = false;
      toast.error("Safety concerns cannot be empty!");
      if (textareaElement) textareaElement.classList.add("error");
    } else {
      if (textareaElement) textareaElement.classList.remove("error");
    }

    // Checkbox Kontrolü
    const checkboxElement = document.getElementById("agree-checkbox");
    if (!agreeCheckbox) {
      isValid = false;
      toast.error("You must agree to the Terms and Conditions!");
      if (checkboxElement) checkboxElement.classList.add("error");
    } else {
      if (checkboxElement) checkboxElement.classList.remove("error");
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (validateFields()) {
      const response = await sendReview();
      if (response) {
        toast.success("Review submitted successfully!");
        setTimeout(() => {
          window.location.href = `/property-profile/review/${response.review_id}`;
        }, 2000);
      } else {
        alert("There was an error submitting the review. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="review-flow wr5">
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
                <div className="rating-container neighbor">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`neighbor${index + 1}`}
                        name="neighbor-container"
                        value={index + 1}
                        checked={perceptionNeighborsLevel === 5 - index}
                        onClick={() => setPerceptionNeighborsLevel(5 - index)}
                        onChange={() => {}}
                      />
                      <label
                        htmlFor={`neighbor${index + 1}`}
                        className={`neighbor-${index + 1}`}
                      ></label>
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
                <div className="rating-container sound">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`sound${index + 1}`}
                        name="sound-container"
                        value={index + 1}
                        checked={noiseNeighborsLevel === 5 - index}
                        onClick={() => setNoiseNeighborsLevel(5 - index)}
                        onChange={() => {}}
                      />
                      <label
                        htmlFor={`sound${index + 1}`}
                        className={`sound-${index + 1}`}
                      ></label>
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
                <div className="rating-container parking">
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
                <div className="rating-container traffic">
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
                  id="safety-concerns"
                  className="custom-textarea"
                  placeholder="Theft, poor street lighting, speeding etc."
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
                I agree to{" "}
                <a
                  href="/page/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>{" "}
                and that this review is an honest and accurate account of my
                experience ....
              </p>

              <p className="approval">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree-checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                />
                Share this review anonymously
              </p>
            </div>
          </div>

          <div className="row"></div>

          <div className="row">
            <div className="buttons">
              <button
                className="pre-step"
                onClick={() => {
                  navigate("/write-a-review-4");
                }}
              >
                Previous step
              </button>
              <button className="next-step" onClick={handleSubmit}>
                Submit the review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview5;
