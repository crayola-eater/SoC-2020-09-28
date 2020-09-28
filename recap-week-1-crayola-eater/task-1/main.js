// **1.1:**
// Write a function that takes in 2 numbers and multiplies them together.
// Using that function, have the answer pop up in an alert.

const mutliplyTwoNumbers = (n1, n2) => n1 * n2;

alert(`5 multiplied by 6 is equal to ${mutliplyTwoNumbers(5, 6)}`);

// **1.2**
// Prompt the user to give you 2 numbers, and save them into variables.

const getNumberFromUser = (promptText) => {
  while (true) {
    const rawInput = prompt(promptText);
    if (!isNaN(rawInput)) {
      return +rawInput;
    }
  }
};

const firstNumber = getNumberFromUser("Please enter a first number.");
const secondNumber = getNumberFromUser("Please enter a second number.");

// **1.3**
// Call the function with those 2 user-provided numbers handed in.

const product = mutliplyTwoNumbers(firstNumber, secondNumber);

// **1.4**
// If the answer is even, have the alert say "It's even!" followed by the answer.
// If the answer is odd, have the alert say "It's odd!" followed by the answer.

if (product % 2 === 0) {
  alert(`It's even! (${firstNumber} x ${secondNumber} = ${product})`);
} else {
  alert(`It's odd! (${firstNumber} x ${secondNumber} = ${product})`);
}
