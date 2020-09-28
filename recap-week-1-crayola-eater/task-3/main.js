/* **Task 3 - Arrays**

**3.1**
Create an array and assign to a variable called 'vegetables'. 
Add a vegetable to element 1 but leave elements 2 and 3 blank. 
Then add 4 more veges after that. */

const vegetables = [
  "cauliflower",
  ,
  ,
  "radishes",
  "zucchini",
  "beetroot",
  "spinach",
];

/* **3.2**
Now, use the index numbers for the 2 missing elements to add 2 more 
values for these.  */
vegetables[1] = "garlic";
vegetables[2] = "kale";

/* **3.3**
Work out the length of this array and add it to a variable called vegesLength. */
const vegesLength = vegetables.length;

/* **3.4**
Now create a new variable called 'fruits'. Create a new array with 4 fruits 
in and assign this to the variable. Check the length of this too and assign it 
to fruitsLength */
const fruits = ["apple", "pear", "orange", "peach"];
const fruitsLength = fruits.length;

/* **3.5**
Using spread syntax, spread out the vegetables and the fruits arrays and 
then add assign them to a new variable called fruityVeg. Find out the length of 
this and compare it to the addition of the lengths of other two variables so that 
it returns true (assuming they are the same length!)  */

const fruityVeg = [...fruits, ...vegetables];

console.log("Task 3.5", {
  addedLengthOfFruitsAndVeges: fruits.length + vegetables.length,
  fruityVegLength: fruityVeg.length,
  areLengthsEqual: fruityVeg.length === fruits.length + vegetables.length,
});

/* **3.6**
Finally, loop over this new array and add "I like" at the start of each of 
the values. */

for (let i = 0; i < fruityVeg.length; i++) {
  fruityVeg[i] = `I like ${fruityVeg[i]}.`;
}
