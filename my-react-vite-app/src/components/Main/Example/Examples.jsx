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

async function getUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) {
      throw new Error("Ошибка HTTP");
    }
    const json = await response.json();
    console.log(json.name);
  } catch (error) {
    console.log("", error.message);
  }
}

async function getUserTwo(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) {
      throw new Error("Ошибка HTTP");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("", error.message);
  }
}

async function getUserPosts(userID) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userID}`,
    );
    if (!response.ok) {
      throw new Error("Error!!!http");
    }
    const json = response.json();

    const responsePost = await fetch(
      `https://jsonplaceholder.typicode.com/users?userID=${json.id}`,
    );
    const jsonPost = await responsePost.json();
    return jsonPost.length;
  } catch (error) {
    console.log("Oshibka", error.message);
  }
}

async function main() {
  const result = await getUserPosts(5);
  console.log(result);
}

console.log(number.map((e) => e * 2));
console.log(numbers.filter((e) => e > 10));
console.log(user);
console.log(users.map((e) => e.name));

getUser(5);

getUserTwo(5).then((name) => {
  console.log(name.name);
});

// getUserPosts(5).then((result) => {
//   console.log(result);
// });

main();

export default function Examples() {
  return <div></div>;
}
