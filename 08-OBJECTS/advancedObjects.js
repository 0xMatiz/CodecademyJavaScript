//LESSON 2 - The this Keyword

const robott = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robott.provideInfo());

/*
1. Let’s create a new object to practice using this.

In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.
2. Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:
I am MODEL and my current energy level is ENERGYLEVEL.  
Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!
3. 
*/


//LESSON 3 - Arrow Functions and this

const robots = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robots.checkEnergy();



/*1.Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.

Arrow Functions and "this." method doesnt get along. Because the arrow function makes the "this." method point to its target on a global scope.
This by consecuence returns undefined unless there is a global scope target equal to ours.
*/


//LESSON 4 - Privacy

const robot = {
  _energyLevel: 'high',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

console.log(robot.recharge()); /*It returns output:
Recharged! Energy is currently at high30%.
undefined*/

/*1.Below the robot object, reassign the _energyLevel property to 'high'.

2.Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.

What will happen now that _energyLevel isn’t a number?

Call .recharge() on robot to find out.

Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.*/


//LESSON 5 - Getters

const robbot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robbot.energyLevel);

/*
1.In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

2.Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

Make sure you return the string and not logging it to the console.

3.
If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.

Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

4.Log the result of calling the getter method energyLevel on robot to the console.

Notice that the method will return a formatted response rather than just accessing a property!
*/