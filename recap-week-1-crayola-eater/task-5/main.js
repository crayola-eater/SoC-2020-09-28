// **5.1**
// Using the DOM, grab the button with the id of "click-me" and save it to a variable called "button".
// Also grab the h2 with the id of "change-me" and save it to a variable called "header"
const button = document.querySelector("#click-me");
const header = document.querySelector("#change-me");

// **5.2**
// Write a function called "changeHeader" that will take the "header" variable and change the text to "You Changed Me!".
const changeHeader = () => {
  someElement.innerText = "You Changed Me!";
};

// **5.3**
// On the "button" variable, apply an event listener for a click that will run the function you just wrote.
button.addEventListener("click", changeHeader);

// **5.4**
// Back on the "header" variable, add an event listener that will run a function called "changeColor" which will change the color of the button text to blue when you hover the mouse over the header.
const changeColour = () => {
  button.style.color = "blue";
};

header.addEventListener("mouseover", changeColour);
header.addEventListener("mouseout", () => {
  button.style.color = "initial";
});
