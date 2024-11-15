import React from 'react'
import HeaderSection from './HeaderSection';
import PropertyInfo from './PropertyInfo';
import Sidebar from './Sidebar';

function ReviewProfile({reviewID}) {

    return (
      <div className="review-page">
        <HeaderSection />
        <div className="main-content">
          <PropertyInfo />
          <Sidebar />
        </div>
      </div>
    );


}

export default ReviewProfile