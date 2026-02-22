import React from "react";

const Examples = () => {
  const firstName = [
    { name: "Petya" },
    { name: "Vasya" },
    { name: "Pasha" },
    { name: "Sasha" },
    { name: "Oleg" },
  ];

  const firstNameTwo = [
    { name: "Natasha" },
    { name: "Olya" },
    { name: "Nastya" },
    { name: "Ira" },
  ];

  const allFirstName = [...firstName, ...firstNameTwo];
  const nameFilter = allFirstName.filter((e) => e.name[0] !== "P");
  const cutNameFilter = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(firstName);
  console.log(firstNameTwo);
  console.log(allFirstName);
  console.log(nameFilter);
  console.log(cutNameFilter("Vasya", allFirstName));

  return <div></div>;
};

export default Examples;
