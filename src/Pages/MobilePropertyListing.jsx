import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/PropertyListing.css';
import PropertyListing from '../Components/PropertyListing/PropertyListing';


const PropertyListingPage = () => {
  return (
    <PropertyListing />
  )
}

export default PropertyListingPage