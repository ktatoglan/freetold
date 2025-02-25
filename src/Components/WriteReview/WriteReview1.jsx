import React, {useEffect} from "react";
import "../../Style/WriteReview.css";
import { useAppProvider } from "../../Contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Toastify import

function WriteReview1() {
  const {
    addressLine1,
    addressLine2,
    postCode,
    moveInDate,
    setMoveInDate,
    tenancyPeriod,
    setTenancyPeriod,
    rentDuration,
    setRentDuration,
    isItSharingFlat,
    setIsItSharingFlat,
    peopleNumberLivingAtHome,
    setPeopleNumberLivingAtHome,
    futureRentersContactMe,
    setFutureRentersContactMe,
    userId
  } = useAppProvider();
  const navigate = useNavigate();

  const handleFocus = (setter) => (e) => {
    if (e.target.value === "0") {
      setter("");
    }
  };

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, []);

  // Başlangıç: Eklenen validasyon kodu
  const validateFields = () => {
    let isValid = true;

    // Move-in Date Validation
    if (!moveInDate.month || !moveInDate.year) {
      isValid = false;
      toast.error("Please select your move-in date!");
      document
        .querySelectorAll("select[name='month'], select[name='year']")
        .forEach((el) => {
          el.classList.add("error"); // Hata sınıfını ekle
        });
    } else {
      document
        .querySelectorAll("select[name='month'], select[name='year']")
        .forEach((el) => {
          el.classList.remove("error"); // Hata sınıfını kaldır
        });
    }

    // Rent Duration Validation
    const rentDurationInput = document.querySelector("input[type='text']");
    if (!rentDuration) {
      isValid = false;
      toast.error("Please enter the total tenancy period!");
      rentDurationInput.classList.add("error"); // Hata sınıfını ekle
    } else {
      rentDurationInput.classList.remove("error"); // Hata sınıfını kaldır
    }

    // People Number Validation
    const peopleCounter = document.querySelector(".counter");
    if (peopleNumberLivingAtHome < 1) {
      isValid = false;
      toast.error(
        "The number of people living in the property must be at least 1!"
      );
      peopleCounter.classList.add("error"); // Hata sınıfını ekle
    } else {
      peopleCounter.classList.remove("error"); // Hata sınıfını kaldır
    }

    return isValid;
  };

  const handleNextStep = () => {
    if (validateFields()) {
      navigate("/write-a-review-2");
    }
  };
  const handlePreviousStep = () => {
    navigate("/write-a-review-0");
  };
  // Bitiş: Eklenen validasyon kodu

  return (
    <div className="container">
      <div className="review-flow wr1">
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
              <li className="progress active"></li>
              <li className="progress"></li>
              <li className="progress"></li>
              <li className="progress"></li>
              <li className="progress"></li>
            </ul>
          </div>
          <div className="header-step">
            <p>Step 1</p>
          </div>
        </div>
        <div className="review-content">
          <div className="row">
            <h3>Let's understand your current situation</h3>
          </div>
          <div className="row">
            <div className="col">
              <p className="input-title">When did you move in?</p>
              <div className="row mt-small">
                <select
                  name="month"
                  className="mbl-bottom-gap-small"
                  value={moveInDate.month}
                  onChange={(e) =>
                    setMoveInDate({ ...moveInDate, month: e.target.value })
                  }
                >
                  <option value="">Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select
                  name="year"
                  value={moveInDate.year}
                  onChange={(e) =>
                    setMoveInDate({ ...moveInDate, year: e.target.value })
                  }
                >
                  <option value="">Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                </select>
              </div>
            </div>
            <div className="col">
              <p className="input-title">What is the total tenancy period?</p>
              <div className="row mt-small">
                <input
                  type="text"
                  className="mbl-bottom-gap-small"
                  value={rentDuration}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      // Sadece sayılar
                      setRentDuration(value);
                    }
                  }}
                  onFocus={handleFocus(setRentDuration)}
                />
                <select
                  name="year"
                  value={tenancyPeriod.year}
                  onChange={(e) =>
                    setTenancyPeriod({
                      ...tenancyPeriod,
                      period: e.target.value,
                    })
                  }
                >
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sharing">
              <p className="title">Are you sharing?</p>
              <div className="toggle-group">
                <input
                  type="checkbox"
                  id="is-sharing"
                  checked={isItSharingFlat}
                  onChange={(e) => setIsItSharingFlat(e.target.checked)}
                />
                <label htmlFor="is-sharing">Toggle</label>
                <p className="is-sharing-text">
                  Yes, It's a sharing flat{" "}
                  <a href="#">Invite your flat mate to share a review!</a>
                </p>
              </div>
              <p className="title">
                Including you, how many people are living in this property?
              </p>
              <div className="counter-group">
                <button
                  className="decr"
                  onClick={() =>
                    setPeopleNumberLivingAtHome(
                      Math.max(1, peopleNumberLivingAtHome - 1)
                    )
                  }
                >
                  -
                </button>
                <p className="counter">{peopleNumberLivingAtHome}</p>
                <button
                  className="incr"
                  onClick={() =>
                    setPeopleNumberLivingAtHome(peopleNumberLivingAtHome + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="future-contact">
              <p className="contact-title input-title">
                Would you be open to future renters reaching you for advice or
                questions?
              </p>
              <p className="contact-text">You can stay anonymous</p>
              <div className="toggle-group">
                <input
                  type="checkbox"
                  id="future-renters"
                  checked={futureRentersContactMe}
                  onChange={(e) => setFutureRentersContactMe(e.target.checked)}
                />
                <label htmlFor="future-renters">Toggle</label>
                <p>Future renters can contact me</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="buttons">
              <button className="pre-step" onClick={handlePreviousStep}>
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

export default WriteReview1;
