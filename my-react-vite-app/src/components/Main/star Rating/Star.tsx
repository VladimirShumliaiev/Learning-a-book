import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ starRating = false, setStarRating = (f) => f }) => {
  return (
    <>
      <FaStar color={starRating ? "blue" : "grey"} onClick={setStarRating} />
    </>
  );
};

export default Star;
