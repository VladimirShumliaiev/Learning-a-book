import { addListener, current } from "@reduxjs/toolkit";
import React, { useState } from "react";

// function delay(message, shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(new Error("Error));
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

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error(`Error http.`);
//     }

//     const jsonUsers = await response.json();

//     const users = jsonUsers
//       .filter((users) => users.username.includes("a"))
//       .map(({ name, username }) => ({ name, username }));

//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getUsers();

// TITLE Promise all
// async function getUsers() {
//   try {
//     const response = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users/1"),
//       fetch("https://jsonplaceholder.typicode.com/users/2"),
//       fetch("https://jsonplaceholder.typicode.com/users/3"),
//     ]);

//     if (response.some((response) => !response.ok)) {
//       throw new Error("error http");
//     }

//     const data = await Promise.all(response.map((response) => response.json()));
//     console.log(data.map(({ name }) => name));
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUsers();

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//   if (!response.ok) {
//     throw new Error("error http");
//   }

//   const data = await response.json();

//   Object.entries(data).forEach(
//     ([key, value]) => console.log(`${key}: ${value} `),
//     Object.values(data).forEach((e) => console.log(`${e}`)),
//     Object.keys(data).forEach((e) => console.log(`${e}`)),
//   );
//   return data;
// }

// async function main() {
//   try {
//     const user = await getData();
//     return user;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// main();
const products = [
  { id: 1, name: "Телефон", price: 12000 },
  { id: 2, name: "Ноутбук", price: 30000 },
  { id: 3, name: "Наушники", price: 3000 },
  { id: 4, name: "Монитор", price: 8000 },
];

export default function Examples() {
  const [product, setProduct] = useState(products);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nextId, setNextId] = useState(5);

  const deleteHandle = (id) => {
    setProduct((prev) => prev.filter((product) => product.id !== id));
  };

  const addHandle = () => {
    setProduct((prev) => [...prev, { name, price, id: nextId }]);
    setNextId((prev) => prev + 1);
    setName("");
    setPrice("");
  };

  const nameHandle = (event) => {
    setName(event.target.value);
  };
  const priceHandle = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      {product.map(({ name, price, id }) => (
        <div key={id}>
          {name}: {price}
          <button onClick={() => deleteHandle(id)}>delete</button>
        </div>
      ))}
      <input
        onChange={nameHandle}
        placeholder="name"
        value={name}
        type="text"
      />
      <input
        onChange={priceHandle}
        placeholder="price"
        value={price}
        type="text"
      />
      <button onClick={addHandle}>add</button>
    </div>
  );
}
