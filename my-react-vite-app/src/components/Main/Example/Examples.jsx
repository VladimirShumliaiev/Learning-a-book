import React from "react";

async function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello`);
    }, 1000);
  });
}

async function getData() {
  const result = await delay();
  console.log(result);
}
getData();

export default function Examples() {
  return <div></div>;
}
