import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import desktopImage from "../../assets/img/main-banner.svg";
import mobileImage from "../../assets/img/mbl-main-banner-new.svg";

export const MainBanner = () => {

  useEffect(() => {
    const preloadLinkDesktop = document.createElement("link");
    preloadLinkDesktop.rel = "preload";
    preloadLinkDesktop.as = "image";
    preloadLinkDesktop.href = desktopImage;
    document.head.appendChild(preloadLinkDesktop);

    const preloadLinkMobile = document.createElement("link");
    preloadLinkMobile.rel = "preload";
    preloadLinkMobile.as = "image";
    preloadLinkMobile.href = mobileImage;
    document.head.appendChild(preloadLinkMobile);
  }, []);

  return (
    <section className="main-banner">
      <picture>
        <source media="(max-width: 560px)" srcSet={mobileImage} />
        <img
          src={desktopImage}
          alt="Main Banner"
          className="main-banner-image"
        />
      </picture>
      <div className="container">
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
