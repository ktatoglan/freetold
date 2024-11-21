import React from 'react';
import PropertyProfile from '../Components/PropertyProfile/PropertyProfile';
import '../Style/PropertyProfile.css';

function PropertyProfilePage() {
  //get address and postal code from the URL
  const url = new URL(window.location.href);
  const postalCode = url.searchParams.get('postcode').replace(/%20/g, ' ');
  const address = url.searchParams.get('address').replace(/%20/g, ' ');

  return (
    <div>
      <PropertyProfile postalCode = {postalCode} address={address} />
    </div>
  );
}

export default PropertyProfilePage;
