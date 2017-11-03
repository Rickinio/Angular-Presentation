/*
DESTRUCTURING
The destructuring assignment syntax is a JavaScript expression
that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/

/*
Destructuring Arrays
EXAMPLES
*/
let names = ["Jack", "Kate", "Brand"];
let [jack, kate, brand] = names;

console.log("names:", names);
console.log("jack element:", jack);

//----------------------------------//

//we can skip an element with an extra comma
let [firstEl, , thirdEl] = names;
console.log("third element:", thirdEl);

//----------------------------------//

let [firstEle, ...names2] = names;
console.log("names2 spread operator:", names2);

//----------------------------------//

/*
Destructuring Objects
EXAMPLES
*/

let carObj = {
    engineMode: "turbo",
    gearMode: "manual"
};

/*
ATTENTION:
The variable names **should match the object's properties**
*/
let { engineMode, gearMode } = carObj;

console.log(engineMode);
console.log(gearMode);

//----------------------------------//

/*
if we want to use different variable names than the prop names we can use the following syntax
*/
let { engineMode: eg, gearMode: ge } = carObj;

console.log(eg);
console.log(ge);

//----------------------------------//

//if we want to declair the new variable earlier like below we need to wrap the destructuring code in parenthesis
let engineNew, gearNew;
({ engineMode: engineNew, gearMode: gearNew } = carObj);

console.log(engineNew);
console.log(gearNew);

//----------------------------------//

/*
We can use destructuring in for of loops like below
*/
for (let [a, b] of [[20, 30]]) {
    console.log(`a: ${a} and b: ${b}`);
}