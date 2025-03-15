import React from "react";

const Examples = () => {
  const cities = [
    { name: "Kiev" },
    { name: "London" },
    { name: "Rome" },
    { name: "Paris" },
    { name: "Madrid" },
  ];

  const cities2 = [{ name: "Milan" }, { name: "Odessa" }];

  const allCities = [...cities, ...cities2];

  const filterCities = allCities.filter((e) => e.name[0] !== "M");

  const cutCities = (cut, citiesList) =>
    citiesList.filter((e) => e.name !== cut);

  console.log(cities);
  console.log(cities2);
  console.log(allCities);
  console.log(filterCities);
  console.log(cutCities("Odessa", allCities));
  return <div>{cities.map((e) => e.name).join("\n")}</div>;
};

export default Examples;
