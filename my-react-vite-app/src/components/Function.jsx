import React from "react";

const Function = () => {
  const shool = [
    { number: 34 },
    { number: 25 },
    { number: "8 & 9" },
    { number: "37" },
  ];

  const a = ["1", "2", "3", "4", "5", "6", "55.346", "5abcd"];

  const arr = [{ name: "a" }, { name: "b" }];
  const arr2 = [{ name: "c" }, { name: "d" }, 34];

  const all = [...arr, ...arr2];

  const x = (name, allShool) => [...allShool, { name }];
  const shoolFilter = a.filter((e) => e[0] === "5");

  console.log(shool.join(","));
  console.log(shoolFilter);
  console.log(x("ura", all));
  console.log(x("ura", arr));
  console.log(x("ura", arr2));

  return <div></div>;
};

export default Function;
