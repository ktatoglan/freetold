import React from "react";
import Logo from "../../assets/img/logo-white.svg";
import User from "../../assets/img/user.png";

const Header = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
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
            <a href="#" className="log-in"><img src={User} alt="user"></img>Log In</a>
          </li>
          <li>
            <button className="sign-up">Sign Up</button>
          </li>
          <li>
            <button className="write-a-review">Write a review</button>
          </li>
        </ul>
      </nav>
      <button className="hamburger-menu">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </header>
  );
};

export default Header;
