//LESSON 5 - Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

/* 1. Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.
Log the updated array, condiments, to the console. */

condiments[0] = 'Mayo';
console.log(condiments);

/* 2. Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']
Log the result to the console.
Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword. */

condiments = ['Mayo'];
console.log(condiments);

/* 3. Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.
Log the updated array to the console. */

utensils[3] = 'Spoon';
console.log(utensils);

//LESSON 6 - The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

//1. Find the length of the objectives array and log it to the console.
console.log(objectives.length);

//LESSON 7 - The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

// 1. Add two elements to the chores array using .push().
chores.push('organize the house', 'clean the table');
console.log(chores);

//LESSON 8 - The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

//1. Use the .pop() method to remove the last element from chores.
const removed = chores.pop();

/* 2. In a line after you called chores.pop(), log chores to the console to make sure it worked. */
console.log(chores);
console.log(removed);

//LESSON 9