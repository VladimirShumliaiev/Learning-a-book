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
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("error http");
    }

    const user = await response.json();
    const result = user.filter(({ id }) => id <= 5).map(({ name }) => name);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

getUsers();
export default function Examples() {
  return <div></div>;
}
