import React from 'react'
import HeaderSection from './HeaderSection';
import PropertyInfo from './PropertyInfo';
import Sidebar from './Sidebar';

function ReviewProfile({reviewID, review}) {

    return (
      <div className="review-page">
        <HeaderSection review={review}/>
        <div className="main-content">
          <PropertyInfo review={review}/>
          <Sidebar review={review}/>
        </div>
      </div>
    );


}

export default ReviewProfile