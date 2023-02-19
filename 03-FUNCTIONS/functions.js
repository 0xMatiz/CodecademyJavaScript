//LESSON 2 - Function Declarations

//Get reminded to water the plants.
function getReminder() {
    console.log('Water the plants.');
  } //Greets in spanish.
  function greetInSpanish() {
    console.log('Buenas tardes.');
  }
  
  /* 1.Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder().
  2. In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'
  3.Let’s create another function that prints a useful Spanish travel phrase to the console.
  
  Using a function declaration, create a function called greetInSpanish().
  4.Add code to the function body of greetInSpanish():
  
  In the function body console.log() the following Spanish phrase to the console: 'Buenas tardes.' */


  //LESSON 4 - Parameters and Arguments

//declares 
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name  + '! We appreciate your business.');
  }
  sayThanks('Cole');
  
  /*1.The sayThanks() function works well, but let’s add the customer’s name in the message.
  
  Add a parameter called name to the function declaration for sayThanks().
  2.With name as a parameter, it can be used as a variable in the function body of sayThanks().
  
  Using name and string concatenation, change the thank you message into the following:
  
  'Thank you for your purchase '+ name + '! We appreciate your business.'
  Copy and paste the above message into your code.
  3.A customer named Cole just purchased something from your online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.*/


  //LESSON 5 - Default Parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs')
{
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

/*1.The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.

Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().

Change the parameters of makeShoppingList() into default parameters :

Assign ‘milk’ as the default value of item1.
Assign ‘bread’ as the default value of item2.
Assign ‘eggs’ as the default value of item3.*/


//LESSON 6 - Return

// Counts the monitors
function monitorCount(rows, columns) {
    return rows * columns;
  }
  const numOfMonitors = monitorCount (5, 4);
  console.log(numOfMonitors);
  
  /*1.Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!
  
  Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
  2.Let’s compute the number of monitors by multiplying rows and columns and then returning the value.
  
  In the function body of the function you just wrote, use the return keyword to return rows * columns.
  3.Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.
  
  Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.
  4.To check that the function worked properly, log numOfMonitors to the console.*/


  //LESSON 7 - Helper Functions

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
  }
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);
  
  /*1.In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price.
  
  Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.
  2.Time to add some code to the function body of costOfMonitors to calculate the total cost.
  
  Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.
  3.We should save the cost to a variable.
  
  Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.
  4.To check that the function worked properly, log totalCost to the console.*/


  //LESSON 8 - Function Expressions

const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
      return true;
    } else if (day !== 'Wednesday') {
      return false;
    }
  }
  console.log(plantNeedsWater('Tuesday'));
  
  /*1.Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:
  
  Create a variable named plantNeedsWater using the const variable keyword.
  Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
  2.Now we need to add some code to the function body of plantNeedsWater():
  
  In the function body add an if conditional that checks day === 'Wednesday'.
  If the conditional is truthy, inside the if code block, use the return keyword to return true.
  2. Now we need to add some code to the function body of plantNeedsWater():
  
  In the function body add an if conditional that checks day === 'Wednesday'.
  If the conditional is truthy, inside the if code block, use the return keyword to return true.
  3.On days that aren’t 'Wednesday', plantNeedsWater() should return false:
  
  Add an else statement after the if statement.
  Inside the else statement use the return keyword to return false.
  4.Call the plantNeedsWater() and pass in 'Tuesday' as an argument.
  5.Let’s check that plantNeedsWater() returned the expected value.
  
  Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.*/


  //LESSON 9 - Arrow Functions

const plantNeedsWaterR = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
  /*1.Change plantNeedsWater() to use arrow function syntax.*/


  //LESSON 10 - Concise Body Arrow Functions

const plantNeedsWatEr = day => day === 'Wednesday' ? true : false;  

/*1.Let’s refactor plantNeedsWatEr() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.*/


