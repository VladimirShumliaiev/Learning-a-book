import React from "react";

// function delay(message, shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(new Error("Oshibka"));
//       } else {
//         resolve(message);
//       }
//     }, 1000);
//   });
// }

// async function getData() {
//   try {
//     const result = await delay("Hello", true);
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getData();

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error(`Error http.`);
//     }

//     const jsonUsers = await response.json();

//     const users = jsonUsers
//       .filter((users) => users.username.includes("a"))
//       .map(({ name, username }) => ({ name, username }));

//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getUsers();
async function getUsers() {
  try {
    const responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch(`https://jsonplaceholder.typicode.com/users/2`),
      fetch(`https://jsonplaceholder.typicode.com/users/3`),
    ]);

    if (responses.some((response) => !response.ok)) {
      throw new Error("error");
    }
    const users = await Promise.all(
      responses.map((response) => response.json()),
    );

    console.log(users.map(({ name }) => name));
  } catch (error) {
    console.log(error.message);
  }
}

getUsers();
export default function Examples() {
  return <div></div>;
}
