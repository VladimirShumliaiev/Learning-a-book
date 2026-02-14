import React from "react";

const Examples = () => {
  const nameList = [
    { name: "Ira" },
    { name: "Olya" },
    { name: "Natasha" },
    { name: "Oksana" },
  ];

  const nameListMan = [{ name: "Vasya" }, { name: "Kolya" }, { name: "Petya" }];
  const nameListAll = [...nameList, ...nameListMan];
  const nameListFilter = nameListAll.filter((e) => e.name[0] !== "O");
  const nameListCut = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(nameList);
  console.log(nameListMan);
  console.log(nameListAll);
  console.log(nameListFilter);
  console.log(nameListCut("Vasya", nameListAll));
  return (
    <div>
      <pre>{nameListAll.map((e) => e.name).join("\n")}</pre>
      <div>
        <a href="/">back to homePage</a>
      </div>
    </div>
  );
};

export default Examples;
