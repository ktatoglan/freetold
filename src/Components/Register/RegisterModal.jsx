import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";
import { toast } from "react-toastify";
import { useAppProvider } from "../../Contexts/AppContext";
import axios from "axios";

const RegisterModal = ({ }) => {
  const registerModalRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { serverUrl, setUserId, setOpenLoginModal, setOpenRegisterModal  } = useAppProvider();
  const refererId = localStorage.getItem("referer_id");

  const resetForm = () => {
    setEmail("");
    setName("");
    setPassword("");
    setRePassword("");
  };

  const validateForm = () => {
    if (!email || !name || !password || !rePassword) {
      toast.error("All fields must be filled.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&._-]{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return false;
    }

    if (password !== rePassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const response = await axios.post(`${serverUrl}/register`, {
        email,
        name,
        password,
        refererId,
      });
      toast.success(response.data.message);
      setUserId(response.data.userId);
      resetForm();
      setOpenRegisterModal();

      localStorage.removeItem("referer_id");
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.delete("referer_id");
      window.history.replaceState({}, "", `${window.location.pathname}`);
      setTimeout(() => {
        window.location.href = "/write-a-review-0";
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during registration.";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        registerModalRef.current &&
        !registerModalRef.current.contains(event.target)
      ) {
        setOpenRegisterModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setOpenRegisterModal();
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    disableScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      enableScroll();
    };
  }, [setOpenRegisterModal]);

  return (
    <div className="modalBackground">
      <div className="modalContainer registerModal" ref={registerModalRef}>
        <div className="title">
          <h3>Create an account</h3>
        </div>
        <div className="login-buttons row">
          <div className="col">
            <button className="google-login">
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
        <div className="or">
          <p>or</p>
          <hr />
        </div>
        <div className="form">
          <div className="row">
            <div className="col">
              <p>Email address</p>
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
              <p>What should we call you?</p>
              <input
                type="text"
                className="text-input"
                placeholder="Alena"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                className="text-input"
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                className="text-input"
                placeholder="Please re-enter your password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label>Show Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="pw-info">
                Should include uppercase letter, lowercase letter, number, and a
                special character.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="register-agree">
                By proceeding, you agree to our Terms of Use and confirm you
                have read our Privacy and Cookie Statement.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="write-a-review" onClick={handleRegister}>
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
