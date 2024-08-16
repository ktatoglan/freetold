import React, { useEffect, useState } from 'react';

const LocationMap = ({addressDetails}) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    console.log('Address Details:', addressDetails);
    if (addressDetails && addressDetails.latitude && addressDetails.longitude) {
      setLatitude(addressDetails.latitude);
      setLongitude(addressDetails.longitude);
    }
  }, [addressDetails]);

  return (
    <div className="location">
      <h3>Location</h3>
      <div className="map">
        <iframe
          title="property location"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
          width="100%"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
