import React, { useState } from "react";

export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add send form data
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <section className="contact-us">
      <div className="container">
        <p className="heading">Contact us</p>
        <h3 className="subheading">Reach us out with inquiries or feedback</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email address"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" className="label">
              What do you wanna tell us
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea"
              placeholder="Type text here"
              rows={5}
            />
          </div>
          <button type="submit" className="button">
            Send your message
          </button>
        </form>
      </div>
    </section>
  );
};
