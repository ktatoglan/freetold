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

  useEffect(() => {

    const url = `${serverUrl}/review/getReviewsByPostalCode/${postalCode}`;
    console.log('url', url);
    axios.get(url)
      .then(response => {
        console.log('response', response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);



  return (
    // <div>
    //   <h2>Property Profile</h2>
    //   <p>Property details go here</p>
    //   <p>Postal Code: {postalCode}</p>
    // </div>
    <>
    <section className="main">
      <aside className="sidebar">
        <Sidebar/>
      </aside>
      <section className="content">
        <ContentHeader lastUpdate={"23 Sep 2024"}/>
        <PropertyDetails/>
        <ReviewScore />
        <LocationMap />
        <LocationDetails />
        <Reviews />
      </section>
    </section>
    </>
  );
};

export default PropertyProfile;
