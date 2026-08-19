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

console.log(number.map((e) => e * 2));
console.log(numbers.filter((e) => e > 10));
console.log(user);
export default function Examples() {
  return <div> 111 </div>;
}
