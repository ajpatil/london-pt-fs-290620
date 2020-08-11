// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
<<<<<<< HEAD
const clickTheButton = () => {
  const button = document.querySelector("div.click > button");
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
};
=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
<<<<<<< HEAD
const hoverOver = () => {
  const aTag = document.querySelector("div.mouseover >  a");
  aTag.addEventListener("mouseover", () => {
    console.log("Mouseover");
  });
};
=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
<<<<<<< HEAD
const handleLeave = () => {
  const aTag = document.querySelector("div.mouseover >  a");
  aTag.addEventListener("mouseout", () => {
    console.log("Mouseout");
  });
};
=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
<<<<<<< HEAD
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
=======

>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

<<<<<<< HEAD
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
=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5
/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

<<<<<<< HEAD
function pressAKey() {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("keydown", () => {
    console.log("you clicked somewhere else");
  });
}

=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5
/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
<<<<<<< HEAD
function releaseAKey() {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("keyup", () => {
    console.log("you clicked somewhere else");
  });
}
=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
<<<<<<< HEAD
function inputToUpperCase() {
  const divInput = document.querySelector("div.input > input");
  divInput.addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}
=======

>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
<<<<<<< HEAD
function handleSelectChange() {
  const items = document.querySelector("#items");
  items.addEventListener("change", function () {
    console.log(this.value);
  });
}
=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */

<<<<<<< HEAD
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

=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
<<<<<<< HEAD
const handleScroll = () => {
  const y = window.screenY;
  console.log(y);
};
=======
>>>>>>> 661e2f4ff7f3e594d1979c751c52b945d4b007f5
