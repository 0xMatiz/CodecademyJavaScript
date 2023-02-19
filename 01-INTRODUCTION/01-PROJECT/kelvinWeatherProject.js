//PROJECT 01 - KELVIN WEATHER

// The forecast today is 293 Kelvin
const Kelvin = 293; 
// Celsius is 273 degrees less than Kelvin
let Celsius = Kelvin - 273; 
// Farenheit Formula
let Farenheit = Celsius * (9/5) + 32; 
// We wanted to round the result
Farenheit = Math.floor(Farenheit);
// Log Farenheit temperature
console.log(`The temperature is ${Farenheit} degrees Fahrenheit.`);
// Convert to Newton
let Newton = Celsius * (33/100); 
// Round down
Newton = Math.floor(Newton);
// Log Newton temperature
console.log(`The temperature is ${Newton} degrees Newton.`)

//console.log(farenheit);
/* 
"M"ath SENSIBLE A MAYUSCULAS
Remember to write ok the phrases
*/

/*
1. The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.

The value saved to kelvin will stay constant. Choose the variable type with this in mind.
2. Write a comment above that explains this line of code.
3. 
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
4. Write a comment above that explains this line of code.
5. Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32

In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.
6. 
Write a comment above that explains this line of code.
7. When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
8. Write a comment above that explains this line of code.
9. Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:

The temperature is TEMPERATURE degrees Fahrenheit.
Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
10. Run your program to see your results!

If you want to check your work, open the hint.
11. By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.

What’s 0 Kelvin in Fahrenheit?
12. 
Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.

If you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console
*/

//PROJECT 01 FINISHED!