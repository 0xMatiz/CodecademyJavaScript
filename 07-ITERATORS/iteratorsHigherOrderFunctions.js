//MODULE - HIGHER ORDER FUNCTIONS

//LESSON 2 - Functions as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimesOne = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  
/* 1. We’ve defined a function with a very long name: checkThatTwoPlusTwoEqualsFourAMillionTimes(). This function takes a long time to execute. It checks whether 2 + 2 = 4, but it does it a million times (just to be really sure)!
Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with. Assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.  */


//LESSON 2 - Functions as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  
/* 1. We’ve defined a function with a very long name: 
checkThatTwoPlusTwoEqualsFourAMillionTimes(). This function takes a long 
time to execute. It checks whether 2 + 2 = 4, but it does it a million 
times (just to be really sure)!
Using const, declare a shorter-named variable, isTwoPlusTwo that will be 
easier to work with. Assign checkThatTwoPlusTwoEqualsFourAMillionTimes as 
its value.  */
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

//2. Invoke your isTwoPlusTwo() function.
isTwoPlusTwo(console.log(isTwoPlusTwo.name));


//LESSON 3 - Functions as Parameters

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB){
    return checkB;
  } else {
    console.log('inconsistent results');
  }
}

console.log(checkConsistentOutput(addTwo, 4));

/* 1. Here we have a function, addTwo(), that adds 2 to whatever is passed into it. Below that, we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo(). Let’s get started!
To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB:
checkA stores the sum val plus 2.
checkB stores the invocation of the func callback, with val as the argument. */

/* 2. Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'. */

/* 3. Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number. */


//LESSON FINISHED