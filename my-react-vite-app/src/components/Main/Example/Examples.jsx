const Examples = () => {
  const firstName = [
    { name: "Petya" },
    { name: "Vasya" },
    { name: "Pasha" },
    { name: "Sasha" },
    { name: "Oleg" },
  ];

  const firstNameTwo = [
    { name: "Natasha" },
    { name: "Olya" },
    { name: "Nastya" },
    { name: "Ira" },
  ];

  const allName = [...firstName, ...firstNameTwo];
  const cutName = (cut, list) => list.filter((e) => e.name !== cut);

  console.log(firstName);
  console.log(firstNameTwo);
  console.log(allName);
  console.log(cutName("Olya", allName));

  return <pre></pre>;
};

export default Examples;
