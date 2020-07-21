/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
 function logProperties(obj) {
   for (prop in obj){
     console.log(`Property name: ${prop}`)

   }
};

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
 function getAllValues(obj){
  let objArray = [];
  for (let elements in obj){
    return Object.values(obj)
  }

};

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
 function getAllValuesAsString(obj) {
   let emptyString = ""
   for(let elements in obj) {
     emptyString += `${obj[elements]}` + " "
     }
     return emptyString.trim()

   }


/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
 function propertyValueString(obj) {

  for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`)
  }
};
