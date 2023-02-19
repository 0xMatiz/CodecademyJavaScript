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

let spaceshipp = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  
  let crewCount = spaceshipp.numCrew;
  
  let planetArray = spaceshipp.flightPath;
  
  /* 1. Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.
  
  2. Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it. */


  //LESSON 4 - Bracket Notation

let spaceshipss = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  
  let isActive = spaceshipss['Active Mission'];
  
  console.log(spaceshipss['Active Mission']);
  
  /* 1. Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
  
  2. Using bracket notation and the propName variable provided, console.log
  () the value of the 'Active Mission' property. */


  // LESSON 5 - Property Assignment

let spaceships = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  
  spaceships.color = 'glorious gold';
  spaceships.numEngines = Math.random(Math.floor()) * 7;
  delete spaceships['Secret Mission'];
  
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

let spaceshiP = {
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

let capFave = spaceshiP.crew.captain['favorite foods'][0];

let firstPassenger = spaceshiP.passengers[0][0];

console.log(firstPassenger);

/* 
When you want to target an index in an array just put one addition [] per each array 
1. Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
2. Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
3. Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!) 
*/


//LESSON 8 - Pass By Reference

let spaceShip = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = spaceShip => {
 spaceShip['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
  obj.disabled = true;
};
/* Whenever you declare a function, "spaceship" or "obj" could have any name you want, you are going to change it later anyways. 
Now when we put real object name like in the function call below, that value is the one who the function is going to target*/
greenEnergy(spaceShip);
remotelyDisable(spaceShip);

console.log(spaceShip);

/*
1. Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
2. Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.
3. Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.
*/


//LESSON 9 - Looping Through Objects

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below

for (let crewMember in spaceship.crew) { //below it takes the first index
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
};

for (let crewMember in spaceship.crew) { //below we put 2 different index
console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
};


/* 
1. Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
2. Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
3. Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'. 
*/

//OBJECTS LESSON FINISHED!!!