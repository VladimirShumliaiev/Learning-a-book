import React from "react";

const Examples = () => {
  const names = [{ name: "Ura" }, { name: "Kolya" }, { name: "Petya" }];
  const namesTwo = [{ name: "Oleg" }, { name: "Olya" }];
  const nameAll = [...names, ...namesTwo];
  const nameFilter = nameAll.filter((name) => name.name[0] !== "O");

  console.log(names);
  console.log(namesTwo);
  console.log(nameAll);
  console.log(nameFilter);

  return <>{names.map((e) => e.name).join(",")}</>;
};

export default Examples;
