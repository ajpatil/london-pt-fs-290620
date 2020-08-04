let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const action = (symbol) => {
  let cValue = document.querySelector(".counter_value");
  if (symbol === "+") {
    counter += step;
  } else if (symbol === "-") {
    counter -= step;
  }
  cValue.innerText = counter;
};

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
document.querySelector(".step_form").onsubmit = function (event) {
  event.preventDefault();
  let input = document.querySelector("#step");
  step = +input.value;
  input.value = 1;
  document.querySelector(".step_value").innerText = step;
};

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
document.querySelector("#decrement").onclick = function (event) {
  action("-");
};

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
document.querySelector("#increment").onclick = function (event) {
  action("+");
};

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
document.querySelector("#auto_decrement").onclick = function (event) {
  timer = setInterval(() => {
    action("-");
    // console.log(counter, document.querySelector(".counter_value").innerText);
  }, 1000);
};

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
document.querySelector("#auto_increment").onclick = function (event) {
  timer = setInterval(() => {
    action("+");
  }, 1000);
};

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

document.querySelector("#stop_auto").onclick = function (event) {
  clearInterval(timer);
};
