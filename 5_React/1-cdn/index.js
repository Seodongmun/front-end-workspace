import calculator from "./calculator.js";
import lodash from "lodash";

console.log(calculator.a, calculator.b, calculator.plus());
console.log(calculator.a, calculator.b, calculator.minus());

const arr = [1, 1, 1, 1, 4, 4, 3, 3, 6, 7, 1, 3];
const unique = lodash.uniqBy(arr);
/* 중복 제거 */
console.log(unique);
