/* - LOOPS -

LESSON 2 - Repeating Tasks Manually

1.Create the variable vacationSpots, and assign its value to an array of three strings naming places you’d like to visit.
Write your code below */
let vacationSpots = ['Japan','New York', 'Germany'];


/* 2. Next, console.log() each item in vacationSpots. Since we don’t know loops yet, we have to console.log() each element in the array separately. */
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

/* 3. Nice work! Now imagine that the vacation list had 100 places on it— logging each array element to the console by hand would be a tedious task! In the next exercise, we will learn how to make things more efficient with for loops. */

//Okay i imagine 😂


/* LESSON 3 - The For Loop

Write your code below

1. Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console. */
for (let looping = 5; looping <11; looping++) {
    console.log(looping);
  }


//LESSON 4 - Looping in Reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >=  0; counter--){
    console.log(counter);
  } 
  
/* 1.Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement. */


//LESSON 5 - Looping through Arrays

const vacationSpotsTwo = ['Bali', 'Paris', 'Tulum'];

// Write your code below

/* 1.  Write a for loop that iterates through our vacationSpots array using i as the iterator variable.
Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console. */
for (let i = 0; i< vacationSpotsTwo.length; i++){
  console.log(`I would love to visit ${vacationSpotsTwo[i]}`);
}


//LESSON 6 - Nested Loops

// Write your code below

/* 1. Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends. */

const bobsFollowers = ['Facundo', 'Marcos', 'Jeremias', 'Pablo'];

/* 2. Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array. */

const tinasFollowers = ['Jeremias', 'Pablo', 'Ivan'];

/* 3. Create a third variable named mutualFollowers and set it to an 
empty array. */

let mutualFollowers = [];

/* 4. Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array. */

for (let a = 0; a < bobsFollowers.length; a++ ){
    for (let b = 0; b < tinasFollowers.length; b++){
        if (bobsFollowers[a] === tinasFollowers[b]){
            console.log(mutualFollowers.push(bobsFollowers[a]));
        }
    }
}


//LESSON 7 - The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

/* 1. Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value. */
let currentCard;

/* 2. Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.
Inside the block of your while loop, add the following line of code:
currentCard = cards[Math.floor(Math.random() * 4)];
Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array. */
while (currentCard !== 'spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

/* 3. Awesome! Your loop is running, but you can’t tell because it doesn’t output anything. Let’s add a console.log() statement to our while block. Inside the block, after you assign currentCard a new value, log currentCard to the console.

For fun you can run your code a few times and see how the output changes! */


//LESSON 8 - Do...While Statements

// Write your code below

/* 1. We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing.
The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0. */
let cupsOfSugarNeeded = 7;
let cupsAdded = 0;

/* 2. We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0.
Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.
In order to help us visualize the output on each iteration of the loop, add a console.log within the do...while block and log the value of cupsAdded. */
do {
  console.log(cupsAdded += 1)
} while (cupsOfSugarNeeded > cupsAdded);


//LESSON 9 - The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

//1. Log each element from rapperArray in a for loop with the iterator variable i.
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]); // The log always goes behind "if"
  if (rapperArray[i] === "Notorious B.I.G.") {
    
    break;
  }
  
}

/* 2. After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints. */
console.log("And if you don't know, now you know.");

/* 3. Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'. Log the element before breaking out of the loop. */
