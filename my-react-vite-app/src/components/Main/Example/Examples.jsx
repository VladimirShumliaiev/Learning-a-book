import React from "react";

function delay(message, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Oshibka"));
      } else {
        resolve(message);
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await delay("Hello", true);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

getData();

export default function Examples() {
  return <div></div>;
}
