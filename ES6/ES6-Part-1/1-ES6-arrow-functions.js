/*
Functions and Variable hoisting:
If a variable or a function is declared then javascript internaly moves them on top of the document
and it appears that you can use them before the are declared.
Be carefull if you initialize the variable or assign the function to a variable then,
they are not moved at the top at runtime and you'll get an exception
*/

//In the below example hoist function is actually moved on top when javascript parse the file
//and so i can hoist() before declaring it.
//in case i use var hoist = function() then it won't work

hoist();

//Accessible as a global variable outside hoist() function
//Output: 20
console.log("hoist function variable a", a);

function hoist() {
    a = 20; //because we don't use var the a variable is assigned to global scope
    var b = 100;
}

//The below will throw an exception ReferenceError: b is not defined 
//console.log("hoist function variable b", b);

//Since it was declared, it is confined to the hoist() function scope.
//We can't print it out outside the confines of the hoist() function.
//Output: ReferenceError: b is not defined


//----------------------------------//

/*
The difference of var and let keyword is scoping.
var is scoped to the nearest function block and let is scoped to the nearest enclosing block,
which can be smaller than a function block. Both are global if outside any block.
*/

let me = 'go';  // globally scoped
var i = 'able'; // globally scoped

console.log(window.me); // undefined cause variables declared with let in global scope, the don't get added in window object
console.log(window.i); // 'able'

function iterateWithLet() {
    //t is *not* visible out here
    console.log('t value before loop:', t);

    for (let t = 0; t < 5; t++) {
        //t is only visible in here (and in the for() parentheses)
        //and there is a separate t variable for each iteration of the loop
    }

    //t is *not* visible out here
    console.log('t value after loop:', t);
}

function iterateWithVar() {
    //z *is* visible out here
    console.log('z value before loop:', z);

    for (var z = 0; z < 5; z++) {
        //z is visible to the whole function
    }

    //z *is* visible out here
    console.log('z value after loop:', z);
}

//iterateWithLet(); //this will throw ReferenceError: t is not defined
iterateWithVar();

//----------------------------------//


let profileId = 12;
{
    let profileId = 152;
}
//console log is 12 because of the block scope of let and const keyword
console.log("ProfileId:", profileId);

const userId = 11;
//userId = 12; //will throw and error

const user = {name:'John',age:23};
user.name = 'Kostas'; //this will work, i can change the properies of a const object but i can't assign it to another object
//user = {name:'Alice',age:30}; //will throw exception


//----------------------------------//


document.addEventListener('click', function () {
    console.log("EventListener with classic function", this); //it will show #document, the item the event is attached.
})

document.addEventListener('click', () => {
    console.log("EventListener with arrow function", this); //it will show Window, arrow functions, inherit the context in which they are running.
})

//----------------------------------//

let payment =
    {
        amount: 20,
        execute: function () {
            console.log("Execute method of an object with classic function", this); //will log the payment object
        },
    };

payment.execute();

let payment2 =
    {
        amount: 20,
        execute: () => {
            console.log("Execute method of an object with arrow function", this); //will log the window object
        },
    };

payment2.execute();

//----------------------------------//

//ATTENTION
//You will not be able to change the context of "this" using bind or call with arrow functions.
//You won't receive any error it just won't work :(
// EXAMPLE

let order = {
    id: 5,
    process: function () {
        return () => { console.log("Process the order with Id:", this.id) };
    }
};

// let order = {
//     id: 5,
//     process: function () {
//         return function() { console.log("Process the order with Id:", this.id) };
//     }
// };

let order2 = {
    id: 22,
}

order.process().bind(order2)(); // if you change the arrow function in order.process object to classic function the output will be 22