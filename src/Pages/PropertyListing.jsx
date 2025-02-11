import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/PropertyListing.css';
import PropertyListing from '../Components/PropertyListing/PropertyListing';


const PropertyListingPage = () => {
  //    window.location.href = `/property-listing/?search=${searchTerm}&isItPostCode=${searchByPostcode}`;
  const url = new URL(window.location.href);
  const searchTerm = url.searchParams.get('search').replace(/%20/g, ' ');
  const id = url.searchParams.get('id');

  //const searchByPostcode = url.searchParams.get('isItPostCode');
  return (
    <PropertyListing searchTerm={searchTerm} id = {id} />
  )
}

export default PropertyListingPage