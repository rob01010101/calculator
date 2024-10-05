import React, { useState } from "react";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const fullName = "Robby Pineda";

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (displayValue === "0" || displayValue === fullName) {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  // Function to clear the display
  const handleClear = () => {
    setDisplayValue("0");
  };

  // Function to calculate the result
  const handleEqual = () => {
    try {
      const result = eval(displayValue.replace("÷", "/"));
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  // Function to display the full name when the surname button is clicked
  const handleSurnameClick = () => {
    setDisplayValue(fullName);
  };

  return (
    <div className="calculator">
      <h1>Calculator of Robby Pineda - IT3A</h1>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("÷")}>÷</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={handleClear}>C</button>
        <button className="surname-button" onClick={handleSurnameClick}>
          Pineda
        </button>
      </div>
    </div>
  );
}

export default App;
