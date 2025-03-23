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

  const shool = [34, 25, 37];

  const cutShool = (cut, list) => list.filter((e) => e !== cut);

  console.log(selfEducate(frederick));
  console.log(frederick);

  const Header = (props) => <h1>{props}</h1>;
  return (
    <div>
      {Header("Hello")}
      {cutShool(25, shool).join(",")}
      <br />
      {shool.join("\n")}
    </div>
  );
};

export default Function;
