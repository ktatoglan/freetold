import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";

const RegisterModal = ({ closeRegisterModal }) => {
  const RegisterModalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        RegisterModalRef.current &&
        !RegisterModalRef.current.contains(event.target)
      ) {
        closeRegisterModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeRegisterModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeRegisterModal]);

  return (
    <div className="modalBackground">
      <div className="modalContainer registerModal" ref={RegisterModalRef}>
        <div className="title">
          <h3>Create an account</h3>
        </div>
        <div className="form">
          <div className="row">
            <div className="col">
              <p htmlFor="">Email address</p>
              <input
                type="email"
                className="text-input"
                placeholder="Email adress"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">What should we call you?</p>
              <input type="text" className="text-input" placeholder="Alena" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Where are you staying now?</p>
              <input type="text" className="text-input" placeholder="Rent" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Your Current Postcode</p>
              <input type="text" className="text-input" placeholder="Address" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Password</p>
              <input
                type="password"
                className="text-input"
                placeholder="******"
              />
              <p>
                Should include uppercase letter, number and 8 characters or more
              </p>
            </div>
          </div>
          <div className="row m-0">
            <div className="col">
              <div className="toggle-group">
                <input type="checkbox" id="switch" />
                <label for="switch">Toggle</label>
                <p>Stay signed in</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                By proceeding, you agree to our Terms of Use and confirm you
                have read our Privacy and Cookie Statement. This site is
                protected by reCAPTCHA and the Google Privacy Policy and Terms
                of Service apply.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="write-a-review"
                onClick={() => {
                  setOpenRegisterModal(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
