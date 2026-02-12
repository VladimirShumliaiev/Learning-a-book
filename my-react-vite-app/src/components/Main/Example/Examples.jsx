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
  const nameListFilter = nameListAll.filter((e) => e.name[1] !== "a");
  const nameListCut = (cut, list) = nameListAll.filter(e => e.cut)

  console.log(nameList);
  console.log(nameListMan);
  console.log(nameListAll);
  console.log(nameListFilter);
  return (
    <div>
      <div>
        <a href="/">back to homePage</a>
      </div>
    </div>
  );
};

export default Examples;
