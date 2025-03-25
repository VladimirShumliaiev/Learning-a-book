import React from "react";

const Examples = () => {
  const names = [{ name: "Ura" }, { name: "Kolya" }, { name: "Petya" }];
  const namesTwo = [{ name: "Oleg" }, { name: "Olya" }];
  const namesAll = [...names, ...namesTwo];
  const namesFilter = namesAll.filter((name) => name.name[0] !== "O");
  const namesCut = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(names);
  console.log(namesTwo);
  console.log(namesAll);
  console.log(namesFilter);
  console.log(namesCut("Ura", namesAll));

  return (
    <h2>
      {namesCut("Kolya", namesAll)
        .map((e) => e.name)
        .join("\n")}
    </h2>
  );
};

export default Examples;
