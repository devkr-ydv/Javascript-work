
const dev = "123re"
const repocount = "qwe"
//console.log(`The value of string is ${dev} and my repo count is ${repocount}`);
//console.log("hello")

const gameName = new String('devh-c')  // declaring the string
// console.log(gameName[0]);
// console.log(gameName[2]);
// console.log(gameName[5]);
//console.log(gameName.length);
//console.log(gameName.toLowerCase())

// Functions or methods to make work easy in string
// .length , .toUpperCase , .toLowerCase
//console.log(gameName)// here the change is made in copy of gameName and not in the  original file due to stack memory operation of String (call by value)
// console.log(gameName.charAt(3)); // output is h
// console.log(gameName.indexOf('c')); // output is 4


// Now we need to break and sanitize the string
const newString = gameName.substring(0,5) // output is devh- index 5 will not be included in the output
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// Trim and replace method
const newStringOne = "   dev  "
//console.log(newStringOne) 
// Trim removes all the extra unwanted spaces in the start and end

//console.log(newStringOne.trim());

const url = " httsps://dev.com/devkri%20shnayadav"
// replace means search it and replace with something else
// include is used to check whether a keyboard is present or not

//console.log(url.replace('%20','-'))

console.log(gameName.split('-'));

console.log(`Hello my work is to do ${gameName} and the valuse is ${newStringOne}`);

// Some fnc of strings are charAt() , toUpperCase(), .length , split(), replace(), trim() , valurOf(),indexOf('')
