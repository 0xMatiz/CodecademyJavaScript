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
