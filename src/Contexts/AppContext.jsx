import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const MyContext = createContext();
const cookies = new Cookies();

const AppProvider = ({ children }) => {
  const storedUserData = cookies.get('user');

  const [mode, setMode] = useState('light');
  const [enableCookies, setEnableCookies] = useState(storedUserData && storedUserData.enableCookies ? storedUserData.enableCookies : "not_asked");
  const [reviewLocateId, setReviewLocateId] = useState(storedUserData && storedUserData.reviewLocateId ? storedUserData.reviewLocateId : null);
  const [userId, setUserId] = useState(storedUserData && storedUserData.userId ? storedUserData.userId : null);
  const [addressLine1, setAddressLine1] = useState(storedUserData && storedUserData.addressLine1 ? storedUserData.addressLine1 : '');
  const [addressLine2, setAddressLine2] = useState(storedUserData && storedUserData.addressLine2 ? storedUserData.addressLine2 : '');
  const [townCity, setTownCity] = useState(storedUserData && storedUserData.townCity ? storedUserData.townCity : '');
  const [country, setCountry] = useState(storedUserData && storedUserData.country ? storedUserData.country : '');
  const [postCode, setPostCode] = useState(storedUserData && storedUserData.postCode ? storedUserData.postCode : '');
  const [moveInDate, setMoveInDate] = useState(storedUserData && storedUserData.moveInDate ? storedUserData.moveInDate : '');
  const [tenancyPeriod, setTenancyPeriod] = useState(storedUserData && storedUserData.tenancyPeriod ? storedUserData.tenancyPeriod : {"number":"1","period":"month"});
  const [isItSharingFlat, setIsItSharingFlat] = useState(storedUserData && storedUserData.isItSharingFlat ? storedUserData.isItSharingFlat : false);
  const [peopleNumberLivingAtHome, setPeopleNumberLivingAtHome] = useState(storedUserData && storedUserData.peopleNumberLivingAtHome ? storedUserData.peopleNumberLivingAtHome : 0);
  const [futureRentersContactMe, setFutureRentersContactMe] = useState(storedUserData && storedUserData.futureRentersContactMe ? storedUserData.futureRentersContactMe : true);
  const [rentAmount, setRentAmount] = useState(storedUserData && storedUserData.rentAmount ? storedUserData.rentAmount : 0.0);
  const [rentPeriod, setRentPeriod] = useState(storedUserData && storedUserData.rentPeriod ? storedUserData.rentPeriod : 'per-month');
  const [rentDuration, setRentDuration] = useState(storedUserData && storedUserData.rentDuration ? storedUserData.rentDuration : 0);
  const [isBillsIncluded, setIsBillsIncluded] = useState(storedUserData && storedUserData.isBillsIncluded ? storedUserData.isBillsIncluded : false);
  const [billsPerPerson, setBillsPerPerson] = useState(storedUserData && storedUserData.billsPerPerson ? storedUserData.billsPerPerson : false);
  const [billsWholeHouse, setBillsWholeHouse] = useState(storedUserData && storedUserData.billsWholeHouse ? storedUserData.billsWholeHouse : false);
  const [electricBill, setElectricBill] = useState(storedUserData && storedUserData.electricBill ? storedUserData.electricBill : '');
  const [waterBill, setWaterBill] = useState(storedUserData && storedUserData.waterBill ? storedUserData.waterBill : '');
  const [gasBill, setGasBill] = useState(storedUserData && storedUserData.gasBill ? storedUserData.gasBill : '');
  const [internetBill, setInternetBill] = useState(storedUserData && storedUserData.internetBill ? storedUserData.internetBill : '');
  const [reviewScore, setReviewScore] = useState(storedUserData && storedUserData.reviewScore ? storedUserData.reviewScore : 0);
  const [reviewHeadline, setReviewHeadline] = useState(storedUserData && storedUserData.reviewHeadline ? storedUserData.reviewHeadline : '');
  const [reviewPros, setReviewPros] = useState(storedUserData && storedUserData.reviewPros ? storedUserData.reviewPros : '');
  const [reviewCons, setReviewCons] = useState(storedUserData && storedUserData.reviewCons ? storedUserData.reviewCons : '');
  const [heatUpLevel, setHeatUpLevel] = useState(storedUserData && storedUserData.heatUpLevel ? storedUserData.heatUpLevel : 0);
  const [wellLitLevel, setWellLitLevel] = useState(storedUserData && storedUserData.wellLitLevel ? storedUserData.wellLitLevel : 0);
  const [internetConnectionLevel, setInternetConnectionLevel] = useState(storedUserData && storedUserData.internetConnectionLevel ? storedUserData.internetConnectionLevel : 0);
  const [isItPetFriendly, setIsItPetFriendly] = useState(storedUserData && storedUserData.isItPetFriendly ? storedUserData.isItPetFriendly : false);
  const [anythingToBeFixed, setAnythingToBeFixed] = useState(storedUserData && storedUserData.anythingToBeFixed ? storedUserData.anythingToBeFixed : '');
  const [ownerRespondScore, setOwnerRespondScore] = useState(storedUserData && storedUserData.ownerRespondScore ? storedUserData.ownerRespondScore : 0);
  const [healthConcerns, setHealthConcerns] = useState(storedUserData && storedUserData.healthConcerns ? storedUserData.healthConcerns : '');
  const [perceptionNeighborsLevel, setPerceptionNeighborsLevel] = useState(storedUserData && storedUserData.perceptionNeighborsLevel ? storedUserData.perceptionNeighborsLevel : 0);
  const [noiseNeighborsLevel, setNoiseNeighborsLevel] = useState(storedUserData && storedUserData.noiseNeighborsLevel ? storedUserData.noiseNeighborsLevel : 0);
  const [parkingScore, setParkingScore] = useState(storedUserData && storedUserData.parkingScore ? storedUserData.parkingScore : 0);
  const [trafficScore, setTrafficScore] = useState(storedUserData && storedUserData.trafficScore ? storedUserData.trafficScore : 0);
  const [safetyConcerns, setSafetyConcerns] = useState(storedUserData && storedUserData.safetyConcerns ? storedUserData.safetyConcerns : '');
  const [agreeCheckbox, setAgreeCheckbox] = useState(storedUserData && storedUserData.agreeCheckbox ? storedUserData.agreeCheckbox : false);
  const [anonymous, setAnonymous] = useState(storedUserData && storedUserData.anonymous ? storedUserData.anonymous : false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    cookies.set('user', { userId, mode, enableCookies, addressLine1, addressLine2, townCity, country, postCode, moveInDate, tenancyPeriod, isItSharingFlat, peopleNumberLivingAtHome, futureRentersContactMe, rentAmount, rentPeriod, rentDuration, isBillsIncluded, billsPerPerson, billsWholeHouse, electricBill, waterBill, gasBill, internetBill, reviewScore, reviewHeadline, reviewPros, reviewCons, heatUpLevel, wellLitLevel, internetConnectionLevel, isItPetFriendly, anythingToBeFixed, ownerRespondScore, healthConcerns, perceptionNeighborsLevel, noiseNeighborsLevel, parkingScore, trafficScore, safetyConcerns, agreeCheckbox, reviewLocateId, anonymous }, { path: '/' });
  }, [userId, mode, enableCookies, addressLine1, addressLine2, townCity, country, postCode, moveInDate, tenancyPeriod, isItSharingFlat, peopleNumberLivingAtHome, futureRentersContactMe, rentAmount, rentPeriod, rentDuration, isBillsIncluded, billsPerPerson, billsWholeHouse, electricBill, waterBill, gasBill, internetBill, reviewScore, reviewHeadline, reviewPros, reviewCons, heatUpLevel, wellLitLevel, internetConnectionLevel, isItPetFriendly, anythingToBeFixed, ownerRespondScore, healthConcerns, perceptionNeighborsLevel, noiseNeighborsLevel, parkingScore, trafficScore, safetyConcerns, agreeCheckbox, reviewLocateId, anonymous]);

  const resetAllFields = () => {
    setReviewLocateId(null);
    setAddressLine1('');
    setAddressLine2('');
    setTownCity('');
    setCountry('');
    setPostCode('');
    setMoveInDate('');
    setTenancyPeriod({"number":"1","period":"month"});
    setIsItSharingFlat(false);
    setPeopleNumberLivingAtHome(0);
    setFutureRentersContactMe(true);
    setRentAmount(0.0);
    setRentPeriod('per-month');
    setRentDuration(0);
    setIsBillsIncluded(false);
    setBillsPerPerson(false);
    setBillsWholeHouse(false);
    setElectricBill('');
    setWaterBill('');
    setGasBill('');
    setInternetBill('');
    setReviewScore(0);
    setReviewHeadline('');
    setReviewPros('');
    setReviewCons('');
    setHeatUpLevel(0);
    setWellLitLevel(0);
    setInternetConnectionLevel(0);
    setIsItPetFriendly(false);
    setAnythingToBeFixed('');
    setOwnerRespondScore(0);
    setHealthConcerns('');
    setPerceptionNeighborsLevel(0);
    setNoiseNeighborsLevel(0);
    setParkingScore(0);
    setTrafficScore(0);
    setSafetyConcerns('');
    setAgreeCheckbox(false);
    setAnonymous(false);
  }

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
        rent_duration: rentDuration,
        is_bills_included: isBillsIncluded,
        bills_per_person: billsPerPerson,
        bills_whole_house: billsWholeHouse,
        electric_bill: electricBill ? electricBill : 0,
        water_bill: waterBill ? waterBill : 0,
        gas_bill: gasBill ? gasBill : 0,
        internet_bill: internetBill ? internetBill : 0,
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
        agree_checkbox: agreeCheckbox,
        review_locate_id: reviewLocateId,
        anonymous: anonymous
      });
      resetAllFields();
      return response.data; // Return true if the request is successful
    } catch (error) {
      console.log(error);
      return false; // Return false if there's an error
    }
  }

  return (
    <MyContext.Provider
      value={{openLoginModal, setOpenLoginModal, openRegisterModal, setOpenRegisterModal,
        sendReview, mode, setMode, enableCookies, setEnableCookies, userId, setUserId,serverUrl,
        reviewLocateId, setReviewLocateId,
        addressLine1, setAddressLine1, addressLine2, setAddressLine2, townCity, setTownCity, country, setCountry, postCode, setPostCode,
        moveInDate, setMoveInDate, tenancyPeriod, setTenancyPeriod, isItSharingFlat, setIsItSharingFlat, peopleNumberLivingAtHome, setPeopleNumberLivingAtHome, futureRentersContactMe, setFutureRentersContactMe,
        rentAmount, setRentAmount, rentPeriod, setRentPeriod, rentDuration, setRentDuration, isBillsIncluded, setIsBillsIncluded, billsPerPerson, setBillsPerPerson, billsWholeHouse, setBillsWholeHouse, electricBill, setElectricBill, waterBill, setWaterBill, gasBill, setGasBill, internetBill, setInternetBill,
        reviewScore, setReviewScore, reviewHeadline, setReviewHeadline, reviewPros, setReviewPros, reviewCons, setReviewCons,
        heatUpLevel, setHeatUpLevel, wellLitLevel, setWellLitLevel, internetConnectionLevel, setInternetConnectionLevel, isItPetFriendly, setIsItPetFriendly, anythingToBeFixed, setAnythingToBeFixed, ownerRespondScore, setOwnerRespondScore, healthConcerns, setHealthConcerns,
        perceptionNeighborsLevel, setPerceptionNeighborsLevel, noiseNeighborsLevel, setNoiseNeighborsLevel, parkingScore, setParkingScore, trafficScore, setTrafficScore, safetyConcerns, setSafetyConcerns, anonymous, setAnonymous, agreeCheckbox, setAgreeCheckbox}}

    >
      {children}
    </MyContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(MyContext);
};

export { useAppProvider, AppProvider };
