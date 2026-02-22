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

  console.log(firstName);
  console.log(firstNameTwo);
  console.log(allFirstName);

  return <div></div>;
};

export default Examples;
