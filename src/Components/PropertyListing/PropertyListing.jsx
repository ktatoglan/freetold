import { useState } from "react";
import PropertySearchBar from "./PropertySearchBar";
// import PropertyCard from '../UserProfile/PropertyCard'; // Bu mevcut bileşen, review kartları için

const PropertyListing = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="property-listing">
      <PropertySearchBar />
      <div
        className={`property-results ${
          isFullScreen ? "fullscreen-map-active" : ""
        }`}
      >
        <div className="property-cards">
          {/* <PropertyCard />
          <PropertyCard />
          <PropertyCard /> */}
          {/* İstediğiniz kadar PropertyCard ekleyebilirsiniz */}
        </div>
        <div className="property-map">
          <div className="map-container">
            {/* Burada harita gösterilecek */}
            <button
              className="fullscreen-map-btn"
              onClick={handleFullScreenToggle}
            >
              {isFullScreen ? "Exit full screen" : "Full screen map"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
