//MODULE: ITERATORS

//LESSON 2 - The .forEach() Method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

/* 1. Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.
You may use any form of callback you prefer. */

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));


//LESSON 3 - The .map() Method

const animalss = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animalss.map(animalss => {
  return animalss[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumberss = bigNumbers.map(bignumbers => {
  return bignumbers / 100;
  console.log(smallNUmbers);//LESSON 3 - The .map() Method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  return animals[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers / 100;
})


/* 1. Add your code under the animals array and before the line console.log(secretMessage.join(''));
Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage. */

/* 2. Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers. */

})

/* 1. Add your code under the animals array and before the line console.log(secretMessage.join(''));
Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage. */

/* 2. Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers. */


//LESSON 4 - The .filter() Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7;
})
// Call .filter() on favoriteWords below



/* 1. Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const. */

/* 2. Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords. */


//LESSON 5 - The .findIndex() Method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

/* 1. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal. */
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

/* 2. Let’s see if we can find the index of the first animal that starts with the letter 's'.
Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS. */

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
}) /* the line above does this:
return animal[0](search the first character of each animal that is why 'animal' exists, rather than "animals") === 's' (that is equal to 's')
? true : false (checks if this is true, if it is returns a value, if not, doesn't returns anything)

/* "animals" is different from 'animal' in the function because it is a callback function */


//ITERATORS - LESSON 6: The .reduce() Method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); //This adds an initial value of 10 to accumulator

console.log(newSum); 

/* 1. Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.
In main.js, there is an array of numbers, newNumbers.
To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.
You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step! */

/* 2. Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function. */

/* 3. To check the value being used as we iterate through the array, add three statements to the function body of the callback:
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
a return statement that adds accumulator to currentValue. */

/* 4. Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers. */

/* 5. While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.
Add a second argument of 10 to .reduce(). */


//ITERATORS - LESSON 7: Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));

//IT IT IMPORTANT TO CHECK IF A PARENTHESIS IS MISSING!!!

/* 1. In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.
For more information browse MDN’s documentation on .some() . */

/* 2. The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

We’ve used .filter() in a previous exercise, but, for more information browse MDN’s documentation on .filter() . */

/* 3. In the last line of main.js, there is this code:

// console.log(interestingWords.every(word =>        ));
Complete the code between the parentheses to check if every element has more than 5 characters.

Make sure to uncomment (delete the // before) the last line of the program before you run the code.

For more information browse MDN’s documentation on .every() */


//LESSON 8 - Choose the Right Iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.reduce(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

/* 1. Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

2. In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.

3. In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.

4. In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

5. In the fifth method call, replace the word method with a method that will return a boolean value. */