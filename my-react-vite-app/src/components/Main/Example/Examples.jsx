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
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/1`,
    );

    const json = await response.json();

    if (!response.ok) {
      throw new Error("ERROR http!!!");
    }

    console.log(json.name);
  } catch (error) {
    console.log(error.message);
  }
}
getUser();
export default function Examples() {
  return <div></div>;
}
