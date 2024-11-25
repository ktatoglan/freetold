import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ContentHeader from './ContentHeader';
import PropertyDetails from './PropertyDetails';
import ReviewScore from './ReviewScore';
import LocationMap from './LocationMap';
import LocationDetails from './LocationDetails';
import Reviews from './Reviews';
import axios from 'axios';
import { useAppProvider } from '../../Contexts/AppContext';


const PropertyProfile = ({postalCode,address}) => {
   const { serverUrl, setTownCity, setCountry, setPostCode, setAddressLine1  } = useAppProvider();
   const [reviews, setReviews] = useState([]);
   const [addressDetails, setAddressDetails] = useState({});
   const [selectedProperty, setSelectedProperty] = useState({});

  useEffect(() => {

    const url = `${serverUrl}/review/getReviewsByPostalCodeAndAddress/${postalCode}/${address}`;
    axios.get(url)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });

      getAddressFromPostcode(postalCode);
      getPropertyInfo();
  }, [postalCode, serverUrl]);



  const token =
    "ZG9ndWNhbmJhc2tpbkBnbWFpbC5jb206NzljMDc5YjllOTNmMGQ3MWQ3MjIyY2MwYjAyNWM1NDI2NjEwMjg3OA==";
  const headers = {
    Accept: "text/csv",
    Authorization: `Basic ${token}`,
  };
  const baseUrl = "https://epc.opendatacommunities.org/api/v1/domestic/search";

  async function getPropertyInfo() {
    const queryParams = { "postcode": postalCode, "address": address };
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
        setSelectedProperty(formattedData[0]);

        setTownCity(formattedData[0].county);
        setCountry("United Kingdom");
        setPostCode(postalCode);
        setAddressLine1(address);

      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
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

  const getAddressFromPostcode = async (postcode) => {
    try {
      const response = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);
      const data = response.data;
      if (data.status === 200) {
        // You can process the data as needed
        setAddressDetails(data.result);
      } else {
        console.log('Postcode not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };


  return (
    <>
    <section className="main">
      <aside className="sidebar hide-mbl">
        <Sidebar/>
      </aside>
      <section className="content">
        <ContentHeader selectedProperty={selectedProperty} lastUpdate={reviews.length > 0 ? new Date(reviews[reviews.length-1].date).toLocaleDateString() : selectedProperty['inspection-date']}/>
        <PropertyDetails selectedProperty={selectedProperty} reviews={reviews}/>
        <ReviewScore selectedProperty={selectedProperty} reviews={reviews}/>
        <LocationMap selectedProperty={selectedProperty} addressDetails={addressDetails}/>
        {/*<LocationDetails selectedProperty={selectedProperty} /> */}
        <Reviews selectedProperty={selectedProperty} reviews={reviews} />
      </section>
    </section>
    </>
  );
};

export default PropertyProfile;
