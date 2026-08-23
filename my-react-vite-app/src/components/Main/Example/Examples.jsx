import React from "react";

async function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello`);
    }, 1000);
  });
}

async function getDate() {
  const result = await delay();
  console.log(result);
}
getDate();

export default function Examples() {
  return <div></div>;
}
