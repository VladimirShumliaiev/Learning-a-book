import React from "react";

const Examples = () => {
  const firstName = [
    { name: "Bob" },
    { name: "Oleg" },
    { name: "Vasya" },
    { name: "Petya" },
  ];
  const firstNameTwo = [
    { name: "Kolya" },
    { name: "Ura" },
    { name: "Maksim" },
    { name: "Sasha" },
  ];

  const allFirstName = [...firstName, ...firstNameTwo];
  const nameFilter = allFirstName.filter((e) => e.name[0] !== "B");
  const cutNameFilter = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(firstName);
  console.log(firstNameTwo);
  console.log(allFirstName);
  console.log(nameFilter);
  console.log(cutNameFilter("Vasya", allFirstName));

  return <div></div>;
};

export default Examples;
