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

  useEffect(() => {

    const url = `${serverUrl}/review/getReviewsByPostalCode/${postalCode}`;
    console.log('url', url);
    axios.get(url)
      .then(response => {
        console.log('response', response.data);
        setReviews(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [postalCode, serverUrl]);



  return (
    <>
    <section className="main">
      <aside className="sidebar">
        <Sidebar/>
      </aside>
      <section className="content">
        <ContentHeader lastUpdate={"23 Sep 2024"}/>
        <PropertyDetails reviews={reviews}/>
        <ReviewScore />
        <LocationMap />
        <LocationDetails />
        <Reviews reviews={reviews} />
      </section>
    </section>
    </>
  );
};

export default PropertyProfile;
