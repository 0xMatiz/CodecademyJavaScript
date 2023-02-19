//LESSON 2 - If Statement

let saleS = true;
saleS = false;
if (sale) {
  console.log('Time to buy!');
}

/*
1. Using the let keyword, declare a variable named sale. Assign the value true to it.
2. Now create an if statement. Provide the if statement a condition of sale.

Inside the code block of the if statement, console.log() the string 'Time to buy!'.
3. Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.

Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.
*/


//LESSON 3 - If...Else Statements

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

/*
1. Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'
*/


//LESSON 4 - Comparison Operators

let hungerLevel = 7;
if(hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

/*
1. Using let, create a variable named hungerLevel and set it equal to 7.
2. Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.

After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.
*/


//LESSON 5 - Logical Operators

let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' || tirednessLevel > 8) {
  console.log('time to sleep');
  } else {
    console.log('not bed time yet');
  }

/*
1. In main.js there are two variables mood and tirednessLevel.

Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.

If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.

After you press “Run”, play around with the || operator and the ! operator! What happens if you negate the value of the entire statement with ! and switch to || instead of &&?
*/


//LESSON 6 - Truthy and Falsy

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhraseS = '';

if (favoritePhraseS) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/*
1. Change the value of wordCount so that it is truthy. This value should still be a number.

After you make this change and run your code, 'Great! You've started your work!' should log to the console.
2. 
Change the value of favoritePhrase so that it is still a string but falsy.

After you make this change and run your code, 'This string is definitely empty.' should log to the console.
*/


//LESSON 7 - Truthy and Falsy Assignment

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

/*
1. Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step.

Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.
2. Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'.

What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.
*/


//LESSON 8 - Ternary Operator

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

/*
1. Refactor, or edit, the first if...else block to use a ternary operator.
2. Refactor the second if...else block to use a ternary operator.
3. Refactor the third if...else block to use a ternary operator.
*/


//LESSON 9 - Else If Statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') { 
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

/*
1. Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen!

In main.js there is already an if...else statement in place. Let’s add an else if statement that checks if season is equal to 'winter'.

Inside the code block of the else if statement, add a console.log() that prints the string 'It\'s winter! Everything is covered in snow.'.

Make sure that the structure uses if, else if, and else.
2. Add another else if statement that checks if season is equal to 'fall'.

Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s fall! Leaves are falling!'.
3. Add a final else if statement that checks if season is equal to 'summer'.

Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s sunny and warm because it\'s summer!'.
*/


//LESSON 10 - The switch keyword

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
  }

  /*
  1. Let’s write a switch statement to decide what medal to award an athlete.

athleteFinalPosition is already defined at the top of main.js. So start by writing a switch statement with athleteFinalPosition as its expression.
  2. Inside the switch statement, add three cases:

The first case checks for the value 'first place'
If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!'
The second case checks for the value 'second place'
If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!'
The third case checks for the value 'third place'
If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!'
Remember to add a break after each console.log().
  3. Now, add a default statement at the end of the switch that uses console.log() to print 'No medal awarded.'.

If athleteFinalPosition does not equal any value of our cases, then the string 'No medal awarded.' is logged to the console.

Remember to add the break keyword at the end of the default case.
  */