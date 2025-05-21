import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStar = 5 }) => {
  const [starRating, setStarRating] = useState(0);

  const createArray = (length) => [...Array(length)];
  return (
    <>
      <h2>
        {createArray(totalStar).map((n, i) => (
          <Star
            key={i}
            starRating={starRating > i}
            setStarRating={() => setStarRating(i + 1)}
          />
        ))}
        <p>
          {starRating} of {totalStar} stars
        </p>
      </h2>
    </>
  );
};

export default StarRating;
