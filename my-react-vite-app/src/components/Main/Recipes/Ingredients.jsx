import React from "react";

const Ingredients = ({ name, amount, measurement }) => {
  return (
    <li>
      {name} {amount}, {measurement}
    </li>
  );
};

export default Ingredients;
