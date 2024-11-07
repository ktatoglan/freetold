import React from 'react'
import { MainCardSingle } from './MainCardSingle'
import img1 from '../../assets/img/card1.svg';
import img2 from '../../assets/img/card2.svg';
import img3 from '../../assets/img/card3.svg';


export const MainCards = () => {
  return (
    <section className="main-cards">
    <div className="container">
        <div className="subtitle">Benefits & Outcomes</div>
        <h3 className="title">Find your perfect property</h3>
        <div className="cards-holder">
            <MainCardSingle 
                image={img1} 
                title="Read Real Reviews from Previous Tenants" 
                text="Find everything about properties, shared freely by others" 
            />
            <MainCardSingle 
                image={img2} 
                title="Know the Neighborhood: Traffic, Safety, and Amenities" 
                text="EPC, real data and logistic insights about properties" 
            />
            <MainCardSingle 
                image={img3}
                title="Learn about living conditions and costs" 
                text="EPC, real data and logistic insights about properties" 
            />

        </div>
    </div>
    </section>
  )
}
