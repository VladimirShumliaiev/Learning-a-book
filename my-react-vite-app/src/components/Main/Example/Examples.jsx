import React from "react";

const number = [1, 2, 3, 4, 5];
const numbers = [3, 8, 12, 5, 20, 7];
const name = "Vladimir";
const city = "Odessa";

const user = {
  name,
  age: 38,
  city,
};
const users = [
  { name: "Alex", age: 20 },
  { name: "Vasya", age: 20 },
  { name: "Petya", age: 20 },
];

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Ошибка HTTP");
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log("Ошибка:", error.message);
  }
}

console.log(number.map((e) => e * 2));
console.log(numbers.filter((e) => e > 10));
console.log(user);
console.log(users.map((e) => e.name));
getUsers();
export default function Examples() {
  return <div></div>;
}
