class Hero {

    constructor() {
        console.log('Hero constructor');
    }

    showSuperPower() {
        return "Fly"
    }
}

let hero = new Hero();

console.log("Hero type: ", typeof Hero);
console.log("hero type: ", typeof hero);
console.log("Instance of Hero: ", hero instanceof Hero);
let isPrototypePower = hero.showSuperPower === Hero.prototype.showSuperPower
console.log(isPrototypePower);

//----------------------------------//

class SuperHero extends Hero {
    constructor() {
        super(); //if we use a constructor then super must be the first call inside it.
        console.log('SuperHero constructor');
    }

    showSuperPower() {
        return super.showSuperPower() + " super high";
    }
}

let superHero = new SuperHero();
console.log(superHero.showSuperPower());

//----------------------------------//

class Car {
    constructor(){
        this.brand = "BMW";
        let otherBrand = "LOTUS";
    }
}

class HybridCar extends Car{
    constructor(){
        super();
    }
}

let hybridCar = new HybridCar();
console.log(hybridCar.brand); //using this.brand we assign an instance property
console.log(hybridCar.otherBrand); // logs undefined using let the variable is getting out of scope pretty quickly

//----------------------------------//

class Dog {
    static bark(){
        return "Woof";
    }

    //static let name = "Milu"; // we only have static methods :(        
}

//if you want static properties you can do
Dog.name = "Milu";

console.log(Dog.bark());

