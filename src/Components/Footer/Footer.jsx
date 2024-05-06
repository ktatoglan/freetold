import {useEffect} from "react";

const Footer = () => {
  useEffect(() => {
    const classExists = document.querySelector('.home-search') == null;
    if (!classExists) return
    document.querySelector('.footer').classList.add('unset-position')
  }, []); // Daha sonra düzeltilecek 
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
