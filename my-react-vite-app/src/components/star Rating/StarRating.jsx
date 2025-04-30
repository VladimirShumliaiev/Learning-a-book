import React from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";
import { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStar, setSelectedStar] = useState(0);
  const createArray = (length) => [...Array(length)];
  return (
    <h3>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => setSelectedStar(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars} stars
      </p>
    </h3>
  );
};

export default StarRating;
