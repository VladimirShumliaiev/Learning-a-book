import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStar = 10 }) => {
  const [starRating, setStarRating] = useState(0);

  const createStars = (length) => [...Array(length)];
  return (
    <div>
      {createStars(totalStar).map((_, index) => (
        <Star
          key={index}
          starRating={starRating > index}
          onClick={() => setStarRating(index + 1)}
        ></Star>
      ))}
      <p>
        Rating: {starRating} out of {totalStar}
      </p>
    </div>
  );
};

export default StarRating;
