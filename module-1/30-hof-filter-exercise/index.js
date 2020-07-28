/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
const noStrings = (strArr) =>
  strArr.filter((element) => typeof element !== "string");
/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
const justStrings = (strArr) =>
  strArr.filter((element) => typeof element === "string");
/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = (strArr) =>
  strArr.filter((elements) => elements.length > 5);
/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
const numbersMoreThan13 = (numArr) => numArr.filter((nums) => nums > 13);
/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = (objArr) =>
  objArr.filter((item) => typeof item === "object");
/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = (trueArr) => trueArr.filter((items) => items || items === 0);
