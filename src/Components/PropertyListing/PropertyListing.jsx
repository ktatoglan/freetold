import { useState, useEffect } from "react";
import PropertySearchBar from "./PropertySearchBar";
import PropertyCard from '../UserProfile/PropertyCard'; // Bu mevcut bileşen, review kartları için
import axios from "axios";
import { useAppProvider } from "../../Contexts/AppContext";

const PropertyListing = ({searchByPostcode, searchTerm}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { serverUrl } = useAppProvider();
  const [searchResults, setSearchResults] = useState([]);
  const [searchFullResults, setSearchFullResults] = useState([]);

  useEffect(() => {
    searchProperties(searchTerm);
  }, []);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };



  const token =
    "ZG9ndWNhbmJhc2tpbkBnbWFpbC5jb206NzljMDc5YjllOTNmMGQ3MWQ3MjIyY2MwYjAyNWM1NDI2NjEwMjg3OA==";
  const headers = {
    Accept: "text/csv",
    Authorization: `Basic ${token}`,
  };
  const baseUrl = "https://epc.opendatacommunities.org/api/v1/domestic/search";

  async function searchProperties(query) {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const queryParams = searchByPostcode ? { "postcode": query } : { "address": query };
    const encodedParams = new URLSearchParams(queryParams).toString();
    const fullUrl = `${baseUrl}?${encodedParams}`;

    await fetch(fullUrl, {
      method: "GET",
      headers: headers,
    })
      .then(async (response) => {
        const responseText = await response.text();
        const formattedData = csvToKeyValueArray(responseText);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(formattedData);
        setSearchFullResults(formattedData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setSearchResults([]);
      });
  }

  function csvToKeyValueArray(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    return lines.slice(1).map((line) => {
      const values = line.split(",");
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
  }





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
          {searchFullResults.map((property) => (
            <PropertyCard key={property["building-reference-number"]} property={property} />
          ))}
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
