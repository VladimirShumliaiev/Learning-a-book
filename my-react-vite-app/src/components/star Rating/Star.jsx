import React from "react";
import { FoStar } from "react-icons/fa";

const Star = ({ selected = false }) => {
  return (
    <div>
      <FoStar color={selected ? "red" : "gray"} />
    </div>
  );
};

export default Star;
