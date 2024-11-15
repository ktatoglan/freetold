import React, { useState } from "react";
import contactImg from "../../assets/img/contact.svg";
import axios from "axios";
import { useAppProvider } from "../../Contexts/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const { serverUrl } = useAppProvider();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add send form data
    await axios
      .post(`${serverUrl}/subscribe`, {
        e_mail: email,
      })
      .then((res) => {
        toast.success("Subscribed to newsletter");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error subscribing to newsletter");
      });

      setEmail("");
  };
  return (
    <section className="contact-us-temp">
      <ToastContainer />
      <div className="container">
        <div className="contact-content">
          <p className="heading">Get in touch with us</p>
          <div className="contact-img">
            <img src={contactImg} alt="" />
          </div>
          <p className="subheading">
            Receive an occasional newsletter with our last posts and pro tips
            about accomodation
          </p>
          <form onSubmit={handleSubmit} className="form">
            <div className="formGroup">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Leave us your email address"
              />
            </div>
            <button type="submit" className="button">
              Subscribe
            </button>
          </form>
          <p className="warn">
            By subscribing you agree to Terms of Use, our Privacy Policy and our
            Information collection notice
          </p>
        </div>
      </div>
    </section>
  );
};
