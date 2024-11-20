import React, { useState } from "react";
import "../../Style/SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const token = "ZG9ndWNhbmJhc2tpbkBnbWFpbC5jb206NzljMDc5YjllOTNmMGQ3MWQ3MjIyY2MwYjAyNWM1NDI2NjEwMjg3OA==";
  const headers = {
    'Accept': 'text/csv',
    'Authorization': `Basic ${token}`
  };
  // Define base URL and query parameters separately
  const baseUrl = 'https://epc.opendatacommunities.org/api/v1/domestic/search';

  async function searchProperties(postcode) {
    const queryParams = { postcode };
    // Encode query parameters
    const encodedParams = new URLSearchParams(queryParams).toString();
    // Append parameters to the base URL
    const fullUrl = `${baseUrl}?${encodedParams}`;

    // Now make the request
    await fetch(fullUrl, {
      method: 'GET',
      headers: headers,
    })
      .then(async response => {
        const responseText = await response.text();
        const formattedData = csvToKeyValueArray(responseText);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setSearchResults(formattedData.map(createAddressString));
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  function csvToKeyValueArray(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
  }


  function createAddressString(data) {
    const addressParts = [
      data['address1'],
      data['address2'],
      data['address3'],
      data['posttown'],
      data['postcode']
    ].filter(part => part && part.trim() !== '');
    return addressParts.join(', ');
  }


  const handleSearch = () => {
    // Perform search logic here
    // Replace the following line with your actual search implementation

    window.location.href = "/property-profile/" + searchTerm;

    //setSearchResults(results);
  };

  return (
    <div className="home-search">
      <div className="search-line">
        <span className="search-icon">
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
            setSearchTerm(e.target.value)
            searchProperties(e.target.value);
          }}
          placeholder="Search property by postcode"
        />
      </div>
      <button onClick={handleSearch}>Find Properties & reviews</button>

      <ul>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => window.location.href = `/property-profile/${result}`}>
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
