import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [userId, setUserId] = useState(null);
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [townCity, setTownCity] = useState('');
  const [country, setCountry] = useState('');
  const [postCode, setPostCode] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [tenancyPeriod, setTenancyPeriod] = useState({"number":"1","period":"month"});
  const [isItSharingFlat, setIsItSharingFlat] = useState(false);
  const [peopleNumberLivingAtHome, setPeopleNumberLivingAtHome] = useState(0);
  const [futureRentersContactMe, setFutureRentersContactMe] = useState(true);
  const [rentAmount, setRentAmount] = useState(0.0);
  const [rentPeriod, setRentPeriod] = useState('per-month');
  const [isBillsIncluded, setIsBillsIncluded] = useState(false);
  const [billsPerPerson, setBillsPerPerson] = useState(false);
  const [billsWholeHouse, setBillsWholeHouse] = useState(false);
  const [electricBill, setElectricBill] = useState(0.0);
  const [waterBill, setWaterBill] = useState(0.0);
  const [gasBill, setGasBill] = useState(0.0);
  const [internetBill, setInternetBill] = useState(0.0);
  const [reviewScore, setReviewScore] = useState(1);
  const [reviewHeadline, setReviewHeadline] = useState('');
  const [reviewPros, setReviewPros] = useState('');
  const [reviewCons, setReviewCons] = useState('');
  const [heatUpLevel, setHeatUpLevel] = useState(2);
  const [wellLitLevel, setWellLitLevel] = useState(1);
  const [internetConnectionLevel, setInternetConnectionLevel] = useState(1);
  const [isItPetFriendly, setIsItPetFriendly] = useState(false);
  const [anythingToBeFixed, setAnythingToBeFixed] = useState('');
  const [ownerRespondScore, setOwnerRespondScore] = useState(3);
  const [healthConcerns, setHealthConcerns] = useState('');
  const [perceptionNeighborsLevel, setPerceptionNeighborsLevel] = useState(2);
  const [noiseNeighborsLevel, setNoiseNeighborsLevel] = useState(1);
  const [parkingScore, setParkingScore] = useState(3);
  const [trafficScore, setTrafficScore] = useState(1);
  const [safetyConcerns, setSafetyConcerns] = useState('');
  const [agreeCheckbox, setAgreeCheckbox] = useState(false);
  const serverUrl = 'https://freetold-backend.vercel.app';

  const sendReview = async() => {
    //console.log('sendReview');
    try {
      const response = await axios.post(`${serverUrl}/review/addReview`, {
        user_id: userId,
        address_line_1: addressLine1,
        address_line_2: addressLine2,
        town_city: townCity,
        country: country,
        post_code: postCode,
        move_in_date: moveInDate,
        tenancy_period: tenancyPeriod,
        is_it_sharing_flat: isItSharingFlat,
        people_number_leaving_at_home: peopleNumberLivingAtHome,
        future_renters_contact_me: futureRentersContactMe,
        rent_amount: rentAmount,
        rent_period: rentPeriod,
        is_bills_included: isBillsIncluded,
        bills_per_person: billsPerPerson,
        bills_whole_house: billsWholeHouse,
        electric_bill: electricBill,
        water_bill: waterBill,
        gas_bill: gasBill,
        internet_bill: internetBill,
        review_score: reviewScore,
        review_headline: reviewHeadline,
        review_pros: reviewPros,
        review_cons: reviewCons,
        heat_up_level: heatUpLevel,
        well_lit_level: wellLitLevel,
        internet_connection_level: internetConnectionLevel,
        is_it_pet_friendly: isItPetFriendly,
        anything_to_be_fixed: anythingToBeFixed,
        owner_respond_score: ownerRespondScore,
        health_concerns: healthConcerns,
        perception_neighbors_level: perceptionNeighborsLevel,
        noise_neighbors_level: noiseNeighborsLevel,
        parking_score: parkingScore,
        traffic_score: trafficScore,
        safety_concerns: safetyConcerns,
        agree_checkbox: agreeCheckbox
      });

      return true; // Return true if the request is successful
    } catch (error) {
      console.log(error);
      return false; // Return false if there's an error
    }
  }

  return (
    <MyContext.Provider
      value={{sendReview, mode, setMode, userId, setUserId,serverUrl,
        addressLine1, setAddressLine1, addressLine2, setAddressLine2, townCity, setTownCity, country, setCountry, postCode, setPostCode,
        moveInDate, setMoveInDate, tenancyPeriod, setTenancyPeriod, isItSharingFlat, setIsItSharingFlat, peopleNumberLivingAtHome, setPeopleNumberLivingAtHome, futureRentersContactMe, setFutureRentersContactMe,
        rentAmount, setRentAmount, rentPeriod, setRentPeriod, isBillsIncluded, setIsBillsIncluded, billsPerPerson, setBillsPerPerson, billsWholeHouse, setBillsWholeHouse, electricBill, setElectricBill, waterBill, setWaterBill, gasBill, setGasBill, internetBill, setInternetBill,
        reviewScore, setReviewScore, reviewHeadline, setReviewHeadline, reviewPros, setReviewPros, reviewCons, setReviewCons,
        heatUpLevel, setHeatUpLevel, wellLitLevel, setWellLitLevel, internetConnectionLevel, setInternetConnectionLevel, isItPetFriendly, setIsItPetFriendly, anythingToBeFixed, setAnythingToBeFixed, ownerRespondScore, setOwnerRespondScore, healthConcerns, setHealthConcerns,
        perceptionNeighborsLevel, setPerceptionNeighborsLevel, noiseNeighborsLevel, setNoiseNeighborsLevel, parkingScore, setParkingScore, trafficScore, setTrafficScore, safetyConcerns, setSafetyConcerns, agreeCheckbox, setAgreeCheckbox}}

    >
      {children}
    </MyContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(MyContext);
};

export { useAppProvider, AppProvider };
