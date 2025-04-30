import React from "react";

const Ingredients = ({ name, amount, measurement }) => {
  return (
    <div>
      {name} {amount} {measurement}
    </div>
  );
};

export default Ingredients;
