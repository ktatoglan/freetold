import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ContentHeader from './ContentHeader';
import PropertyDetails from './PropertyDetails';
import ReviewScore from './ReviewScore';
import LocationMap from './LocationMap';
import LocationDetails from './LocationDetails';
import Reviews from './Reviews';

const PropertyProfile = ({postalCode}) => {

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
