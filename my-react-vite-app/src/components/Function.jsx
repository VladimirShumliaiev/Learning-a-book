import React from "react";

const Function = () => {
  const arr = [{ name: "Borya" }, { name: "Vasya" }, { name: "Ura" }];
  const arr2 = [{ name: "Seva" }, { name: "Sasha" }, { name: "Oleg" }];

  const all = [...arr, ...arr2];

  const addArr = (name, list) => [...list, { name }];

  const filterOne = all.filter((e) => e.name[0] === "S");

  const cutFilter = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(cutFilter("Vasya", all));
  console.log(filterOne);
  console.log(arr);
  console.log(addArr("Kolya", arr));
  console.log(all);

  return <div></div>;
};

export default Function;
