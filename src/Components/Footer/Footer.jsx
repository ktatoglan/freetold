import {useEffect} from "react";
import FooterSocials from "./FooterSocials";

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
              <a href="/page/privacy-policy">Privacy</a>
            </li>
            {/* <li>
              <a href="#">Cookies</a>
            </li> */}
            <li>
              <a href="/page/faq">FAQ</a>
            </li>
            <li>
              <a href="/blog/meet-freetold-a-new-era-of-openness-in-the-housing-market">About</a>
            </li>
            <li>
              <a href="/contact-us">Contact</a>
            </li>
          </ul>{" "}
        </div>
        <div className="col">
          <span className="copyright"> Copyright © {new Date().getFullYear()}</span>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
