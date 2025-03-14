import React from "react";

const Examples = () => {
  const arr = [
    { city: "Kiev" },
    { city: "Rome" },
    { city: "Paris" },
    { city: "London" },
  ];

  const arr2 = [{ city: "newYork" }, { city: "Stambul" }];

  const all = [...arr, ...arr2];

  const cut = (cut, list) => list.filter((e) => e.city !== cut);

  const cityFilter = all.filter((e) => e.city[0] !== "S");

  console.log(cityFilter);
  console.log(all);
  console.log(arr);
  console.log(arr2);
  return (
    <div>
      {cut("Paris", all).map((e) => (
        <div key={e.city}>{e.city}</div>
      ))}
    </div>
  );
};

export default Examples;
