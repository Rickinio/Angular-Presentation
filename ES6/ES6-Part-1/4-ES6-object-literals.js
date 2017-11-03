/*
There is a new shorthand to declair objects,
when the value variable of an object has the same name as the key it can be ommited.
*/

let engine = "turbo";
let gear = "manual";

let oldSyntaxCar = {
    engine: engine,
    gear: gear
};

let car = {
    engine,
    gear
};

console.log("Car:", car);

//----------------------------------//

/*
You can now easily use a **computed property** as key of an object
*/

let engineKey = "engine";
let gearKey = "gear";

let car2 = {
    [engineKey]: "simple",
    [gearKey + "002"]: "automatic",
    printDescription() {
        return "Car description: " + this.engine + ' ' + this.gear;
    }
};

console.log(car2);

//----------------------------------//

/*
A property of an object can also refer to a function or a getter or setter method.
*/

let carType = "isCabrio";

let car3 = {
    get [carType]() {
        return true;
    },
    set [carType](value) {
       
    },    
}

console.log("Is cabrio? ", car3.isCabrio);