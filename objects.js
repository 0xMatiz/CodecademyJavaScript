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