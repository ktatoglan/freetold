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


const PropertyProfile = ({postalCode}) => {
   const { serverUrl } = useAppProvider();
   const [reviews, setReviews] = useState([]);
   const [addressDetails, setAddressDetails] = useState({});

  useEffect(() => {

    const url = `${serverUrl}/review/getReviewsByPostalCode/${postalCode}`;
    axios.get(url)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });

      getAddressFromPostcode(postalCode);

      const fetchPropertyDetails = async () => {
        try {
          // You can process the data as needed
        } catch (error) {
          console.error('Error fetching property details:', error);
        }
      };
      fetchPropertyDetails();
  }, [postalCode, serverUrl]);

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
      <aside className="sidebar">
        <Sidebar/>
      </aside>
      <section className="content">
        <ContentHeader lastUpdate={reviews.length > 0 ? new Date(reviews[reviews.length-1].date).toLocaleDateString() : "-"}/>
        <PropertyDetails reviews={reviews}/>
        <ReviewScore reviews={reviews}/>
        <LocationMap addressDetails={addressDetails}/>
        <LocationDetails />
        <Reviews reviews={reviews} />
      </section>
    </section>
    </>
  );
};

export default PropertyProfile;
