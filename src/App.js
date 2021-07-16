//import React, { useState } from "react";
import "./App.css";
import Operations from "./Operations";
//import { store } from "./index.js";

function App() {
  // let [result, setResult] = useState("");

  // const validate = function(campo) {
  //   let valor = campo.value;

  //   if(/^\d*\.?\d*$/.test(valor)) {
  //     campo.value = 0;
  //   }
  // };
  //onChange={validate(document.querySelector("#valor1").value)

  // store.getInputValue1(document.querySelector("#valor1"));
  // store.getInputValue2(document.querySelector("#valor2"));

  return (
    <div className="App">
      <div>
        <form id="clean" name="">
          <h1 className="title">ADVANCED CALCULATOR WITH REACT</h1>
          <div className="inputs">
            <label className="inputsNumber">Ingrese un número:</label>
            <input
              type="text"
              className="inputsNumber"
              id="valor1"
              step="any"
              value="0"
            />
            <button className="inputsNumber">CLEAR</button>

            <label className="inputsNumber">Ingrese otro número:</label>
            <input
              type="text"
              className="inputsNumber"
              id="valor2"
              step="any"
            />
            <button className="inputsNumber">CLEAR</button>
          </div>
        </form>
      </div>
      <div>
        <div>
          <h1>Operations Results</h1>
          <Operations />
        </div>
      </div>
    </div>
  );
}

export default App;
