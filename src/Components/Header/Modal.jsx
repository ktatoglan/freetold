import { useState, useEffect, useRef } from "react";
import "../../Style/Modal.css";
import { useAppProvider } from "../../Contexts/AppContext";
import { useNavigate } from "react-router-dom";

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
    setPostCode
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
  }
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
                searchProperties(e.target.value);
              }}
            />
            {searchText.trim() && searchResults.length > 0 && (
                <ul className="search-results">
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      onClick={() =>{
                        setTownCity(searchFullResults[index].county);
                        setCountry("United Kingdom");
                        setPostCode(searchFullResults[index].postcode);
                        setAddressLine1(searchFullResults[index]['address1'] + " " + searchFullResults[index]['address2'] + " " + searchFullResults[index]['address3']);
                        setSearchResults([]);
                        setSearchText("");
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
