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

//TITLE Promise all
// async function getUsers() {
//   try {
//     const response = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users/1"),
//       fetch("https://jsonplaceholder.typicode.com/users/2"),
//       fetch("https://jsonplaceholder.typicode.com/users/3"),
//     ]);

//     if (response.some((response) => !response.ok)) {
//       throw new Error("error http");
//     }

//     const data = await Promise.all(response.map((response) => response.json()));
//     console.log(data.map(({ name }) => name));
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUsers();

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//   if (!response.ok) {
//     throw new Error("error http");
//   }

//   const data = await response.json();

//   Object.entries(data).forEach(
//     ([key, value]) => console.log(`${key}: ${value} `),
//     Object.values(data).forEach((e) => console.log(`${e}`)),
//     Object.keys(data).forEach((e) => console.log(`${e}`)),
//   );
//   return data;
// }

// async function main() {
//   try {
//     const user = await getData();
//     return user;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// main();
async function userOne() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);

  if (!response.ok) {
    throw new Error("Http user 1");
  }
  const user = await response.json();
  return user;
}

async function userTwo() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/2`);

  if (!response.ok) {
    throw new Error("Http user 2");
  }
  const user = await response.json();
  return user;
}

async function getUser() {
  try {
    const data = await Promise.all([userOne(), userTwo()]);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getUser();
export default function Examples() {
  return <div></div>;
}
