import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col">
          <ul className="footer-links">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>{" "}
        </div>
        <div className="col">
          <span className="copyright"> Copyright © {new Date().getFullYear()}</span>
          <ul className="footer-social">
            {/* Social links */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
