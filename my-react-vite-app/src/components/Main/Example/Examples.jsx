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

  const cutName = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(nameList);
  console.log(nameListTwo);
  console.log(nameListAll);
  console.log(nameFilter);
  console.log(cutName("Ina", nameListAll));

  return (
    <div>
      {nameListAll.map((e) => e.name).join("\n")}{" "}
      <a href="/">back to homePage</a>
    </div>
  );
};

export default Examples;
