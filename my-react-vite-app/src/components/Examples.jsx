import React from "react";

const Examples = () => {
  const arr = [
    { city: "Kyev ," },
    { city: "Rome ," },
    { city: "Paris ," },
    { city: "London, " },
  ];

  const arr2 = [{ city: "newYork ," }, { city: "Stambul" }];

  const all = [...arr, ...arr2];
  return (
    <div>
      {all.map((e) => (
        <div key={e.city}>e.city</div>
      ))}
    </div>
  );
};

export default Examples;
