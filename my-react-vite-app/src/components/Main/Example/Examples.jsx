import React from "react";

function delay(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
}

async function getData() {
  const one = await delay("One");
  console.log(one);
  const two = await delay("Two");
  console.log(two);
  const three = await delay("Three");
  console.log(three);
}
getData();
export default function Examples() {
  return <div></div>;
}
