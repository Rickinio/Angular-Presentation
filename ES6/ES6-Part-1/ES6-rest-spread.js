let fundingFn = function (startup, ...funding) {
    console.log("Funding from (array):", funding);
    console.log("Funding from (spread):", ...funding);
}

fundingFn("awesomeStartup", "Angel Investors", "Espa");

//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

//----------------------------------//

let heroes = ["Batman", "Superman", "Catwoman"];
let newHeroes = [...heroes];
let newHeroesPlusGroot = [...heroes, "Groot"];

console.log("Heroes:", ...heroes);
console.log("New Heroes:", newHeroes);
console.log("New Heroes plus Groot:", newHeroesPlusGroot);

//We can use the spread syntax to copy an array to a new one

//----------------------------------//

var prices = [12, 20, 1, 100];
console.log("Max price:", Math.max(...prices));

//----------------------------------//

var alphabet = ["A", ..."BCD", "E"];
console.log(alphabet);
