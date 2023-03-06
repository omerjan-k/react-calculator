import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    let check = ["+", "-", "/", "*"];

    check.includes(e.target.name)
      ? setResult(math.evaluate(result).toString() + e.target.name)
      : setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(math.evaluate(result).toString());
    } catch (error) {
      setResult("Error");
    }
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
          <button className="button" name="0" onClick={handleClick}>
            0
          </button>
          <button className="button" name="/" onClick={handleClick}>
            /
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" name="1" onClick={handleClick}>
            1
          </button>
          <button className="button" name="2" onClick={handleClick}>
            2
          </button>
          <button className="button" name="3" onClick={handleClick}>
            3
          </button>
          <button className="button" name="*" onClick={handleClick}>
            *
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" name="4" onClick={handleClick}>
            4
          </button>
          <button className="button" name="5" onClick={handleClick}>
            5
          </button>
          <button className="button" name="6" onClick={handleClick}>
            6
          </button>
          <button className="button" name="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" name="7" onClick={handleClick}>
            7
          </button>
          <button className="button" name="8" onClick={handleClick}>
            8
          </button>
          <button className="button" name="9" onClick={handleClick}>
            9
          </button>
          <button className="button" name="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="button-wrapper">
          <button className="button" name="." onClick={handleClick}>
            .
          </button>
          <button className="button" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
