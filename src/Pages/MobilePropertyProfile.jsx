import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyProfile from '../Components/PropertyProfile/PropertyProfile';
import '../Style/PropertyProfile.css';

function PropertyProfilePage() {
  const url = new URL(window.location.href);
  const postalCode = url.searchParams.get('postcode').replace(/%20/g, ' ');
  const address = url.searchParams.get('address').replace(/%20/g, ' ');
  const id = url.searchParams.get('id');

  return (
    <div>
      <PropertyProfile postalCode = {postalCode} address={address} id ={id} />
    </div>
  );
}

export default PropertyProfilePage;
