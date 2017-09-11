let sentence = "The big brown fox";

console.log("Starts with The: ", sentence.startsWith('The'));
console.log("Ends with fox: ", sentence.endsWith('fox'));
console.log("Includes big: ", sentence.includes('big'));

//----------------------------------//

//We can use emojis easily!!
//http://unicode.org/emoji/charts/full-emoji-list.html

console.log("We can now use emojis easily.", "How cool is that \u{1F60E} \u{1F4A9}")

//----------------------------------//

console.log("padEnd", "someText".padEnd(20, "0"));
console.log("padStart", "someText".padStart(20, "0"));

//----------------------------------//

console.log('%c Log with style! \u{1F60E}', 'background: #222; color: #bada55; font-size:20px');