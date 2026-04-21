//**************Comparison****/
// console.log(2>1);
// console.log(2>=3);
// console.log(2 == 1);

// Now comparing different data types
// We must avoid these kinds of 

//console.log("2">3); // output is false (JS converted the string to integer to be compared)
// Typescript just gives a set of rules which we need the follow in JS
//console.log("3">1);
//console.log("02">4);
//console.log(null ==0);  //  output false
/* Here the comparison operator converts the null to a number (0) now 0 can be compared
But for the equality check operator there is no conversion of null to number
*/  

// We must avoid these kinds of comparion , can make confusion
// Follow clean code
// console.log(null > 0); // false
// console.log(null < 0);  //false
// console.log(null >= 0); // true

// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log(undefined <=2)

// == equality check

// === (strict check) Check the values strictly , also check the data type

// console.log("3" === 3) // output is false as strict check and datatype must be same for checking
// console.log("3" == 3)  // output is true as there will be conversions
