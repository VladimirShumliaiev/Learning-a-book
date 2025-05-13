import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, setSelect = (f) => f }) => {
  return (
    <div>
      <FaStar color={selected ? "blue" : "grey"} onClick={setSelect} />
    </div>
  );
};

export default Star;
