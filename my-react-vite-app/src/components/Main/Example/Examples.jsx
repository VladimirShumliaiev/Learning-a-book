import React from "react";

const Examples = () => {
  const firstName = [
    { name: "Oleg" },
    { name: "Petya" },
    { name: "Ura" },
    { name: "Sasha" },
  ];

  const firstNameTwo = [
    { name: "Borya" },
    { name: "Serega" },
    { name: "Dima" },
  ];

  console.log(firstName);
  console.log(firstNameTwo);
  return (
    <div>
      <div>
        <a href="/">back to homePage</a>
      </div>
    </div>
  );
};

export default Examples;
