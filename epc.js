const token = "79c079b9e93f0d71d7222cc0b025c54266102878";

const headers = {
  'Accept': 'text/csv',
  'Authorization': `Basic ${token}`
};

// Define base URL and query parameters separately
const baseUrl = 'https://epc.opendatacommunities.org/api/v1/domestic/search';
const queryParams = { postcode: 'M1' };

// Encode query parameters
const encodedParams = new URLSearchParams(queryParams).toString();

// Append parameters to the base URL
const fullUrl = `${baseUrl}?${encodedParams}`;

// Now make the request
fetch(fullUrl, {
  method: 'GET',
  headers: headers,
})
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();  // Since we're expecting text (CSV)
  })
  .then(data => {
    console.log(data);  // Print the response body
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
