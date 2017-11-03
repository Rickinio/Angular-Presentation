let engine = "turbo";
let gear = "manual";

let car = {
    engine,
    gear
};

//there is a new shorthand to declair objects
//when the value variable of an object has the same name as the key it can be ommited.

console.log("Car:", car);

//----------------------------------//

//Use variable value as key of an object

let engineKey = "engine";
let gearKey = "gear";

let car2 = {
    [engineKey] : "simple",
    [gearKey + "002"]:"automatic",
    printDescription(){
        return "Car description: " + this.engine + ' ' + this.gear;
    }
};

console.log(car2);

//----------------------------------//

let carType = "isCabrio";

let car3 = {
    get [carType] () {
        return true;
    },
    set [carType] (value){

    }
}

console.log("Is cabrio? ",car3.isCabrio);