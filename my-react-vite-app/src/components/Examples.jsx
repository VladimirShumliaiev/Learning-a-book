import React from "react";

const Examples = () => {
  const city = [
    { cityName: "London" },
    { cityName: "Nikolaev" },
    { cityName: "Odessa" },
  ];

  const city2 = [{ cityName: "New York" }, { cityName: "Paris" }];

  const cityAll = [...city, ...city2];

  console.log(city);
  console.log(city2);
  console.log(cityAll);
  return <div></div>;
};

export default Examples;
