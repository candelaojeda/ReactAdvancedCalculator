import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {};

export const store = createStore(function (state = initialState, action) {
  let numero1, numero2;

  function getInputValue1(num1) {
    return (numero1 = num1);
  }
  function getInputValue2(num2) {
    return (numero2 = num2);
  }
  function getValue1() {
    return numero1;
  }
  function getValue2() {
    return numero2;
  }

  return (state = 1);
});

store.subscribe(function () {});
store.dispatch();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
