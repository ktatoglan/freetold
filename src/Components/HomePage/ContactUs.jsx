import React, { useState } from "react";
import contactImg from "../../assets/img/contact.png";

export const ContactUs = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add send form data
    console.log("Email:", email);
  };
  return (
    <section className="contact-us">
      <div className="container">
        <div className="contact-img">
          <img src={contactImg} alt="" />
        </div>
        <div className="contact-content">
          <p className="heading">Get in touch with us</p>
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
