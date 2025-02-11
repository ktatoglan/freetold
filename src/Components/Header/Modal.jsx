import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";
import { useAppProvider } from "../../Contexts/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Modal = ({ closeModal }) => {
  const modalRef = useRef();
  const {
    addressLine1,
    setAddressLine1,
    addressLine2,
    setAddressLine2,
    townCity,
    setTownCity,
    country,
    setCountry,
    postCode,
    setPostCode,
    reviewLocateId,
    setReviewLocateId,
  } = useAppProvider();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchByPostcode, setSearchByPostcode] = useState(true);
  const [searchFullResults, setSearchFullResults] = useState([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeModal]);

  function createAddressString2(data) {
    return data['Text'] + ", " + data['Description'];
  }

  // Retrieve the full address details of a selected unit
  const handleUnitSelect = async (id, text) => {
    try {
      const response = await axios.get(
        "https://api.addressy.com/Capture/Interactive/Retrieve/v1.2/json3.ws",
        {
          params: {
            Key: import.meta.env.VITE_LOCATE_KEY,
            Id: id,
          },
        }
      );

      if (response.data.Items) {
        let currentAddress = response.data.Items[0];
        console.log("Full address details:", response.data.Items[0]);

        setTownCity(currentAddress.City);
        setCountry("United Kingdom");
        setPostCode(currentAddress.PostalCode);
        let address = currentAddress.Line1;
        for(let i = 2; i <= 5; i++){
          if(currentAddress["Line" + i]){
            address += ", " + currentAddress["Line" + i];
          }
        }
        //delete spaces at the end and beginning
        setAddressLine1(address);
        setSearchResults([]);
        setSearchText("");

      }
    } catch (error) {
      console.error("Error retrieving full address:", error);
    }
  };

  // Fetch unit-level addresses when a base address is selected
  const handleBaseAddressSelect = async (id) => {
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
        setSearchResults(response.data.Items.map(createAddressString2));
      }


    } catch (error) {
      console.error("Error fetching units:", error);
    }
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

  const token =
    "ZG9ndWNhbmJhc2tpbkBnbWFpbC5jb206NzljMDc5YjllOTNmMGQ3MWQ3MjIyY2MwYjAyNWM1NDI2NjEwMjg3OA==";
  const headers = {
    Accept: "text/csv",
    Authorization: `Basic ${token}`,
  };
  const baseUrl = "https://epc.opendatacommunities.org/api/v1/domestic/search";

 /* async function searchProperties(query) {
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
        //console.log(formattedData);
        setSearchFullResults(formattedData);
        setSearchResults(formattedData.map(createAddressString));
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
  function createAddressString(data) {
    const addressParts = [
      data["address1"],
      data["address2"],
      data["address3"],
      data["posttown"],
      data["postcode"],
    ].filter((part) => part && part.trim() !== "");
    return addressParts.join(", ");
  }*/
  return (
    <div className="modalBackground">
      <div className="modalContainer" ref={modalRef}>
        <div className="title">
          <h3>Let's start with the address</h3>
        </div>
        <div className="form">
          <div className="row search-bar">
            <label>
              <input
                type="checkbox"
                checked={searchByPostcode}
                onChange={() => setSearchByPostcode(!searchByPostcode)}
              />
              Search by postcode
            </label>
            <input
              type="text"
              className="text-input search-input"
              placeholder="Enter address starting from postcode"
              onChange={(e) => {
                setSearchText(e.target.value);
                searchApi(e.target.value);
              }}
            />
            {searchText.trim() && searchResults.length > 0 && (
                <ul className="search-results">
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      onClick={() =>{
                        let selectedAddress = searchFullResults[index];
                        setReviewLocateId(selectedAddress.Id);
                        if(selectedAddress.Type === "Address"){
                          handleUnitSelect(selectedAddress.Id, result);
                        }
                        else {
                          handleBaseAddressSelect(selectedAddress.Id);
                        }
                      }}
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              )}
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Address line</p>
              <input
                type="text"
                className="text-input"
                placeholder="Street"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                readOnly
              />
            </div>
            {/*

            <div className="col">
              <p htmlFor="">Address line 2 (Optional)</p>
              <input
                type="text"
                className="text-input"
                placeholder="Neighborhood"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>

            */}
          </div>
          <div className="row">
            <div className="col">
              <p htmlFor="">Town/City</p>
              <input
                type="text"
                className="text-input"
                value={townCity}
                onChange={(e) => setTownCity(e.target.value)}
                readOnly
              />
            </div>
            <div className="col">
              <p htmlFor="">Country</p>
              <input
                type="text"
                className="text-input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                readOnly
              />
            </div>
            <div className="col">
              <p htmlFor="">Postcode</p>
              <input
                type="text"
                className="text-input"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
                readOnly
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="write-a-review"
                onClick={() => {
                  //setOpenModal(true);
                  navigate("/write-a-review-1");
                }}
              >
                Write a review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
