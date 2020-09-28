// **4.1**
// Use the DOM to select the div with the id of "task-container" and save it to a variable called "container".
const container = document.querySelector("#task-container");

// **4.2**
// Create a new element of your choosing (preferably one that will hold text) and save that to a variable called "myElement".
const myElement = document.createElement("p");

// **4.3**
// Set the text of "myElement" to be anything you like, go wild!
myElement.innerText = "Some interesting text.";

// **4.4**
// Append "myElement" to the div that you saved earlier.
container.appendChild(myElement);

// **4.5**
// Change one of the style properties on that new element using the DOM. (e.g color, text-decoration, font-size, etc...)
myElement.style.fontSize = "5rem";

// **4.6**
// Change the title of the document to "Wahoo!" using the DOM.
document.title = "Wahoo!";
