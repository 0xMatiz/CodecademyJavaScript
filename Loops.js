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