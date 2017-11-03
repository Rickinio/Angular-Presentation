//there is a new way to iterate over enumerables
//the for of syntax
//EXAMPLES

let companies = ["Microsoft", "Apple", "Google"];

for (let c of companies) {
    console.log(c);
}

//----------------------------------//

let letters = "ABCD";

for (let l of letters) {
    console.log(l);
}


//----------------------------------//

/*
The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.
*/

let map = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of map) {
  console.log('Map key value pair:',entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of map) {
  console.log('Map value',value);
}
// 1
// 2
// 3

//----------------------------------//

/*
The Set object lets you store unique values of any type, whether primitive values or object references.
*/

let set = new Set([1, 1, 2, 2, 3, 3]);

for (let value of set) {
  console.log('Set value:',value);
}
// 1
// 2
// 3