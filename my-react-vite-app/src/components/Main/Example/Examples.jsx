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

async function getUser() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw new Error("Error http");
    }

    const json = await response.json();

    const names = json.map(({ name }) => name);

    console.log(names);
  } catch (error) {
    console.log(error.message);
  }
}

getUser();

export default function Examples() {
  return <div></div>;
}
