import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, setSelect = (f) => f }) => {
  return (
    <>
      <FaStar color={selected ? "blue" : "grey"} onClick={setSelect} />
    </>
  );
};

export default Star;
