import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [heading, setHeading] = useState(
    "You can use this app to do any sentence changes you want"
  );
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  const reverse = () => {
    let newText = value.split("").reverse().join("");
    setValue(newText);
    setHeading("Your Reversed sentence is");
  };
  const tolowerCases = () => {
    let caseL = value.toLowerCase();
    setValue(caseL);
    setHeading("Your Lowercased sentence is");
  };
  const toupperCases = () => {
    let caseU = value.toUpperCase();
    setValue(caseU);
    setHeading("Your Uppercased sentence is");
  };
  const toCapitalCases = () => {
    const capitalizeD = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(
        /(?:^|\s|["'([{])+\S/g,
        (match) => match.toUpperCase()
      );

    setValue(capitalizeD);
    setHeading("Your Capitalized sentence is");
  };
  const toClear = () => {
    setValue("");
    setHeading("You can use this app to do any sentence changes you want");
  };
  return (
    <div className="App">
      <div className="text1">
        <h1>Hello Everyone</h1>
        <h2>Welcome to the Website</h2>
        <h2>{heading}</h2>
        <button id="theme" onClick={() => toggleTheme()}>
          Dark Mode
        </button>
        <br />
        <br />
      </div>
      <div>
        <input
          className="inputvalue"
          placeholder="Type your text here"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <br />
      <div>
        <button id="reverse" type="button" onClick={reverse}>
          Press here to Reverse
        </button>
      </div>
      <br />
      <div>
        <button id="lowercase" type="button" onClick={tolowerCases}>
          Press here to Lowercase
        </button>
      </div>
      <br />
      <div>
        <button id="uppercase" type="button" onClick={toupperCases}>
          Press here to Uppercase
        </button>
      </div>
      <br />
      <div>
        <button id="capitalized" type="button" onClick={toCapitalCases}>
          Press here to Capitalized
        </button>
      </div>
      <br />
      <div>
        <button id="clear" type="button" onClick={toClear}>
          Press here to Clear Text Area
        </button>
      </div>
    </div>
  );
}

export default App;
