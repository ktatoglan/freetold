import React from 'react';

const LocationMap = () => (
  <div className="location">
    <h3>Location</h3>
    <div className="map">
      <iframe 
        title="property location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48824.48267469802!2d-3.824216495763593!3d51.65524883212988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e09c1d1dd6b1b%3A0x73c7f1d5b23557c6!2sNeath%20SA11%2C%20UK!5e0!3m2!1sen!2s!4v1628087672598!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default LocationMap;
