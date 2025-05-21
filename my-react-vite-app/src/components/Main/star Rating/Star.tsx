import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ starRating = false, setStarRating = (f) => f }) => {
  return (
    <div>
      <FaStar color={starRating ? "blue" : "grey"} onClick={setStarRating} />
    </div>
  );
};

export default Star;
