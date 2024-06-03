import React from "react";
import SearchBar from "./SearchBar";

export const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container ">
        <div className="homepage-text">
          <p className="badge">Unlock Property Insights</p>
          <h1 className="title">
            Lived Happily, <br></br>
            Shared After
          </h1>
          <p className="subtitle">
            From Hidden Costs to Neighborhood Vibes, find your dream home
          </p>
        </div>
        <SearchBar />
      </div>
    </section>
  );
};
