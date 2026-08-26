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
async function getUsers(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    throw new Error("error http users");
  }
  const user = await response.json();
  return user;
}
async function getPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  if (!response.ok) {
    throw new Error("error http posts");
  }
  const post = await response.json();
  return post;
}

async function getData(id) {
  try {
    const [user, post] = await Promise.all([getUsers(id), getPosts(id)]);
    console.log(user.name);
    console.log(post.length);
  } catch (error) {
    console.log(error.message);
  }
}
getData(1);
export default function Examples() {
  return <div></div>;
}
