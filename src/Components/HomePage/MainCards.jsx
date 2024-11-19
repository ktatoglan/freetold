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
                title="Read Real Reviews You Can Trust" 
                text="Discover honest feedback from previous tenants on properties, landlords, and agents." 
            />
            <MainCardSingle 
                image={img2} 
                title="Explore the Neighbourhood Before You Move" 
                text="Traffic, safety, amenities, and more — get the real insights on your next neighbourhood." 
            />
            <MainCardSingle 
                image={img3}
                title="Understand the True Cost of Living" 
                text="Get insights on energy efficiency, utility costs, and property conditions to avoid hidden surprises." 
            />

        </div>
    </div>
    </section>
  )
}
