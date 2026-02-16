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

  const allFirstName = [...firstName, ...firstNameTwo];
  const nameFilter = allFirstName.filter((e) => e.name[0] === "S");
  const nameCut = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(firstName);
  console.log(firstNameTwo);
  console.log(allFirstName);
  console.log(nameFilter);
  console.log(nameCut("Borya", allFirstName));

  return (
    <div>
      <pre>{allFirstName.map((e) => e.name).join("\n")}</pre>
      <div>
        <a href="/">back to homePage</a>
      </div>
    </div>
  );
};

export default Examples;
