import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ContentHeader from './ContentHeader';
import PropertyDetails from './PropertyDetails';

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
      </section>
    </section>
    </>
  );
};

export default PropertyProfile;
