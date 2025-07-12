import React from "react";
import StarRating from "./StarRating";
import { FaStar } from "react-icons/fa";

const Star = ({ starRating = false, setStarRating = (f) => f }) => {
  return (
    <>
      <FaStar color={starRating ? "blue" : "gray"} onClick={setStarRating} />
    </>
  );
};

export default Star;
