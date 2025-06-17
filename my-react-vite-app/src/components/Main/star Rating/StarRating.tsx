import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStar = 8 }) => {
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
        <div>
          {starRating} of {totalStar} stars
        </div>
      </h2>
    </>
  );
};

export default StarRating;
