const myName = "AJ"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam","Ben","Joe"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */
 function greetVisitors () {
   for (let visitor=0; visitor < visitors.length; visitor++) {
     console.log('Hi '+ visitors[visitor] + ' my name is ' + myName +'!')
   }
 }
 // greetVisitors()

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */
 function getElementIndex(number) {
   for (let item = 0; item < numbers.length; item++) {
     if (numbers[item] === number) {
       return item;
     }

   }
   return 'Item not found';
 }




// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
 function total() {
   let sumOf = 0;
   for (let num=0; num < numbers.length; num++) {
     sumOf += numbers[num]

   }
   return sumOf;
 }

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */
 function addIndex () {
   let numWithIndex = [];
   for (let arr =0; arr < numbersForIndexes.length; arr++) {
     numWithIndex.push(numbersForIndexes[arr]+ arr);
   }
   return numWithIndex;
}


const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */
 function lowestNumber() {
   let smallestInteger = 0;
   for (let smallestNum in forLowestNumber){
     if(forLowestNumber[smallestNum] < smallestInteger) {
       smallestInteger = forLowestNumber[smallestNum]
     }
   } return smallestInteger

 };
