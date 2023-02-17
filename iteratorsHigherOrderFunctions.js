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