import { useEffect, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo-white.svg";
import User from "../../assets/img/user.svg";
import Modal from "./Modal";
import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Register/RegisterModal";
import { toast } from "react-toastify";
import { useAppProvider } from "../../Contexts/AppContext";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [specialClass, setSpecialClass] = useState("");
  const { userId, setUserId } = useAppProvider();
  // Ref for detecting clicks outside the menu
  const menuRef = useRef(null);

  useEffect(() => {
    console.log("Header mounted");
    //checek if there is a referer_id in the url
    const urlParams = new URLSearchParams(window.location.search);
    const referer_id = urlParams.get("referer_id");
    if (referer_id && !userId) {
      localStorage.setItem("referer_id", referer_id);
      setOpenRegisterModal(true);
    }

  }, []);

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

  useEffect(() => {
    if (
      window.location.pathname.substring(0, 17) == "/property-profile" &&
      window.location.pathname.substring(0, 24) != "/property-profile/review"
    ) {
      setSpecialClass("property-profile-header");
    } else {
      setSpecialClass("");
    }
  }, [window.location.pathname]);

  return (
    <>
      <header className={"header " + specialClass}>
        <div className="logo">
          <img
            src={Logo}
            alt="Freetold"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
        <nav ref={menuRef} className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          {/* Close button for mobile menu */}
          <button
            className="close-menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          <ul>
            <li>
              <a href="/blog/meet-freetold-a-new-era-of-openness-in-the-housing-market">
                About
              </a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>

            {window.location.href.includes("write-a-review") ? null : (
              <li>
                <button
                  className="write-a-review"
                  onClick={() => {
                    if (!userId) {
                      toast.error("Please login to write a review");
                      return;
                    }
                    window.location.href = "/write-a-review-0";
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Write a review
                </button>
              </li>
            )}

            {!userId ? (
              <>
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
              </>
            ) : (
              <>
                <li style={{display:"inline-flex"}}>
                  <img
                    className="logged-in"
                    src={User}
                    alt="user"
                    onClick={() => {
                      window.location.href = "/user-profile";
                      setIsMobileMenuOpen(false);
                    }}
                  />
                </li>
                <li>
                  <button
                    className="logout"
                    onClick={() => {
                      toast.success("Logged out successfully");
                      setUserId(null);
                    }}
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
        {
          <button
            className="online-login"
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            <img src={User} alt="user" />
          </button>
        }
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
