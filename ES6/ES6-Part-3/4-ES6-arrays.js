let prices = [100, 200, 300];

let newPrices = Array.from(prices, p => p + 10);
console.log("New prices:", newPrices);

//----------------------------------//

let increasedPrices = Array.from(prices, function (p) {
    return p * this.increase
}, { increase: 2 })

//the above won't work with arrow function cause in arrow function you can't change the context of "this"

console.log("Increased prices:", increasedPrices);

//----------------------------------//

let values = ["a", "b", "c", "d", "e"];

values.fill("z", 1, 3);
console.log("Using fill in array", values);

//----------------------------------//

let numbers = [1, 2, 3, 4, 5, 6]
let result = numbers.find(v => v > 2); //finds the first element in the array that fullfills the predicate

let result2 = numbers.findIndex(function (value, index, array) {
    console.log(this);
    return value == this;
}, 5);

console.log("Result of find:", result);
console.log("Result of findIndex:", result2);

//----------------------------------//

let ids = [1, 2, 3, 4, 5];

ids.copyWithin(2, 0);
console.log("Copy within:", ids);

//----------------------------------//

let letters = ["a", "b", "c"];

console.log("Array entries", ...letters.entries());
console.log("Array keys", ...letters.keys());

//----------------------------------//

class Bonuses extends Array {
    sum() {
        let total = 0;
        this.map(b => total += b);
        return total;
    }
}

let bonuses = Bonuses.from([1000, 500, 20]);
console.log("Sum bonuses", bonuses.sum());

