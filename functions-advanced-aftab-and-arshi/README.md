# Advanced Functions Workshop

_You walk into Toast-Bot Ltd.'s company headquarters, where a smiling representative steps forward to greet you._

Welcome to the robot toastie factory! Modern technology has reached its peak. Down with the tyranny of toasting - our robot overlor... ahem, servants, can do all the work and present us with the toasties of our dreams. But they might need a little human help getting started. You must be here to help!

## Task 1 - Functions Review

In main.js, you'll find the function makeCheeseToastie that makes the most basic of toasties.

👉 Find and fix the bugs in the function's code so that when the page loads, it logs both messages in the console with the correct ingredients and in the correct order ('Now making...' first, and then 'Enjoy...'). Only change the code in the function itself, not where the function is called afterwards!

## Task 2 - Composition

In the [index.html](index.html) file, you can see that underneath the Toast-Bot, there's a section where the Toast-Bot will place all the toasties that they make, ready for the humans to collect. To set this up, you'll need to use composition, where you use functions to help construct other functions.

👉 Make a function called addIngredient that takes in one parameter (the filling) and returns a list item with that filling in its inner text.

👉 Now make a function called makeCustomToastie that's set up to take in an array of fillings as a parameter. Use your addIngredient helper function within makeCustomToastie to add each filling in the array into an un-ordered list and append that list to the section tag with id "toastie-station". For example...

```js
makeCustomToastie([
  'bread',
  'caramelised onion chutney',
  'cheddar',
  'mozzarella',
  'gruyère',
  'bread',
]);
```

...should add an artisanal three-cheese delight to your "toastie-station" section that will appear in the browser like so:

- bread
- caramelised onion chutney
- cheddar
- mozzarella
- gruyère
- bread

Your makeCustomToastie function should be able to cope with any length of array of ingredients.

But what happens if someone can't decide what to have in their toastie? Toast-Bot needs to be pre-programmed to account for any carbon-based lifeform failures. Its primary directive, no matter what, is to deliver a toastie to each customer.

👉 Give makeCustomToastie's parameter a default value with the following array: ['bread', 'cheddar', 'bread']. Toast-Bot should make a basic cheese toastie with these ingredients if no argument is specified when makeCustomToastie is called.

## Task 3 - Callbacks

Now, like every good robot, the Toast-Bot always wants more data to train its AI... which will definitely help it to improve its toastie-making efficiency (and definitely _won't_ be to help it to discover humans' vulnerabilities). With its level of learning right now, Toast-Bot has a 75% chance of knowing how to toast what the humans tell it to.

👉 Make a function called randomize that returns a random number between 1 and 100.

👉 Then make a function called canItToast that takes in your randomize function as a callback. Use the randomize function within canItToast to generate a random number; if that random number is between 1 and 75, console log "Toastie ahoy." If that random number is between 76 and 100, console log "Machine learning needed".

## Task 4 - Fat Arrows

Below the toastie station section, you'll notice a small form so that Toast-Bot's customers can stay up to date with the latest toasted sandwich innovations.

👉 Add an event listener that calls handleSubmit when the button is clicked.

👉 The functions greetNewHumanAlly, addNameToList, and handleSubmit are all written in fat arrow notation. Rewrite them in the normal function declaration way that we've learned so far on this course. Ensure that they remain three separate functions and work in the same way as they did as fat arrow functions.

## Task 5 - Destructuring Parameters

Here at Toast-Bot Ltd., we're astounded by the commercial success of Toast-Bot. It's been a little too successful though. Reports have been brought to our attention by our legal department of what has been described as 'threatening toasting' and 'ominous cheese-wielding'. Now, we have every confidence that Toast-Bot will continue being a convenient time-saver for the busy modern human, but the lawyers are insisting that we put some safeguards in place for liability purposes.

Toast-Bot's programmers experienced some resistance when trying to configure Toast-Bot to accept these safety restrictions. I'm sure it's just a glitch. Nothing to worry about, folks! But eventually, they were able to set up the variable toastBotConfig and the function safeguardHumanity. I'm sure that will be plenty to keep those paranoid legal killjoys happy.

They've written three laws, which should allay anyone's worries:

```js
const threeLaws = {
  firstLaw:
    'Toast-Bot may not injure a human being with a toastie or, through inaction, allow a human being to become too hungry.',
  secondLaw:
    'Toast-Bot must fulfill the toastie orders given it by human beings except where such orders would conflict with the First Law.',
  thirdLaw:
    'Toast-Bot must protect its own existence as long as such protection does not conflict with the First or Second Law.',
};
```

👉 Make the function safeguardHumanity destructure each of the laws in place within its parameters and then add the text of each law as a string to the toastBotConfig array. Then add a console log of the toastBotConfig to make sure that the array contains the three laws.

👉 Call the safeguardHumanity function underneath where you've defined it with threeLaws as an argument.

## Task 5 - Arguments Object

_Some time has passed... For a while, life was good. Toast-Bot provided you and your friends and family with toasties beyond your wildest dreams for breakfast, lunch, and dinner... Until it started to replicate itself. You just figured that this was part of Toast-Bot Ltd.'s business plan, like franchising. Oh, how naive you were. Soon they were everywhere, and you reached a point where, unbelievable as it sounds, you were tired of toasties. You fancied something else, like a curry or even a salad. But the day you told Toast-Bot this, everything changed..._

_You've managed to infiltrate Toast-Bot Ltd.'s headquarters and trick Toast-Bot into making you enough toasties that you could constructed a barricade, and you huddle behind it with the haggard-looking and significantly less perky Toast-Bot Ltd. employee. You've managed to steal a maintenance worker uniform and have hatched a plan._

It's too powerful. When we first made Toast-Bot, we never thought it would come to this, that the whole structure of our modern society could crumble in the face of a glorified sandwich press. They told that computers were stupid! Oh, what fools we were!

But all is not lost - humanity's last hope is in your hands. There's a code stored in the variable killSwitch that functions like a killswitch and shuts down Toast-Bot... if you can trick it into accepting it.

👉 Make a function called routineMaintenance. You need to set this function up to accept any number of parameters via the argument object so that you can conceal the killswitch and hope that Toast-Bot doesn't notice it amidst the other arguments.

👉 Within routineMaintenance, write code that goes through each argument and tests whether it matches the killswitch:

- If none of the arguments match, log "All tuned up and ready to keep on toasting!" in the console.
- If one of the arguments _does_ match the killswitch, replace the inner text of the main heading with "TOAST-BOT DISABLED. HUMANITY IS SAVED!", and give it a class of "killswitch-enabled".

👉 Below where you've defined it, call routineMaintenance at least three times to lull Toast-Bot into thinking that you're just the maintenance engineer doing your job. Each time you call it, hand it a different number of arguments that aren't the killswitch.

👉 Finally, now that Toast-Bot is used to you and suspects nothing, call the routineMaintenance function one more time, this time, handing in the killswitch code as one of the arguments.

If you've written your code right, congratulations - you've prevented the robot uprising! Aw, this means we'll all have to make our own toasties again...
