import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";
import { useAppProvider } from "../../Contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const modalRef = useRef();
  const {
    addressLine1,
    setAddressLine1,
    addressLine2,
    setAddressLine2,
    townCity,
    setTownCity,
    country,
    setCountry,
    postCode,
    setPostCode
  } = useAppProvider();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeModal]);

  return (
    <div className="modalBackground">
      <div className="modalContainer" ref={modalRef}>
        <div className="title">
          <h3>Let's start with the address</h3>
        </div>
        <div className="form">
          <div className="row search-bar">
            <input
              type="text"
              className="text-input search-input"
              placeholder="Enter address starting from postcode"
            />
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Address line 1</p>
              <input
                type="text"
                className="text-input"
                placeholder="Street"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />
            </div>
            <div className="col">
              <p htmlFor="">Address line 2 (Optional)</p>
              <input
                type="text"
                className="text-input"
                placeholder="Neighborhood"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Town/City</p>
              <input
                type="text"
                className="text-input"
                value={townCity}
                onChange={(e) => setTownCity(e.target.value)}
              />
            </div>
            <div className="col">
              <p htmlFor="">Country</p>
              <input
                type="text"
                className="text-input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="col">
              <p htmlFor="">Postcode</p>
              <input
                type="text"
                className="text-input"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="write-a-review"
                onClick={() => {
                  //setOpenModal(true);
                  navigate("/write-a-review-1");
                }}
              >
                Write a review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
