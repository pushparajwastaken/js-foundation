//Module import file

//default import
import multiply from "./mathoperator.js";
console.log(multiply(2, 2));

//named import
import { add, substract } from "./mathoperator.js";
console.log(add(2, 6));
console.log(substract(3, 4));
