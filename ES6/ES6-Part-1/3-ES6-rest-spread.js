/*
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
ATTENTION:Rest parameter must be last formal parameter of the function
*/

let fundingFn = function (startup, ...funding) {
    console.log("startup:", startup);
    console.log("Funding from (array):", funding);
    console.log("Funding from (spread):", ...funding);
}

fundingFn("awesomeStartup", "Entrepreneur", "Espa");

//----------------------------------//

/*
You can use spread operator on an array to easily copy it to a new one
*/

let heroes = ["Batman", "Superman", "Catwoman"];
let newHeroes = [...heroes];
let newHeroesPlusGroot = [...heroes, "Groot"];

console.log("Heroes:", ...heroes);
console.log("New Heroes:", newHeroes);
console.log("New Heroes plus Groot:", newHeroesPlusGroot);

//----------------------------------//

/*
You can use rest operator to pass the values of an array as arguments to a function
*/
var prices = [12, 20, 1, 100];
console.log("Max price:", Math.max(1, 2, 3, 4));
console.log("Max price:", Math.max(...prices));


//----------------------------------//

/*
You can use spread operator break string into chars, no need to use split('') PROFIT :P
*/
var alphabet = ["A", ..."BCD", "E"];
console.log(alphabet);
