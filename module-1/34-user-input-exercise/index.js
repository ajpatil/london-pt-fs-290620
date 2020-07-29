// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
name = readlineSync.question("Whats your name?\n");
//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */
const symbols = ["+", "-", "*", "/"];

let selectSymbol = readlineSync.keyInSelect(symbols, "Pick a symbol");
let selectedSymbol = selectSymbol.toString();
console.log(`Great..you picked: ${symbols[selectSymbol]}`);
console.log(selectedSymbol);

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
const number1 = readlineSync.questionInt("Whats the first number?\n");
// console.log(typeof number1);
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
const number2 = readlineSync.questionInt("Whats the second number?\n");

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */

const maths = (exp, num1, num2) => {
  if (symbols[selectSymbol] === "+") {
    console.log(num1 + num2);
  } else if (symbols[selectSymbol] === "-") {
    console.log(num1 - num2);
  } else if (symbols[selectSymbol] === "*") {
    console.log(num1 * num2);
  } else if (symbols[selectSymbol] === "/") {
    console.log(num1 / num2);
  }
};

let result = maths(selectedSymbol, number1, number2);
console.log("=====================");
console.log(`Here you go, the result is ${result}`);
