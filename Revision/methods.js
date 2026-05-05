/*Strings ,  Number , Math , Integer ,bigint, boolean , conversion, comparison, datatypes , Memory(Stack and Heap Memory)
Array , Date&Time
___________
node.js
declaration as compilation
console.log(Math.floor(Math.random()*((max-min)+1))+min) // used in any games of 
__________
Number 
  .valueof(), .toString(), .toFixed(), .toprecision(), .toLocaleString('en-IN'), 
_________
Math
Math.random() , Math.floor() , Math.celi(), Math.sqrt() , Math.abs(), Math.round(),
_____________
String()
let StringOne = "abcdefgl"

.concat(), .toUpperCase(), .toLowerCase()," " , .charAt("2"), .indexOf("e"), .trim(), .replace('e','z') 

____________
Array[]
indexOf(), .join() , .push(), .pop(), .unshift(), .shift(),
 .includes(a) { to check whether a exist in array or not}
  
 .slice(a,b){make a new array from a to b-1 index and no change is made in original array in memory}
 .splice(a,b) {make a new array from a to b included and change is also made in original array in memory}

 ArrayX.push(ArrayY)
 ArrayX.concat(ArrayY)
 // Spread is not a method but a operation , way of working // console.log([...marvel_heroes,...dc_heroes])
 // Spread is used when there is more than one array to combine
 

 Array.isArray("hello")// to check if it is an array
 Array.from("Dev")//convert from string to array
Array.of(score1, score2, score3)

________________________________
Objects

const Myself = {
name:"dev",
age:22,
course:"b.tech"
}

console.log(`Hello my name is this ${call the method here} `)
console.log(ObjectName["method"])
 JsUser.greetings = function(){}                                  //Function Works as variable in JS



const newObj = Object.assign({}, obj1, obj2, obj3)
const myObj = {...obj1, ...obj2, ...obj3}

// Destructuring
const {name:n, age:a} = Myself
console.log(a)

______________________________

functions

function addTwoNumbers(num1, num2){
        return num1 +num2

}
console.log(addTwoNumbers(3,6));

Pass object inside the function
const pass ={
name:"Dev",
course:"Computer Science",
year:"4th year"
}

function passObject(objectvalue){
   console.log(`The name of the following is ${objectvalue.name} and the year of study is ${objectvalue.year}`)

}
   passObject(pass)


Pass Array inside the function
const newArray = [200, 400, 500 600]

function workArray(newvalue){
return newvalue[1]
}
console.log(workArray(newArray));

___________________________________
Global and Block Scope

scope are the things inside the curley braces of function and object

Nested Fucntion


















*/
console.log("Revise Daily to Get Excellence")
