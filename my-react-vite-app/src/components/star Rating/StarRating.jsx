import React from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";

const StarRating = ({ totalStars = 5 }) => {
  const createArray = (length) => [...Array(length)];
  return (
    <h3>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} />
      ))}
    </h3>
  );
};

export default StarRating;
