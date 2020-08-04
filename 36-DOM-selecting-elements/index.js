/**
 * Exercise 1
 *
 * select p tags with getElementsByTagName and assign it
 * to variable {paragraphs}
 */
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

/**
 * Exercise 2
 * select the first p tag with getElementsByTagName and assign it
 * to variable {firstParagraph}
 */
const firstParagraph = document.getElementsByTagName("p")[0];
console.log(firstParagraph);
/**
 * Exercise 3
 *
 * create a function {logAllParagraphs} and with forEach
 * to log each paragraph from {paragraphs}
 *
 * ATTENTION: check the type of {paragraphs} before doing forEach
 */
function logAllParagraphs() {
  Object.values(paragraphs).forEach((para) => console.log(para));
}
/**
 * Exercise 4
 *
 * select all elements with class "text" with getElementsByClassName
 * and assign it to variable {textElements}
 */
const textElements = document.getElementsByClassName(".text");

/**
 * Exercise 5
 *
 * select all elements that have classes "text" and "green"
 * with getElementsByClassName and assign it to variable {greenText}
 */
const greenText = document.getElementsByClassName("text green");

/**
 * Exercise 6
 *
 * select element where id is 'textId-3'(use getElementById) and assign it
 * to variable {thirdText}
 * Correction: Id is meant to be kitten
 */
const thirdText = document.getElementById("kitten");

/* ==================================================== */
/*                  querySelector section               */
/* ==================================================== */
// !!! For this section use querySelector or querySelectorAll only !!!

/**
 * Exercise 7
 *
 * select the fourth "li" element and save it to {fourthListElement} variable
 */
const fourthListElement = document.querySelector("li:nth-child(4)");

/**
 * Exercise 8
 *
 * select all "li" elements and save it to {listElements} variable
 */
const listElements = document.querySelectorAll("li");

/**
 * Exercise 8
 *
 * select all "a" elements that are inside "ul" and assign it {listLinks}
 */

/**
 * Exercise 9
 *
 * select elements where the "data-community-name" attribute
 * is "codersinhoods" and assign it {communityElements}
 */
const communityElements = document.querySelectorAll(
  "[data-community-name='codersinhoods']"
);
console.log();
/**
 * Exercise 10
 *
 * select all elements with class "test" and assign it to a variable
 * {elementsForTesting}
 */
const elementsForTesting = document.querySelectorAll(".test");
/**
 * Exercise 11
 *
 * select the element with id "test-5" and assign it to a variable
 * {fifthTest}
 */
const fifthTest = document.querySelector("#test-5");

/**
 * Exercise 12
 *
 * select all the elements which are siblings of an element
 * with the class "links" and assign it to a variable {nextElements}
 */
const linksAll = document.querySelectorAll(".links");
console.log(linksAll);
// let links = Array.from(linksAll);
// let nextElements = [...linksAll].slice(0, linksAll.length - 1);
let nextElements = [linksAll[0].nextElementSibling];
console.log(nextElements);
// for (el = 0; el < linksAll.length; el++) {
//   nextElements.push(el);
// }
// const test = document.getElementsByClassName("links");
// console.log(test);
