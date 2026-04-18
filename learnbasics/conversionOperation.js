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
console.log(booleanIsLoggedIn);
 
// 1 => true ; 0=> false
// "" => false ; "Dev" => True

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof (stringNumber))
