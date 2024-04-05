import { useState } from "react";
import "../../Style/Modal.css";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
