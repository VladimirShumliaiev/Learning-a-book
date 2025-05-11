import React from "react";

const Ingredients = ({ name, amount, measurement }) => {
  return (
    <div>
      <li>
        {name}-{amount},{measurement}
      </li>
    </div>
  );
};

export default Ingredients;
