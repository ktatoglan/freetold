import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/img/logo-white.svg";
import User from "../../assets/img/user.png";
import Modal from "./Modal";
import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Register/RegisterModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Freetold"></img>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a
                href="#"
                className="log-in"
                onClick={() => {
                  setOpenLoginModal(true);
                }}
              >
                <img src={User} alt="user"></img>Log In
              </a>
            </li>
            <li>
              <button
                className="sign-up"
                onClick={() => {
                  setOpenRegisterModal(true);
                }}
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                className="write-a-review"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Write a review
              </button>
            </li>
          </ul>
        </nav>
        <button className="hamburger-menu">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </header>
      {openModal && <Modal closeModal={setOpenModal} />}
      {openLoginModal && <LoginModal closeLoginModal={setOpenLoginModal} />}
      {openRegisterModal && <RegisterModal closeRegisterModal={setOpenRegisterModal} />}
    </>
  );
};

export default Header;
