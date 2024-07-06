import React, { useState, createContext, useContext } from 'react';

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
  const [tenancyPeriod, setTenancyPeriod] = useState('');
  const [isItSharingFlat, setIsItSharingFlat] = useState(false);
  const [peopleNumberLivingAtHome, setPeopleNumberLivingAtHome] = useState(0);
  const [futureRentersContactMe, setFutureRentersContactMe] = useState(false);
  const [rentAmount, setRentAmount] = useState(0.0);
  const [rentPeriod, setRentPeriod] = useState('');
  const [isBillsIncluded, setIsBillsIncluded] = useState(false);
  const [billsPerPerson, setBillsPerPerson] = useState(false);
  const [billsWholeHouse, setBillsWholeHouse] = useState(false);
  const [electricBill, setElectricBill] = useState(0.0);
  const [waterBill, setWaterBill] = useState(0.0);
  const [gasBill, setGasBill] = useState(0.0);
  const [internetBill, setInternetBill] = useState(0.0);
  const [reviewScore, setReviewScore] = useState(null);
  const [reviewHeadline, setReviewHeadline] = useState('');
  const [reviewPros, setReviewPros] = useState('');
  const [reviewCons, setReviewCons] = useState('');
  const [heatUpLevel, setHeatUpLevel] = useState(null);
  const [wellLitLevel, setWellLitLevel] = useState(null);
  const [internetConnectionLevel, setInternetConnectionLevel] = useState(null);
  const [isItPetFriendly, setIsItPetFriendly] = useState(false);
  const [anythingToBeFixed, setAnythingToBeFixed] = useState('');
  const [ownerRespondScore, setOwnerRespondScore] = useState(null);
  const [healthConcerns, setHealthConcerns] = useState('');
  const [perceptionNeighborsLevel, setPerceptionNeighborsLevel] = useState(null);
  const [noiseNeighborsLevel, setNoiseNeighborsLevel] = useState(null);
  const [parkingScore, setParkingScore] = useState(null);
  const [trafficScore, setTrafficScore] = useState(null);
  const [safetyConcerns, setSafetyConcerns] = useState('');
  const [agreeCheckbox, setAgreeCheckbox] = useState(false);

  return (
    <MyContext.Provider
      value={{mode, setMode, userId, setUserId, addressLine1, setAddressLine1, addressLine2, setAddressLine2, townCity, setTownCity, country, setCountry, postCode, setPostCode, moveInDate, setMoveInDate, tenancyPeriod, setTenancyPeriod, isItSharingFlat, setIsItSharingFlat, peopleNumberLivingAtHome, setPeopleNumberLivingAtHome, futureRentersContactMe, setFutureRentersContactMe, rentAmount, setRentAmount, rentPeriod, setRentPeriod, isBillsIncluded, setIsBillsIncluded, billsPerPerson, setBillsPerPerson, billsWholeHouse, setBillsWholeHouse, electricBill, setElectricBill, waterBill, setWaterBill, gasBill, setGasBill, internetBill, setInternetBill, reviewScore, setReviewScore, reviewHeadline, setReviewHeadline, reviewPros, setReviewPros, reviewCons, setReviewCons, heatUpLevel, setHeatUpLevel, wellLitLevel, setWellLitLevel, internetConnectionLevel, setInternetConnectionLevel, isItPetFriendly, setIsItPetFriendly, anythingToBeFixed, setAnythingToBeFixed, ownerRespondScore, setOwnerRespondScore, healthConcerns, setHealthConcerns, perceptionNeighborsLevel, setPerceptionNeighborsLevel, noiseNeighborsLevel, setNoiseNeighborsLevel, parkingScore, setParkingScore, trafficScore, setTrafficScore, safetyConcerns, setSafetyConcerns, agreeCheckbox, setAgreeCheckbox}}
    >
      {children}
    </MyContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(MyContext);
};

export { useAppProvider, AppProvider };
