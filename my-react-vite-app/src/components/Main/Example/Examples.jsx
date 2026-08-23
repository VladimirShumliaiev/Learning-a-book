import React from "react";

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
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
