/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
const forEach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
const map = function (array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i));
  }
  return newArray;
};

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
const filter = function (array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
const find = function (array, callback) {
  let trueElement;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      trueElement = array[i];
      return trueElement;
    }
  }
};

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
const findIndex = function (array, callback) {
  let trueIndex;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      trueIndex = i;
      return trueIndex;
    }
  }
};

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 
 *create a counter
every time you your callback returns true, increment your counter
compare your counter with array length, if it's equal return true if not false
 */

const every = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i], i);
    if (!result) {
      return false;
    }
  }
  return true;
};
// Notes for self: If the result is not true even once return false else true

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

const some = function (array, callback) {
  let x;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return true;
    }
  }
};

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
let acc = 0;
const reduce = function (array, callback, initialValue = 0) {
  let sum = initialValue;
  for (let i = 0; i < array.length; i++) {
    sum = callback(sum, array[i], i);
  }
  return sum;
};
