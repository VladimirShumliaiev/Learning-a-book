import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStar = 5, selectedStar = 0, onRate = f => f}) => {
  // const [selectedStar, setSelectedStar] = useState(0);
  const createArray = (length) => [...Array(length)];
  return (
    <div>
      <h2>
        {createArray(totalStar).map((n, i) => (
          <Star
            key={i}
            selected={selectedStar > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
        <p>
          {selectedStar} of {totalStar} star
        </p>
      </h2>
    </div>
  );
};

export default StarRating;
