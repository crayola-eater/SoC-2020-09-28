// 🌟 Task 1:

// 👉 Find and fix the bugs in the function's code so that when the page loads, it logs both messages in the console with the correct ingredients and in the correct order ('Now making...' first, and then 'Enjoy...'). Only change the code in the function itself, not where the function is called afterwards!
function makeCheeseToastie(bread = "sourdough", cheese = "mature cheddar") {
  console.log(`Now making your ${bread} and ${cheese} toastie...`);
  return `Enjoy your ${bread} and ${cheese} toastie!`;
}

console.log(makeCheeseToastie("sourdough", "mature cheddar"));

// 🌟 Task 2:
// 👉 Make a function called addIngredient that takes in one parameter (the filling) and returns a list item with that filling in its inner text.
function addIngredient(filling) {
  const li = document.createElement("li");
  li.innerText = filling;
  return li;
}

// 👉 Now make a function called makeCustomToastie that's set up to take in an array of fillings as a parameter. Use your addIngredient helper function within makeCustomToastie to add each filling in the array into an un-ordered list and append that list to the section tag with id "toastie-station". For example...
// 👉 Give makeCustomToastie's parameter a default value with the following array: ['bread', 'cheddar', 'bread']. Toast-Bot should make a basic cheese toastie with these ingredients if no argument is specified when makeCustomToastie is called.
function makeCustomToastie(fillings = ["bread", "cheddar", "bread"]) {
  const ul = document.createElement("ul");
  for (let i = 0; i < fillings.length; i++) {
    const li = addIngredient(fillings[i]);
    ul.appendChild(li);
  }
  const section = document.querySelector("#toastie-station");
  section.appendChild(ul);
}

makeCustomToastie([
  "bread",
  "caramelised onion chutney",
  "cheddar",
  "mozzarella",
  "gruyère",
  "bread",
]);

makeCustomToastie();

// 🌟 Task 3:

// 👉 Make a function called randomize that returns a random number between 1 and 100.
function randomize() {
  return Math.floor(Math.random() * 100) + 1;
}

// 👉 Then make a function called canItToast that takes in your randomize function as a callback. Use the randomize function within canItToast to generate a random number; if that random number is between 1 and 75, console log "Toastie ahoy." If that random number is between 76 and 100, console log "Machine learning needed".
function canItToast(randomNumberFunction) {
  let randomNumber = randomNumberFunction();
  if (randomNumber >= 1 && randomNumber <= 75) {
    console.log("Toastie ahoy.");
  } else if (randomNumber >= 76 && randomNumber <= 100) {
    console.log("Machine learning needed");
  }
}

// 🌟 Task 4:

let favorableHumans = [];

// 👉 The functions greetNewHumanAlly, addNameToList, and handleSubmit are all written in fat arrow notation. Rewrite them in the normal function declaration way that we've learned so far on this course. Ensure that they remain three separate functions and work in the same way as they did as fat arrow functions.
function greetNewHumanAlly(name) {
  console.log(`Greetings, ${name}. Have a toastie.`);
}

function addNameToList(name, email) {
  return [...favorableHumans, { name, email }];
}

function handleSubmit() {
  const newName = document.querySelector("#name-input").value;
  const newEmail = document.querySelector("#email-input").value;
  greetNewHumanAlly(newName);
  favorableHumans = addNameToList(newName, newEmail);
  console.log(favorableHumans);
}

// 👉 Add an event listener that calls handleSubmit when the button is clicked.
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", handleSubmit);

// 🌟 Task 5.1:
const threeLaws = {
  firstLaw:
    "Toast-Bot may not injure a human being with a toastie or, through inaction, allow a human being to become too hungry.",
  secondLaw:
    "Toast-Bot must fulfill the toastie orders given it by human beings except where such orders would conflict with the First Law.",
  thirdLaw:
    "Toast-Bot must protect its own existence as long as such protection does not conflict with the First or Second Law.",
};

let toastBotConfig = [];

// 👉 Make the function safeguardHumanity destructure each of the laws in place within its parameters and then add the text of each law as a string to the toastBotConfig array. Then add a console log of the toastBotConfig to make sure that the array contains the three laws.
function safeguardHumanity({ firstLaw, secondLaw, thirdLaw }) {
  toastBotConfig = [firstLaw, secondLaw, thirdLaw];
  console.log(toastBotConfig);
}

// 👉 Call the safeguardHumanity function underneath where you've defined it with threeLaws as an argument.
safeguardHumanity(threeLaws);

// 🌟 Task 5.2:
const killSwitch = 70457;

// 👉 Make a function called routineMaintenance. You need to set this function up to accept any number of parameters via the argument object so that you can conceal the killswitch and hope that Toast-Bot doesn't notice it amidst the other arguments.
/*
  👉 Within routineMaintenance, write code that goes through each argument and tests whether it matches the killswitch:
  - If none of the arguments match, log "All tuned up and ready to keep on toasting!" in the console.
  - If one of the arguments _does_ match the killswitch, replace the inner text of the main heading with "TOAST-BOT DISABLED. HUMANITY IS SAVED!", and give it a class of "killswitch-enabled".
*/
function routineMaintenance() {
  for (let i = 0; i < arguments.length; i++) {
    if (killSwitch === arguments[i]) {
      const mainHeading = document.querySelector("#main-heading");
      mainHeading.innerText = "TOAST-BOT DISABLED. HUMANITY IS SAVED!";
      mainHeading.classList.add("killswitch-enabled");
      return;
    }
  }
  console.log("All tuned up and ready to keep on toasting!");
}

// 👉 Below where you've defined it, call routineMaintenance at least three times to lull Toast-Bot into thinking that you're just the maintenance engineer doing your job. Each time you call it, hand it a different number of arguments that aren't the killswitch.
routineMaintenance(0);
routineMaintenance(0, 1);
routineMaintenance(0, 1, 2);

// 👉 Finally, now that Toast-Bot is used to you and suspects nothing, call the routineMaintenance function one more time, this time, handing in the killswitch code as one of the arguments.
routineMaintenance(0, 1, 2, killSwitch);
