import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyProfile from '../Components/PropertyProfile/PropertyProfile';
import '../Style/PropertyProfile.css';

function PropertyProfilePage() {
   const { postalCode } = useParams();
  return (
    <div>
      <PropertyProfile postalCode = {postalCode} />
    </div>
  );
}

export default PropertyProfilePage;
