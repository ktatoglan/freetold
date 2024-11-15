import React, { useState } from "react";
import axios from "axios";
import { useAppProvider } from "../../Contexts/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomePageTextWelcome = () => {
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
        /*setTimeout(() => {
          //refresh page
          window.location.reload();
        }, 500);*/
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error subscribing to newsletter");
        /*setTimeout(() => {
          //refresh page
          window.location.reload();
        }, 500);*/
      });

      setEmail("");
  };
  return (
    <section className="main-banner">
      <ToastContainer />
      <div className="container ">
        <div className="homepage-text-welcome">
          <p className="badge">Unlock Property Insights</p>
          <h1 className="title">
            We are launching
            <br></br>
            our platform!
          </h1>
          <p className="subtitle">
            From real reviews to Hidden Costs, find your dream home
          </p>

          <form onSubmit={handleSubmit} className="form">
            <div className="formGroup">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder=""
              />
            </div>
            <button type="submit" className="button">
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomePageTextWelcome;
