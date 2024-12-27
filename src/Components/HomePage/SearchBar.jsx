import React, { useState, useEffect } from "react";
import "../../Style/SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchFullResults, setSearchFullResults] = useState([]);
  const [searchByPostcode, setSearchByPostcode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
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

  const handleSearch = () => {
    window.location.href = `/property-listing/?search=${searchTerm}&isItPostCode=${searchByPostcode}`;
  };

  return (
    <div className="home-search">
      <div className="search-options">
        <label>
          <input
            type="checkbox"
            checked={searchByPostcode}
            onChange={() => setSearchByPostcode(!searchByPostcode)}
          />
          Search by postcode
        </label>
      </div>
      <div className="search-line">
        <span className="search-icon" onClick={handleSearch}>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 16L12.875 12.375M14.8333 7.66667C14.8333 11.3486 11.8486 14.3333 8.16667 14.3333C4.48477 14.3333 1.5 11.3486 1.5 7.66667C1.5 3.98477 4.48477 1 8.16667 1C11.8486 1 14.8333 3.98477 14.8333 7.66667Z"
              stroke="#0A2446"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            searchProperties(e.target.value);
          }}
          placeholder={`Search property by ${searchByPostcode ? "postcode" : "address"}`}
        />
        {isMobile ?
          <span className="search-icon-mobile" onClick={handleSearch}>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 16L12.875 12.375M14.8333 7.66667C14.8333 11.3486 11.8486 14.3333 8.16667 14.3333C4.48477 14.3333 1.5 11.3486 1.5 7.66667C1.5 3.98477 4.48477 1 8.16667 1C11.8486 1 14.8333 3.98477 14.8333 7.66667Z"
                stroke="#0A2446"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          :
          <button onClick={handleSearch}>Find Properties & reviews</button>
        }

      </div>
      {searchTerm.trim() && searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((result, index) => (
            <li
              key={index}
              onClick={() =>
                (window.location.href = `/property-profile?address=${searchFullResults[index]['address1'] + " " + searchFullResults[index]['address2'] + " " + searchFullResults[index]['address3']}&postcode=${searchFullResults[index]['postcode']}`)
              }
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
//searchFullResults[index]["building-reference-number"]
//searchFullResults[index]['address'] + " " +