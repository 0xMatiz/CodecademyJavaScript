//LESSON 2 - The this Keyword

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

/*
1. Let’s create a new object to practice using this.

In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.
2. Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:
I am MODEL and my current energy level is ENERGYLEVEL.  
Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!
3. 
*/


//LESSON 3 - Arrow Functions and this

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();



/*1.Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.

Arrow Functions and "this." method doesnt get along. Because the arrow function makes the "this." method point to its target on a global scope.
This by consecuence returns undefined unless there is a global scope target equal to ours.
*/


