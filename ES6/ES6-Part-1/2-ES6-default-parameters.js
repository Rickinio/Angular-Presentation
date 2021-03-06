let getTotal = function (price, tax = price * 0.24) {
    console.log("Get total:", price + tax);
}

getTotal(5);

//----------------------------------//

let baseTax = 0.24;
let getTotal2 = function (price, tax = price * baseTax) {
    console.log("Get total 2:", price + tax);
}

getTotal2(5);

//----------------------------------//

let baseTaxFn = () => 0.24;
let getTotal3 = function (price, tax = price * baseTaxFn()) {
    console.log("Get total 2:", price + tax);
}

getTotal3(5);

//----------------------------------//

let getFullName = function (first = "John", last = "Snow") {
    console.log("FullName:", first + " " + last);
    console.log("Number of arguments", arguments.length);
}

getFullName();
getFullName("More");
getFullName(undefined, "MyLastName"); //Use undefined if you want to use the default value of a parameter

//----------------------------------//

/*
The Function constructor creates a new Function object.
Calling the constructor directly can create functions dynamically,
but suffers from security and performance issues similar to eval.
*/
let createFunction = new Function("value=10","console.log('Create Function:',value);console.log('another instruction')");

createFunction();
createFunction(5);
