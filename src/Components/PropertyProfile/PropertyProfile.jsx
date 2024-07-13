import React, { useState } from 'react';

const PropertyProfile = ({postalCode}) => {

  return (
    <div>
      <h2>Property Profile</h2>
      <p>Property details go here</p>
      <p>Postal Code: {postalCode}</p>
    </div>
  );
};

export default PropertyProfile;
