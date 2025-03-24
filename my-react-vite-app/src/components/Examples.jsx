import React from "react";

const Examples = () => {
  const names = [{ name: "Ura" }, { name: "Kolya" }, { name: "Petya" }];
  return (
    <div>{names.map((e) => <h4 key={e.name}>{e.name}</h4>).join(",")}</div>
  );
};

export default Examples;
