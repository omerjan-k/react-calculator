import React, { useState } from "react";
import evaluate from "./evaluate";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(evaluate(result.concat(e.target.getAttribute("data-value"))));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="result">{result}</div>
        <div className="button-wrapper">
          <button className="button" onClick={clear}>
            AC
          </button>
          <button className="button" onClick={backspace}>
            C
          </button>
          <button className="button" data-value="0" onClick={handleClick}>
            0
          </button>
          <button className="button" data-value="/" onClick={handleClick}>
            /
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" data-value="1" onClick={handleClick}>
            1
          </button>
          <button className="button" data-value="2" onClick={handleClick}>
            2
          </button>
          <button className="button" data-value="3" onClick={handleClick}>
            3
          </button>
          <button className="button" data-value="*" onClick={handleClick}>
            *
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" data-value="4" onClick={handleClick}>
            4
          </button>
          <button className="button" data-value="5" onClick={handleClick}>
            5
          </button>
          <button className="button" data-value="6" onClick={handleClick}>
            6
          </button>
          <button className="button" data-value="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" data-value="7" onClick={handleClick}>
            7
          </button>
          <button className="button" data-value="8" onClick={handleClick}>
            8
          </button>
          <button className="button" data-value="9" onClick={handleClick}>
            9
          </button>
          <button className="button" data-value="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" data-value="." onClick={handleClick}>
            .
          </button>
          <button className="button" data-value="=" onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
