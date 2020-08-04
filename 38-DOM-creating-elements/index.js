// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */
const createDOMElement = (tagName) => {
  return document.createElement(tagName);
};

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

const addPTag = (text) => {
  let pTag = createDOMElement("p");
  pTag.innerText = text;
  document.body.appendChild(pTag);
};

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */
const addElementWithClass = (tagName, text, className) => {
  let el = createDOMElement(tagName);
  el.innerText = text;
  el.classList.add(className);
  document.body.appendChild(el);
};

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
const addElementWithMultipleClasses = (tagName, text, arr) => {
  let el = createDOMElement(tagName);
  el.innerText = text;
  arr.forEach(function (className) {
    el.classList.add(className);
  });

  document.body.appendChild(el);
};

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */
const buildAList = (listType, cls, numElements) => {
  let el = createDOMElement(listType);

  for (let i = 0; i < numElements; i++) {
    let li = createDOMElement("li");
    li.innerText = "Item " + i;
    el.appendChild(li);
  }
  el.classList.add(cls);

  document.body.appendChild(el);
};

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

const prependLiToList = (text, cls) => {
  let li = document.createElement("li");
  li.innerText = text;
  li.classList.add(cls);
  document.querySelector(".list").prepend(li);
};

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */
const pushToSelectedPosition = (text, cls, pos) => {
  let li = document.createElement("li");
  li.innerText = text;
  li.classList.add(cls);
  let target = document.querySelector(".list");
  target.insertBefore(li, target.childNodes[pos]);
};

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */
const deleteSelectedElements = (pSelect, elSelect) => {
  let allParentSelectors = document.querySelectorAll(`${pSelect} ${elSelect}`);
  //   while (allParentSelectors.length > 0) {
  //     allParentSelectors[0].remove();
  //   }
  for (let i = allParentSelectors.length - 1; i >= 0; i--) {
    allParentSelectors[i].remove();
  }
};
