import React, {useState} from "react";
import './App.css';
import Operations from "./Operations";

function App() {
  return (
    <div>
      <div className="App">
        <form id="clean" name="" method="post">
          <h1>ADVANCED CALCULATOR WITH REACT</h1>
          <label>Ingrese un número:</label>
          <input type="number" name="" id="valor1" placeholder="Número 1" required step="any"/>
          <label>Ingrese otro número:</label>
          <input type="number" name="" id="valor2" placeholder="Número 2" required step="any"/>
        </form>
      </div>
    </div>
  );
}

export default App;
