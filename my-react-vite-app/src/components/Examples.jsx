import React from "react";

const Examples = () => {
  const city = [
    { cityName: "London" },
    { cityName: "Nikolaev" },
    { cityName: "Odessa" },
    { cityName: "Lviv" },
    { cityName: "Rome" },
  ];

  const city2 = [
    { cityName: "New York" },
    { cityName: "Paris" },
    { cityName: "Milan" },
  ];

  const cityAll = [...city, ...city2];

  const cityFilter = cityAll.filter((city) => city.cityName[2] !== "w");
  const cutCity = (cut, list) => list.filter((e) => e.cityName !== cut);

  console.log(city);
  console.log(city2);
  console.log(cityAll);
  console.log(cityFilter);
  console.log(cutCity("Paris", cityAll));
  console.log(cutCity("Odessa", cityAll));
  return <div></div>;
};

export default Examples;
