/* - OBJECTS MODULE -


LESSON 1 - Introduction to Objects

It’s time to learn more about the basic structure that permeates nearly every aspect of JavaScript programming: objects.

You’re probably already more comfortable with objects than you think, because JavaScript loves objects! Many components of the language are actually objects under the hood, and even the parts that aren’t— like strings or numbers— can still act like objects in some instances.

There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities. We can use JavaScript objects to model real-world things, like a basketball, or we can use objects to build the data structures that make the web possible.

At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. You’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making your own!


LESSON 2 - Creating Object Literals */

// Write your fasterShip object literal below
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
    };
  
    /* 1. The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'. */


//LESSON 3 - Accessing Properties

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  
  let crewCount = spaceship.numCrew;
  
  let planetArray = spaceship.flightPath;
  
  /* 1. Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.
  
  2. Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it. */


  //LESSON 4 - Bracket Notation

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  
  let isActive = spaceship['Active Mission'];
  
  console.log(spaceship['Active Mission']);
  
  /* 1. Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
  
  2. Using bracket notation and the propName variable provided, console.log
  () the value of the 'Active Mission' property. */


  // LESSON 5 - Property Assignment

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  
  spaceship.color = 'glorious gold';
  spaceship.numEngines = Math.random(Math.floor()) * 7;
  delete spaceship['Secret Mission'];
  
  /* 1. Reassign the color property of the spaceship object to have a value of 'glorious gold'
  2. Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
  3. Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
  */


  //LESSON 6 - Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

const alienShip = {
  retreat () {
    console.log(retreatMessage)
  }, takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

console.log(alienShip.retreat());
console.log(alienShip.takeOff());

/* 1. Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method retreat() which will console.log() the retreatMessage. 
2. Add another method to your object literal. This method, takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
3. Invoke your two methods: first .retreat() then .takeOff(). */


//LESSON 7 - Nested Objects

let spaceship = {
  passengers: [{
    medic: 'impostor', 
    engineer: 'JS Coder'}],
  telescope: { //In object literals look well to the {} syntax
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] },
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0][0];

console.log(firstPassenger);

/* 
When you want to target an index in an array just put one addition [] per each array 
1. Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
2. Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
3. Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!) 
*/


