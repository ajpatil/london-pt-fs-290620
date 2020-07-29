const API = require("./lib/API")("./lib/db.json");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

let recipies = API.read("recipes");

let userName = readlineSync.question("Hey budding chef, whats your name?\n");
while (Number.isInteger(parseInt(userName))) {
  userName = readlineSync.question("Letters only..please try again\n");
}

const recipeRating = () => {
  let currentRating = 0;
};

let dietType = ["vegan", "non-vegetarian"];

function mainMenu() {
  console.log("=========================");
  console.log("=========================");
  console.log(
    chalk.bold.bgRedBright.whiteBright(
      `WELCOME ${userName} TO RECIPES < 10 MINUTES`
    )
  );
  console.log("------------------------");
  console.log(
    chalk.italic.whiteBright(
      `Recipes for all tastes and diet types, all ready under 10 mins`
    )
  );
  console.log("=========================");
  console.log("=========================");

  let dietType = [
    chalk.bold.bgGreen.whiteBright("Vegan"),
    chalk.bold.bgRed("Non-Vegetarian"),
  ];

  let dietIndex = readlineSync.keyInSelect(
    dietType,
    "Do you prefer veg or non-veg?",
    { cancel: "select recipie by tags" }
  );
  showRecipies(dietIndex);
}

mainMenu();

function showRecipies(index) {
  let filteredRecipiesName = [];
  let filteredRecipies = [];
  if (index !== -1) {
    filteredRecipies = recipies.filter((recipie) =>
      recipie.tags.includes(dietType[index])
    );
    filteredRecipiesName = filteredRecipies.map((recipie) => recipie.name);
  } else {
    filteredRecipiesName = Array.from(
      new Set(recipies.reduce((arr, i) => (arr = [...arr, ...i.tags]), []))
    );
  }

  let recipieIndex = readlineSync.keyInSelect(
    filteredRecipiesName,
    "Choose recipie please",
    { cancel: "move back" }
  );
  if (recipieIndex == -1) {
    mainMenu();
  } else {
    recipieRenderer(filteredRecipies[recipieIndex], index);
  }
}

function recipieRenderer(item, index) {
  console.log("=========================");
  console.log("=========================");
  console.log(chalk.italic.bgBlue.whiteBright(item.name));
  console.log("=========================");
  console.log("=========================");

  console.log(chalk.bold.bgGreen.whiteBright("ingredients"));
  item.ingredients.forEach((ingredient) => {
    console.log("-", ingredient);
  });
  console.log(chalk.bold.bgRed("method"));
  item.method.forEach((step) => {
    console.log("-", step);
  });

  let operations = ["delete", "add to favorite", "like"];
  let operationIndex = readlineSync.keyInSelect(
    operations,
    "Choose operation please",
    { cancel: "do nothing" }
  );
  if (operationIndex !== -1) {
    makeOperation(item, operations[operationIndex]);
  }

  showRecipies(index);
}
//show recipes then show recipes based on tags
//
function rate() {
  let rateTheRecipe = readlineSync.keyIn(
    chalk.italic(`Rate the recipe: 1 (Meh!) - 5 (Amazing!)`),
    {
      limit: "$<1-5>",
    }
  );
  if (parseInt(rateTheRecipe) < 3 && foodChoice === "Vegan") {
    console.log(
      `Only ${rateTheRecipe} :(, here are some other recipes you might find more appealing...`
    );

    mainMenu();
    console.log();
  } else {
    console.log(`Woohoo! Its munch time :D`);
    //add happy gif?
  }

  if (readlineSync.keyInYN("Would you like to share the recipe?")) {
    email = readlineSync.questionEMail();
    console.log(`${email} will love this recipe`);
    mainMenu();
  } else {
    console.log("ok...");
    // mainMenu();
  }
}

function makeOperation(item, oper) {
  switch (oper) {
    case "add to favorite":
      let favorites = API.read("favorite");
      console.log(favorites);
      if (favorites.length === 0) {
        API.create("favorite", [item]);
      } else {
        API.update("favorite", [...favorites, item]);
      }
      console.log(item.name, "was added to your favorite");
      break;
    case "delete":
      API.destroy("recipes", item.id);
      console.log(item.name, "was deleted");
      recipies = API.read("recipes");
      break;
  }
}

//Requirements + Ideas:

//+ Ask if user is Vegan or Non-Veg
// Display recipes accordingly
// Ask them to review the recipe: 1-10 - replace old rating  as new number
// Ask them to share with friends: Via email
// Think about how these elements can be coloured to stand out!
// Be able to search through tags as well
// User can modify given recipes?
//Create functions that are called by other functions
