/*
We can now create template literal using the backtick instead of quotes. No need for underscore.js anymore :)
Also React uses this syntax heavily.
*/

let someValue = "Kostas";

let literal = `
    This is a multile line,
    text using a template literal
    and my name is ${someValue}
`;

console.log(literal);

//----------------------------------//

/*
By escaping the dollar sign no interpolation takes place
*/
let amount = 1000;

let literal2 = `The amount is \${amount}`;

console.log(literal2);

//----------------------------------//

let literalId = "003";

let literal3 = `The id is ${"PR-" + literalId}`;

console.log(literal3);

//----------------------------------//
let firstName = "John";
let lastName = "Snow";

console.log(`My name is ${firstName} and lastName is ${lastName}`);

/*
You can use your own rules on how to parse the template literal
using a function like below.
Segments are the string literals and values are the interpolated strings
*/

let reverseName = function (segments, ...values) {
    console.log("Segments: ", segments);
    console.log("Values:", values);
    return segments[0] + values[1] + segments[1] + values[0];
}
/*
My name is --segments[0]
and lastName is --segments[1]
 ${firstName} --values[0]
 ${lastName} --values[1]
*/
console.log("reverseName:", reverseName`My name is ${firstName} and lastName is ${lastName}`);

