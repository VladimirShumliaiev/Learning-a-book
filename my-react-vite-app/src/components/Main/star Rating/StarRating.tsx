import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStar = 5 }) => {
  const [selectedStar, setSelectedStar] = useState(0);
  const createArray = (length) => [...Array(length)];
  return (
    <>
      <h2>
        {createArray(totalStar).map((n, i) => (
          <Star
            key={i}
            selected={selectedStar > i}
            setSelect={() => setSelectedStar(i + 1)}
          />
        ))}
        <p>
          {selectedStar} of {totalStar} stars
        </p>
      </h2>
    </>
  );
};

export default StarRating;
