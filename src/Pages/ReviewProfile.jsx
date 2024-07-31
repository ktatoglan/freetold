import React from "react";
import { useParams } from "react-router-dom";
import ReviewProfile from "../Components/ReviewProfile/ReviewProfile";
import "../Style/ReviewProfile.css";

function ReviewProfilePage() {
  const { reviewID } = useParams();

  return (
    <>
      <ReviewProfile reviewID={reviewID} />
    </>
  );
}

export default ReviewProfilePage;
