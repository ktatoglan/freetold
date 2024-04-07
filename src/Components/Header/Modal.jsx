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
        <div className="form">Modal Write a Review Form</div>
      </div>
    </div>
  );
};

export default Modal;
