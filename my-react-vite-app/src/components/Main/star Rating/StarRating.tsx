import React, { useState } from "react";
import Star from "./Star";

const totalStar = 5;

const StarRating = (totalStar) => {
  const [selectedStar, setSelectedStar] = useState(0);
  const createArray = (length) => [...Array(length)];
  return (
    <div>
      <h2>
        {createArray(totalStar).map((n, i) => (
          <Star
            key={i}
            selected={selectedStar > i}
            setSelect={() => setSelectedStar(i + 1)}
          />
        ))}
      </h2>
    </div>
  );
};

export default StarRating;
