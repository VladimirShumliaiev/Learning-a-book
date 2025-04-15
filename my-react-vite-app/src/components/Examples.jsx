import React from "react";

const Examples = () => {
  const nameList = [
    { name: "Olya" },
    { name: "Olya" },
    { name: "Olesya" },
    { name: "Oksana" },
  ];

  const nameListTwo = [{ name: "Ira" }, { name: "Ina" }, { name: "Katya" }];

  const nameListAll = [...nameList, ...nameListTwo];

  const nameFilter = nameListAll.filter((e) => e.name[0] !== "K");

  const cutName = (cut, name) => console.log(nameList);
  console.log(nameListTwo);
  console.log(nameListAll);
  console.log(nameFilter);

  return <div></div>;
};

export default Examples;
