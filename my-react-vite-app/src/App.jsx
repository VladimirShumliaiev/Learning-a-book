import "./App.css";

function App() {
  let color_lawn = {
    title: "lawn",
    color: "yellow",
    rating: 0,
  };

  const rateColor = (color, rating) => ({
    ...color,
    rating,
  });
  console.log(rateColor(color_lawn, 5).rating);
  console.log(color_lawn.rating);
  return <>O.REilLY-REACT</>;
}

export default App;
