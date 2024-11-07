import { useEffect, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo-white.svg";
import User from "../../assets/img/user.png";
import Modal from "./Modal";
import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Register/RegisterModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ref for detecting clicks outside the menu
  const menuRef = useRef(null);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src={Logo}
            alt="Freetold"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
        <nav
          ref={menuRef}
          className={`menu ${isMobileMenuOpen ? "open" : ""}`}
        >
          {/* Close button for mobile menu */}
          <button
            className="close-menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            {/*  
            <li>
              <a
                href="#"
                className="log-in"
                onClick={() => {
                  setOpenLoginModal(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <img src={User} alt="user" /> Log In
              </a>
            </li>
            <li>
              <button
                className="sign-up"
                onClick={() => {
                  setOpenRegisterModal(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </li>
            {window.location.href.includes("write-a-review") ? null : (
              <li>
                <button
                  className="write-a-review"
                  onClick={() => {
                    window.location.href = "/write-a-review-0";
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Write a review
                </button>
              </li>
            )}
              */}
          </ul>
        </nav>
        {/* <button
          className="online-login"
          onClick={() => {
            setOpenLoginModal(true);
          }}
        >
          <img src={User} alt="user" />
        </button> */}
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </header>
      {openModal && <Modal closeModal={setOpenModal} />}
      {openLoginModal && <LoginModal closeLoginModal={setOpenLoginModal} />}
      {openRegisterModal && (
        <RegisterModal closeRegisterModal={setOpenRegisterModal} />
      )}
    </>
  );
};

export default Header;
