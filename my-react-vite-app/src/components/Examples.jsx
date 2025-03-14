import React from "react";

const Examples = () => {
  const arr = [
    { city: "Kiev" },
    { city: "Rome" },
    { city: "Paris" },
    { city: "London" },
  ];

  const arr2 = [{ city: "Stambul" }, { city: "Odessa" }];

  const allArr = [...arr, ...arr2];

  const ArrFilter = allArr.filter((e) => e.city[0] !== "P");

  console.log(arr);
  console.log(arr2);
  console.log(allArr);
  console.log(ArrFilter);

  return <div></div>;
};

export default Examples;
