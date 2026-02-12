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

  console.log(nameList);
  console.log(nameListMan);
  console.log(nameListAll);
  return (
    <div>
      <div>
        <a href="/">back to homePage</a>
      </div>
    </div>
  );
};

export default Examples;
