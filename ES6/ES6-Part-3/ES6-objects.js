let objA = {
    a: 1,
};

let objB = {
    b: 2,
};

Object.setPrototypeOf(objA, objB);

console.log("Proberty b in ObjA:", objA.b);

//----------------------------------//

let newObj = Object.assign({}, objA, objB);
console.log("newObj: ", newObj);

let objC = { a: 100 }, objD = { a: 200, b: 5 };
newObj = Object.assign({}, objC, objD); //objD overrides the properties of objC if the already exist or adds the properties if the don't exist
console.log(newObj);

//----------------------------------//

let heroObj = { name: "Batman" }, otherHeroObj = { name: "Superman", ability: "Fly" };

Object.defineProperty(otherHeroObj, "secretPower", {
    value: "LaserEyes",
    enumerable: false //since the secretPower prop is not enumerable the concatHeroes below won't receive that property.
});

let concatHeroes = Object.assign({}, heroObj, otherHeroObj);
console.log("Concat Hero props:", concatHeroes);

//----------------------------------//

let notANumber = NaN;

console.log("notANumber === notAnumber: ", notANumber === notANumber);
console.log("Object.is(notANumber,notANumber): ", Object.is(notANumber, notANumber));

let zero = 0, negativeZero = -0;
console.log("zero === negativeZero: ",zero === negativeZero);
console.log("Object.is(zero, negativeZero): ", Object.is(zero, negativeZero));