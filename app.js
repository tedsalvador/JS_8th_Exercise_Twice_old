import { calculate } from "./js/calculate.js";
import { enterValues } from "./js/enterValues.js";
import { printTerminal } from "./js/printData.js";

function app(){
    let result;
    const [numb1, numb2] = enterValues();
    result = calculate(numb1, numb2);
    printTerminal(result);
}
app()