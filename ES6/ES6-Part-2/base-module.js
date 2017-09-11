//in chrome go to chrome://flags and enable Experimental Web Platform features

console.log("base module loading");
import {carId as Id, engineType} from './module-1.js' //you can use an alias for the imported variable with the as keyword
import geartType from './module-1.js' //you don't need curly braces when imported the default exported variable of a module
import brand from './module-2.js' //module2 has an alternative way to export a default variable
import * as superheroes from './module-3.js' //you can import all exported variables of a module using "*" and save the result in an object
console.log(`The carId is ${Id} and the engine is ${engineType}`);
console.log(`My favorite car is ${brand}`);
console.log(`My favorite hero is ${superheroes.batman}`);

//ATTENTION:
//You can't change the value of a variable that it's imported from a module, the variable is ready only
//Uncomment the code below to test it
//superheroes.batman = "catwoman";

//What you can do is import an object and change the properties of the object, that is permitted.
//EXAMPLE
superheroes.voltron.blueLion = "purpleLion";
console.log(`Voltron blue Lion is ${superheroes.voltron.blueLion}`);