import React, {useState} from "react";
import './App.css';
import Operations from "./Operations";

function App() {
  return (
    <div className="App">
      <div>
        <form id="clean" name="">
          <h1 className="title">ADVANCED CALCULATOR WITH REACT</h1>
          <div className="inputs">
           
            <label className="inputsNumber">Ingrese un número:</label>
            <input type="number" className="inputsNumber" id="valor1" step="any"/>
            <button className="inputsNumber">CLEAR</button>
          
            <label className="inputsNumber">Ingrese otro número:</label>
            <input type="number" className="inputsNumber" id="valor2" step="any"/>
            <button className="inputsNumber">CLEAR</button>
            
          </div>
        </form>
      </div>
      <div>
        <div>
          <h1>Operations Results</h1>
          <Operations/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
