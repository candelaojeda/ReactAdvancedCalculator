import { store } from "./index.js";

function Operations() {
  let operationMath = [];
  let input1 = store.getValue1();
  let input2 = store.getValue2();

  return (
    <div>
      <h2>Suma: {input1 + input2}</h2>
      <h2>Resta: {input1 - input2}</h2>
      <h2>Multiplicación: {}</h2>
      <h2>División: {}</h2>
      <h2>Potencia: {}</h2>
      <h2>Hipotenusa: {}</h2>
      <h2>Raíz: {}</h2>
    </div>
  );
}
export default Operations;
