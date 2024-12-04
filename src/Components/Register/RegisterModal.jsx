import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";
import { toast } from "react-toastify";
import { useAppProvider } from "../../Contexts/AppContext";
import axios from "axios";

const RegisterModal = ({ closeRegisterModal }) => {
  const RegisterModalRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [staying, setStaying] = useState("");
  const [postcode, setPostcode] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl, userId, setUserId } = useAppProvider();
  // get referer_id from local storage
  const referer_id = localStorage.getItem("referer_id");

  const handleRegister = () => {
    axios
      .post(`${serverUrl}/register`, {
        email,
        name,
        postcode,
        password,
        referer_id
      })
      .then((response) => {
        toast.success(response.data.message);
        setUserId(response.data.userId);
        closeRegisterModal();
        // remove referer_id from local storage
        localStorage.removeItem("referer_id");
        //remove referer_id from url
        const url = window.location.href;
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.delete("referer_id");

      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        RegisterModalRef.current &&
        !RegisterModalRef.current.contains(event.target)
      ) {
        closeRegisterModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeRegisterModal();
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
  }, [closeRegisterModal]);

  return (
    <div className="modalBackground">
      <div className="modalContainer registerModal" ref={RegisterModalRef}>
        <div className="title">
          <h3>Create an account</h3>
        </div>
        <div className="login-buttons row">
          <div className="col">
            <div className="login-google-div">
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
              <p htmlFor="">What should we call you?</p>
              <input
                type="text"
                className="text-input"
                placeholder="Alena"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <p htmlFor="">Your Current Postcode</p>
              <input
                type="text"
                className="text-input"
                placeholder="Address"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
          </div> */}
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
              <p className="pw-info">
                Should include uppercase letter, number and 8 characters or more
              </p>
            </div>
          </div>
          {/*
            <div className="row m-0">
            <div className="col">
              <div className="toggle-group">
                <input type="checkbox" id="switch" />
                <label for="switch">Toggle</label>
                <p>Stay signed in</p>
              </div>
            </div>
          </div>
          */}
          <div className="row">
            <div className="col">
              <p className="register-agree">
                By proceeding, you agree to our Terms of Use and confirm you
                have read our Privacy and Cookie Statement. This site is
                protected by reCAPTCHA and the Google Privacy Policy and Terms
                of Service apply.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="write-a-review"
                onClick={async () => {
                  await handleRegister();
                }}
              >
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