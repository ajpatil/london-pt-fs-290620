/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */
 function getIntegersOnly(arr) {
    let numArray = [];
    for(let element of arr){
      if( Number.isInteger(element)) {
        numArray.push(element)
      }
    } return numArray
  }

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
 function getEvenNumbers(evenArr) {
   let evenNumbers = [];
   for (let num of evenArr){
     if(num % 2 === 0){
      evenNumbers.push(num)
     }
   }
   return evenNumbers
 }

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
 function getEvenNumbersFromMixedArray(mixArray) {
  let evenArray = [];
  for (let elements of mixArray) {
    if(Number.isInteger(elements) && elements % 2 === 0){
      evenArray.push(elements)
    }

  } return evenArray

};


/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
 function getOddNumbers(numArray) {
    let oddArray = [];
  for (let element of numArray) {
    if(Number.isInteger(element) && element % 2 !== 0){
      oddArray.push(element)
    }

  } return oddArray

};


/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
 function evenOddTransform(numSwitch){
  let switchedArray = [];
  for (let num of numSwitch) {
    if (num % 2 === 0){
      switchedArray.push(num - 1)
    }
    else {
      switchedArray.push(num + 1)
    }
  }
  return switchedArray
};
