import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";
import { useAppProvider } from "../../Contexts/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginModal = ({ }) => {
  const LoginModalRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl, userId, setUserId, setOpenLoginModal, setOpenRegisterModal } = useAppProvider();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${serverUrl}/login`, {
        email,
        password,
      });
      setUserId(response.data.userId);
      toast.success(response.data.message);
      setOpenLoginModal();
    } catch (error) {
      console.error("Error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during login.";
      toast.error(errorMessage);
    }
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        LoginModalRef.current &&
        !LoginModalRef.current.contains(event.target)
      ) {
        setOpenLoginModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setOpenLoginModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    disableScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      enableScroll();
    };
  }, [setOpenLoginModal]);

  return (
    <div className="modalBackground">
      <div className="modalContainer loginModal" ref={LoginModalRef}>
        <div className="title">
          <h3>Log into your account</h3>
        </div>
        <div className="login-buttons row">
          <div className="col">
            <div className="login-google-div">
              <button className="google-login" onClick={()=>{toast.error("Coming soon, please register manually!")}}>
                <div className="logo">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3503 11.1H12.1803V13.83H18.6903C18.3603 17.64 15.1903 19.27 12.1903 19.27C8.36027 19.27 5.00027 16.25 5.00027 12C5.00027 7.9 8.20027 4.73 12.2003 4.73C15.2903 4.73 17.1003 6.7 17.1003 6.7L19.0003 4.72C19.0003 4.72 16.5603 2 12.1003 2C6.42027 2 2.03027 6.8 2.03027 12C2.03027 17.05 6.16027 22 12.2503 22C17.6003 22 21.5003 18.33 21.5003 12.91C21.5003 11.76 21.3503 11.1 21.3503 11.1Z"
                      fill="#0A2446"
                    />
                  </svg>
                </div>
                <p>Continue with Google</p>
              </button>
            </div>
          </div>
        </div>
        <div className="or">
          <p>or</p>
          <hr />
        </div>
        <div className="form">
          <div className="row">
            <div className="col">
              <p htmlFor="">Email address</p>
              <input
                type="email"
                className="text-input"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Password</p>
              <input
                type="password"
                className="text-input"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                Should include uppercase letter, number and 8 characters or more
              </p>
            </div>
          </div>
          <div className="row m-0">
            <div className="col">
              <div className="toggle-group">
                <input type="checkbox" id="switch" />
                <label htmlFor="switch">Toggle</label>
                <p>Stay signed in</p>
              </div>
              <button
                onClick={() => {
                  setOpenRegisterModal(true);
                  setOpenLoginModal(false);
                }}
              >Register</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="write-a-review"
                onClick={() => {
                  handleLogin();
                }}
              >
                Continue with Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
