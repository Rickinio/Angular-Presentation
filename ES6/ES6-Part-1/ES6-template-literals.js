let someValue = "Kostas";

let literal = `
    This is a multile line,
    text using a template literal
    and my name is ${someValue}
`;

console.log(literal);

//----------------------------------//

//by escaping the dollar sign no interpolation takes place
let amount = 1000;

let literal2 = `The amount is \${amount}`;

console.log(literal2);

//----------------------------------//

let literalId = "003";

let literal3 = `The id is ${"PR-" + literalId}`;

console.log(literal3);

//----------------------------------//

let reverseName = function (segments, ...values) {
    console.log("Segments: ", segments);
    console.log("Values:", values);
    return segments[0] + values[1] + segments[1] + values[0];
}

let firstName = "John";
let lastName = "Snow";

console.log(`My name is ${firstName} and lastName is ${lastName}`);
console.log("reverseName:", reverseName`My name is ${firstName} and lastName is ${lastName}`);

