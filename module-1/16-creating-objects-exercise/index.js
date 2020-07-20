/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */


 let user = {
   firstName: 'AJ',
   lastName: "Patil",
   age: 29
 }
 console.log(user)

/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
 let string = "string";
 let number = 12;
 let array = [];
 let object = {};
 let func1 = () => {};
 let boolean = true;

 let allTypes = {
   string,
   number,
   array,
   object,
   func1,
   boolean
 }
 console.log(allTypes)


/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

 function createMovieObject(name,rating,ticketPrice) {
    let movies =  new Object();
    // movies.name
    // movies.rating
    // movies.ticketPrice
    return {name,rating,ticketPrice}
  }
console.log(createMovieObject('godfather','11/10',20))
