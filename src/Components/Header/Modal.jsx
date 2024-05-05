import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";

const Modal = ({ closeModal }) => {
  const modalRef = useRef();

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
              <p htmlFor="">Adress line 1</p>
              <input type="text" className="text-input" placeholder="Street" />
            </div>
            <div className="col">
              <p htmlFor="">Adress line 2(Optional)</p>
              <input
                type="text"
                className="text-input"
                placeholder="Neighborhood"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Town/City</p>
              <input type="text" className="text-input" />
            </div>
            <div className="col">
              <p htmlFor="">Country</p>
              <input type="text" className="text-input" />
            </div>
            <div className="col">
              <p htmlFor="">Postcode</p>
              <input type="text" className="text-input" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="write-a-review"
                onClick={() => {
                  //setOpenModal(true);
                  window.location.href = "write-a-review-1";1
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
