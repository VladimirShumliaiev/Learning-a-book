import React from "react";

const Function = () => {
  const arr = [{ name: "Borya" }, { name: "Vasya" }, { name: "Ura" }];

  const addArr = (name, list) => [...list, { name }];
  console.log(arr);
  console.log(addArr("kolya", arr));

  return <div></div>;
};

export default Function;
