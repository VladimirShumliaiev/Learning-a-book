import React from "react";

function delay(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
}

async function getData() {
  const hello = await delay("Hello");
  console.log(hello);

  const world = await delay("World");
  console.log(world);
}

getData();

export default function Examples() {
  return <div></div>;
}
