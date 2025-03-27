import React from "react";

const Examples = () => {
  const city = [
    { cityName: "London" },
    { cityName: "Nikolaev" },
    { cityName: "Odessa" },
  ];

  const city2 = [{ cityName: "New York" }, { cityName: "Paris" }];

  const cityAll = [...city, ...city2];

  const cityFilter = cityAll.filter((city) => city.cityName[0] !== "N");
  const cutCity = (cut, list) => list.filter((e) => e.cityName !== cut);

  console.log(city);
  console.log(city2);
  console.log(cityAll);
  console.log(cityFilter);
  console.log(cutCity("New York", cityAll));
  return <div></div>;
};

export default Examples;
