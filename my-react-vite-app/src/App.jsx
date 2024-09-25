import "./App.css";

function App() {
  const messages = [
    "JavaScript",
    (message) => console.log(message),
    "Typescript",
    (message) => console.log(message),
    "React",
    (message) => console.log(message),
    "Redux",
    (message) => console.log(message),
  ];

  messages[1](messages[0]);
  messages[3](messages[2]);
  messages[5](messages[4]);
  messages[7](messages[6]);

  return <></>;
}

export default App;
