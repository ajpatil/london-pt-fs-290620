// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
const clickTheButton = () => {
  const button = document.querySelector("div.click > button");
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const hoverOver = () => {
  const aTag = document.querySelector("div.mouseover >  a");
  aTag.addEventListener("mouseover", () => {
    console.log("Mouseover");
  });
};

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
const handleLeave = () => {
  const aTag = document.querySelector("div.mouseover >  a");
  aTag.addEventListener("mouseout", () => {
    console.log("Mouseout");
  });
};

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
// const focusOnMe = () => {
//   const divInput = document.querySelector("div.input > input");
//   divInput.addEventListener("focus", () => {
//     console.log("focus");
//   });
// };

const focusOnMe = () => {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("focus", function () {
    console.log("focus");
  });
};
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

// const clickElsewhere = () => {
//     focusOnMe.addEventListener("click", () {

//   } )

// };
function clickElsewhere() {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("blur", () => {
    console.log("you clicked somewhere else");
  });
}
/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

function pressAKey() {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("keydown", () => {
    console.log("you clicked somewhere else");
  });
}

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function releaseAKey() {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("keyup", () => {
    console.log("you clicked somewhere else");
  });
}

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function inputToUpperCase() {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
function handleSelectChange() {
  const items = document.querySelector("#items");
  items.addEventListener("change", function () {
    console.log(this.value);
  });
}

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */

// const submitFormHandler = () => {
//   let btn = document.querySelector("form");
//   btn.onsubmit = function (event) {
//     event.preventDefault();
//     btn.event.target.elements.firstName.name = btn[0]
//   };
// };
const submitFormHandler = () => {
  let btn = document.querySelector("form");
  let obj = {};
  btn.onsubmit = function (event) {
    event.preventDefault();
    let arr = Array.from(event.target.elements);
    arr.forEach((input) => {
      let { name, value } = input;
      if (name && value) obj[name] = value;
    });
    console.log(obj);
  };
};

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
const handleScroll = () => {
  const y = window.screenY;
  console.log(y);
};
