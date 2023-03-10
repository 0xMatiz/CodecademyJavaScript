//LESSON 2 - Create an Array

const hobbies = ['1','2','3'];
console.log(hobbies);

/*
1. Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
2. Use console.log() to print hobbies to the console. 
*/


//LESSON 3 - Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);

console.log(famousSayings[3]); //This returns undefined

/*
1. Individual elements in arrays can also be stored to variables.

Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).

Then use console.log() to print the listItem variable to the console.
2. Now, console.log() the third element in the famousSayings array using bracket notation to access the element.

Do not save the element to a new variable before you log it.
3. Awesome, you can access each element in an array using the index. But what happens if you try to access an index that is beyond the last element?

Try to log the item at index [3] of famousSayings to the console. What is logged to the console?
*/


//LESSON 4 - Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

/*
1. Change the second element of the array groceryList to 'avocados'.
*/


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
const choresOne = ['wash dishes', 'do laundry', 'take out trash'];

// 1. Add two elements to the chores array using .push().
chores.push('organize the house', 'clean the table');
console.log(choresOne);

//LESSON 8 - The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

//1. Use the .pop() method to remove the last element from chores.
const removed = chores.pop();

/* 2. In a line after you called chores.pop(), log chores to the console to make sure it worked. */
console.log(chores);
console.log(removed);

//LESSON 9 - More Array Methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

/* 1. Use the .shift() method to remove the first item from the array 
groceryList. */
groceryList.shift(0);
//console.log(groceryList); //Im comenting this instead of erasing it.

/* 2. Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
After calling .unshift() on groceryList, log groceryList to the console.
You may wish to delete the console.log() statement from the previous 
step. */
groceryList.unshift('popcorn');
console.log(groceryList); //Im comenting this instead of erasing it.

/* 3. You???re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.
Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.
Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line. */
console.log(groceryList.slice(1, 4)); 
// I've put 1 for 'bananas' and put 4 for 'pasta'

/* 4. After calling .slice() on groceryList, log the grocery list to the console one more time.
Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step. */
console.log(groceryList);

/* 5. Let???s find the index of a particular element in groceryList using .indexOf().

Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.) */
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// LESSON 10 - Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
  arr[3] = 'MUTATED';
}

changeArr(concept);

/* 1. In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.
Underneath the function call, log concept to the console to check if this reassignment mutated the array. */
console.log(concept);

/* 2. Let???s double check what happens if we mutate an array using a built-in method inside a function.
Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr. */
function removeElement(newArr) {
  newArr.pop();
} 

//3. Call removeElement() with an argument of concept.
removeElement(concept);

/* 4. 
After calling removeElement(concept), check the value of concept by logging it to console.
Notice that in both cases, the change to the array was maintained outside of the function! */
console.log(concept);

/* LESSON 11 - Nested Arrays

1. Let???s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.
The first array element should hold the elements 1 and 2 in that order.
The second array element should hold the elements 3 and 4 in that order.
The third array element should hold the elements 5 and 6 in that order. */
const numberClustersOne = [[1, 2], [3, 4], [5, 6]];
const targetOne = numberClustersOne[2][1];

/* LESSON 11 - Nested Arrays

1. Let???s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.
The first array element should hold the elements 1 and 2 in that order.
The second array element should hold the elements 3 and 4 in that order.
The third array element should hold the elements 5 and 6 in that order. */
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];