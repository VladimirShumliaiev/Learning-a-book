import React from "react";

const Examples = () => {
  const arr = [
    { city: "Kyev ," },
    { city: "Rome ," },
    { city: "Paris ," },
    { city: "London," },
  ];
  return <div>{arr.map((e) => e.city)}</div>;
};

export default Examples;
