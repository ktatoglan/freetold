import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";

const LoginModal = ({ closeLoginModal }) => {
  const LoginModalRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch('https://freetold-backend.vercel.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        LoginModalRef.current &&
        !LoginModalRef.current.contains(event.target)
      ) {
        closeLoginModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeLoginModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeLoginModal]);

  return (
    <div className="modalBackground">
      <div className="modalContainer loginModal" ref={LoginModalRef}>
        <div className="title">
          <h3>Log into your account</h3>
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
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
