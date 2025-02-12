import { useState, useEffect } from "react";
import PropertySearchBar from "./PropertySearchBar";
import PropertyCard from '../UserProfile/PropertyCard'; // Bu mevcut bileşen, review kartları için
import axios from "axios";
import { useAppProvider } from "../../Contexts/AppContext";

const PropertyListing = ({searchByPostcode, searchTerm, id}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { serverUrl } = useAppProvider();
  const [searchResults, setSearchResults] = useState([]);
  const [searchFullResults, setSearchFullResults] = useState([]);

  useEffect(() => {
    //searchProperties(searchTerm);
    if(id){
      handleBaseAddressSelect(id, searchTerm);
    }
    else{
      searchApi(searchTerm);
    }
  }, []);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const searchApi = async (word) => {

    if (word.length > 2) { // Search after 3+ characters
      try {
        const response = await axios.get(
          "https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws",
          {
            params: {
              Key: import.meta.env.VITE_LOCATE_KEY,
              Text: word,
              Countries: "GB", // Search only in the UK
            },
          }
        );
        setSearchResults(response.data.Items.map(createAddressString2) || []);
        setSearchFullResults(response.data.Items);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  function createAddressString2(data) {
    return data['Text'] + ", " + data['Description'];
  }
  // Fetch unit-level addresses when a base address is selected
  const handleBaseAddressSelect = async (id, text) => {
    try {
      const response = await axios.get(
        "https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws",
        {
          params: {
            Key: import.meta.env.VITE_LOCATE_KEY,
            Container: id, // This refines search within the selected address
            Countries: "GB", // Search only in the UK
          },
        }
      );

      if (response.data.Items) {
        setSearchFullResults(response.data.Items);
      }


    } catch (error) {
      console.error("Error fetching units:", error);
    }
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

          {searchFullResults.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
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
