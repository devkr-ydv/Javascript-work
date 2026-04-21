let score = true

//console.log(typeof score);
//console.log(typeof(score));
// const {score} =req.body
let valueInNumber = Number(score)
//console.log( valueInNumber);

// for conversion to integer in backend we use Number , following are some cases
// "33" => 33
// "33abc" => NaN
// true => 1
// null => 0
// undefined=> undefined

let isLoggedIn = "Dev"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
 
// 1 => true ; 0=> false
// "" => false ; "Dev" => True

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof (stringNumber))



// ***********Operations***********/
let value = 4;
let negValue = - value
//console.log(negValue)

//console.log(2+2);
//console.log(2%3);
//console.log(2^3);
//console.log(3*3);
//console.log(2-1);
//console.log(2-3);

let str1 = "hello"
let str2 = "Dev"
let str3 = str1 + str2
//console.log(str3)

// console.log("1" + 3);  // string and integer cannt be added
// console.log(1 +"12");
// console.log("1"+1+2) // output is 112 still in string
// console.log(1 +3  +"2"); // now the output is 42 following the rules of conversion the documentation

// we need to write beaitiful code make it preety
// If the string is in the last then the first ones will be added arithmetically and then added as a string 
// If the string is in first the all will be treated as a string

// console.log(true)
// console.log(+true); // outpput is true which we dont need

let num1 , num2, num3
num1 = num3 = num2 = 2 +2
//console.log(num1)  // output is 4 but the code is not readability good

let gameCounter = 100
++gameCounter ;
//console.log(gameCounter);





