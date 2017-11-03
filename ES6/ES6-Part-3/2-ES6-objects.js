/*
The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property)
of a specified object to another object or null.
*/
let objA = {
    a: 1,
};

let objB = {
    b: 2,
};

Object.setPrototypeOf(objA, objB);

console.log("Proberty b in ObjA:", objA.b);

//----------------------------------//
/*
The Object.assign() method is used to copy the values of **all enumerable** own properties
from one or more source objects to a target object. It will return the target object.
SYNTAX:
Object.assign(target, ...sources)
*/

let newObj = Object.assign({}, objA, objB);
console.log("newObj: ", newObj);

let objC = { a: 100 }, objD = { a: 200, b: 5 };
newObj = Object.assign({}, objC, objD); //objD overrides the properties of objC if the already exist or adds the properties if the don't exist
console.log(newObj);

//----------------------------------//

/*
The **Object.defineProperty()** method defines a new property
directly on an object, or modifies an existing property on an object, and returns the object.
*/
let heroObj = { name: "Batman" }, otherHeroObj = { name: "Superman", ability: "Fly" };

Object.defineProperty(otherHeroObj, "secretPower", {
    value: "LaserEyes",
    enumerable: false //since the secretPower prop is not enumerable the concatHeroes below won't receive that property.
});

let concatHeroes = Object.assign({}, heroObj, otherHeroObj);
console.log("Concat Hero props:", concatHeroes);

//----------------------------------//

let notANumber = NaN;

console.log("notANumber === notAnumber: ", notANumber === notANumber); //false
console.log("Object.is(notANumber,notANumber): ", Object.is(notANumber, notANumber)); //true

let zero = 0, negativeZero = -0;
console.log("zero === negativeZero: ",zero === negativeZero); //true
console.log("Object.is(zero, negativeZero): ", Object.is(zero, negativeZero)); //false