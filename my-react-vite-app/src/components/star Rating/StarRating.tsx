import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStar = 10 }) => {
  const [selectStar, setSelectStar] = useState(0);
  const createArray = (length) => [...Array(length)];
  return (
    <div>
    {createArray(totalStar).map((n, i) => (
          <Star
            key={i}
            selected={selectStar > i}
            onSelect={() => setSelectStar(i + 1)}
          />
        ))}
      <p>
        {selectStar} of {totalStar} star
      </p>
    </div>
  );
};

export default StarRating;
