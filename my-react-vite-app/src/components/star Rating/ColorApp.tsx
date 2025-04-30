import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList";

const ColorApp = () => {
  const [colors, setColors] = useState(colorData);
  return (
    <div>
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {const newColors = colors.map(color => color.id === id ? {...color, rating} : color)
        setColors(newColors)
      } }
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
    </div>
  );
};

export default ColorApp;
