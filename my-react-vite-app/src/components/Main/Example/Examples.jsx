import React from "react";

function delay(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
}

async function getData() {
  const one = await delay();
  console.log(one("One"));
}
getData();
export default function Examples() {
  return <div></div>;
}
