import React from "react";

const Function = () => {
  const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false,
  };

  const selfEducate = (person) => ({
    ...person,
    canRead: true,
    canWrite: true,
  });

  console.log(selfEducate(frederick));
  console.log(frederick);

  const Header = (props) => <h1>{props}</h1>;
  return <div>{Header("asd")}</div>;
};

export default Function;
