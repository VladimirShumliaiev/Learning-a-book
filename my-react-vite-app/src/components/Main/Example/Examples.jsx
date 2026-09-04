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
  const [productsList, setProductsList] = useState(products);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [nextProductId, setNextProductId] = useState(5);

  const handleDelete = (id) => {
    setProductsList((prev) => prev.filter((product) => product.id !== id));
  };

  const handleAdd = () => {
    if (productName.trim().length > 0 && productPrice.trim().length > 0) {
      setProductsList((prev) => [
        ...prev,
        { name: productName, price: productPrice, id: nextProductId },
      ]);
      setNextProductId((prev) => prev + 1);
      setProductName("");
      setProductPrice("");
    }
  };

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  return (
    <div>
      {productsList.map(({ name, price, id }) => (
        <div key={id}>
          {name}:{price}
          <button onClick={() => handleDelete(id)}>x</button>
        </div>
      ))}
      <input
        onChange={handleNameChange}
        value={productName}
        placeholder="name..."
        type="text"
      />
      <input
        onChange={handlePriceChange}
        value={productPrice}
        placeholder="price..."
        type="text"
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
