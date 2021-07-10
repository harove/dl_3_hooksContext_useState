import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    let ul = document.getElementById("ul-1");
    console.log("useeffect");
    let li = document.createElement("li");
    li?.appendChild(document.createTextNode("hola"));
    li.classList.add("list-group-item");
    ul?.appendChild(li);
  },[counter1]);

  useEffect(() => {
    let ul2 = document.getElementById("ul-2");
    console.log("useeffect");
    let li2 = document.createElement("li");
    li2?.appendChild(document.createTextNode("hola2"));
    li2.classList.add("list-group-item");
    ul2?.appendChild(li2);
  },[counter2]);






  return (
    <div className="App">
      <div className="myGrid">
        <div className="column-counter1">
          <ul className="list-group" id="ul-1"></ul>
        </div>
        <div className="column-counter2">
          <ul className="list-group" id="ul-2"></ul>
        </div>
        <div className="column-counter3">
          <div className="button1">
            <button onClick={(e) => setCounter1(counter1 + 1)}>
              add counter1
            </button>
            <span id="counter1">{counter1}</span>
          </div>
          <div className="button2">
            <button onClick={(e) => setCounter2(counter2 + 1)}>
              add counter2
            </button>
            <span id="counter2">{counter2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
