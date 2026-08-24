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
async function getUserPosts(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      throw new Error("error http");
    }

    const user = await response.json();
    console.log(user);

    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    );

    if (!postResponse.ok) {
      throw new Error("error post");
    }
    const result = await postResponse.json();
    console.log(result.map(({ title }) => title));
  } catch (error) {
    console.log(error.message);
  }
}

getUserPosts(3);
export default function Examples() {
  return <div></div>;
}
