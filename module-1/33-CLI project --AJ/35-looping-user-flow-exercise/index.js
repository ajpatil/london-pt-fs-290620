// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: "",
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic",
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups",
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland",
];
const menuTopics = ["Book", "Movie", "Next Trip"];
function mainMenu() {
  console.log(`--------------`);
  console.log(`WHAT ARE YOU INTERESTED IN ?`);
  console.log(`--------------`);
  let mainMenuOptions = readlineSync.keyInSelect(
    menuTopics,
    "Pick a topic on interest!"
  );
}

// let topMenu = [];
mainMenu();
/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

const pickBooks = readlineSync.keyInSelect(
  books,
  "What book would you like to read?"
);
console.log(pickBooks);

selectedItems.book = books[pickBooks];
console.log(selectedItems);
mainMenu();

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
const pickMovie = readlineSync.keyInSelect(movies, "What movies do you like?");
console.log(pickMovie);

selectedItems.movie = movies[pickMovie];
console.log(selectedItems);

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

const nextDestination = readlineSync.keyInSelect(
  movies,
  "Where do you want to visit?"
);
console.log(nextDestination);

selectedItems.nextTrip = countries[nextDestination];
console.log(selectedItems);

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

//  function mainMenu() {
//    const input = readlinesync.question("Type the letter A!");
//    if (input === "A") {
//      console.log("Well done!");
//    } else {
//      console.log("Oops, that wasn't the letter A!");
//      mainMenu();
//    }
//  }
