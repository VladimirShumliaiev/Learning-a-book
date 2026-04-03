import React from "react";

export default function Examples() {
  const num = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }];
  const numTwo = [{ n: "223" }, { n: "212" }, { n: "121" }];
  const numAll = [...num, ...numTwo];

  const numFilter = numAll.filter((e) => e.n[0] !== "1");
  const cutNum = (cut, list) => list.filter((e) => e.n !== cut);

  console.log(num);
  console.log(numTwo);
  console.log(numAll);
  console.log(numFilter);
  console.log(cutNum(3, numAll));
  return <div></div>;
}
