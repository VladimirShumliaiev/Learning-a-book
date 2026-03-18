import React from "react";

export default function Examples() {
  const num = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }];
  const numTwo = [{ n: "20" }, { n: "21" }, { n: "12" }];
  const numAll = [...num, ...numTwo];

  const numFilter = numAll.filter((e) => e.n[0] !== "2");

  console.log(num);
  console.log(numTwo);
  console.log(numAll);
  console.log(numFilter);
  return <div></div>;
}
