import "./App.css";

function App() {
  const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function (delay = 1000) {
      setTimeout(() => {
        console.log(this.mountains.join(", "));
      }, delay);
    },
  };
  console.log(this);
  return <>{tahoe.print()}</>;
}

export default App;
