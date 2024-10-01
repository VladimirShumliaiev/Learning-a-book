import "./App.css";

function App() {
  const string = "Restaurants in Hanalei";
  let urlFriendly = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      urlFriendly += "-";
    } else {
      urlFriendly += string[i];
    }
  }

  const string2 = "Restaurants2 in2 Hanalei2";
  const urlFriendly2 = string2.replace(/ /g, "--");

  console.log(urlFriendly);
  console.log(urlFriendly2);

  return <>O.REilLY-REACT {urlFriendly}</>;
}

export default App;
