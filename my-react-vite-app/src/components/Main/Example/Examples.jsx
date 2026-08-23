import React from "react";

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
}

async function getData() {
  const result = await delay();
  console.log(result);
  setTimeout(() => {
    console.log(`World`);
  }, 1000);
}

getData();

export default function Examples() {
  return <div></div>;
}
