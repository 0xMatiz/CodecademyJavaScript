//REVIEW

//1. Checks if you learned and responds with a message
let condStates = 'learned';
//If you learned condStates prints: Very good!
if (condStates === 'learned') {
  console.log('Status of your Javascript knoweledge: Learned!');
} else {
  console.log("You got to keep learning, don't give up");
}


//2. Checks the result and gives you a fortune depending on the result
let numResult = Math.random(Math.round()) *101;
const genieNumber = numResult;
//console.log(numResult);

if (genieNumber <= 30) {
  console.log(`You will earn ${genieNumber} points on a game soon!`);
} else if (genieNumber <= 60 && genieNumber >= 31) {
  console.log(`You will recieve ${genieNumber} dollars this week!`);
} else if (genieNumber <= 100 && genieNumber >= 61) {
  console.log(`Your score on a test will be ${genieNumber}!`);
} else {
  console.log('Wow! Your fortune is unclear.');
}




/*
CONDITIONAL STATEMENTS
Review
Way to go! Here are some of the major concepts for conditionals:

An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
Instructions
In main.js, practice the skills you learned in this lesson.
*/