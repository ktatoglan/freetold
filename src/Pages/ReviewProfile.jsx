import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ReviewProfile from "../Components/ReviewProfile/ReviewProfile";
import "../Style/ReviewProfile.css";
import "axios";
import { toast } from "react-toastify";
import  { useAppProvider }  from "../Contexts/AppContext";
import axios from "axios";

function ReviewProfilePage() {
  const { reviewID } = useParams();
  const {serverUrl} = useAppProvider();
  const[review, setReview] = useState({});
  console.log("reviewID" , reviewID);
  useEffect(() => {
    axios.get(`${serverUrl}/review/getReview/${reviewID}`)
    .then((response) => {
      setReview(response.data);
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error fetching review, Wrong review ID");
      //timeout and redirect to home page
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    });
  }, []);

  return (
    <>
      <ReviewProfile reviewID={reviewID} review={review} />
    </>
  );
}

export default ReviewProfilePage;
