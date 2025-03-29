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
  const shool2 = [{ num: "34" }, { num: "25" }, { num: "37" }];

  const cutShool = (cut, list) => list.filter((e) => e !== cut);
  const shoolFilter = shool2.filter((e) => e.num[0] !== "3");

  console.log(selfEducate(frederick));
  console.log(frederick);
  console.log(shoolFilter);

  const Header = (props) => <h1>{props}</h1>;
  return (
    <div>
      {Header("Hello")}
      {cutShool(25, shool).join(",")}
      <br />
      {shool.join("\n")}
      <br />
      {shoolFilter.num}
    </div>
  );
};

export default Function;
