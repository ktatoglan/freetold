import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/PropertyListing.css';
import PropertyListing from '../Components/PropertyListing/PropertyListing';


const PropertyListingPage = () => {
  //    window.location.href = `/property-listing/?search=${searchTerm}&isItPostCode=${searchByPostcode}`;
  const url = new URL(window.location.href);
  const searchTerm = url.searchParams.get('search').replace(/%20/g, ' ');
  const searchByPostcode = url.searchParams.get('isItPostCode');
  return (
    <PropertyListing searchTerm={searchTerm} searchByPostcode={searchByPostcode}  />
  )
}

export default PropertyListingPage