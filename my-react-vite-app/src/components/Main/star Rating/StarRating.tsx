import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStar = 15 }) => {
  const [starRating, setStarRating] = useState(0);

  const createStars = (length) => [...Array(length)];
  return (
    <div>
      {createStars(totalStar).map((_, index) => (
        <Star
          key={index}
          starRating={starRating > index}
          setStarRating={() => setStarRating(index + 1)}
        ></Star>
      ))}
      <h3>
        {starRating} of {totalStar} stars.
      </h3>
    </div>
  );
};

export default StarRating;
