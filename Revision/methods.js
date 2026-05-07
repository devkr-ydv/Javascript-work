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

function()

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

function ObjectName(objectparameter){
const name = "Krishna"
   console.log(`The name of the following is ${objectparameter.name} and the year of study is ${objectparameter.year}`)

}
   ObjectName(pass)


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

function placement(marks , project){
username:"Dev",
year:"4th"

function prepration(work, study){
time:"5 hours"
console.log(`The study time is ${time} and the name of the student is ${username}`)

}

}


________________________
 Arrow and this 

 const newArrow = (parameter1, parameter2) =>{           // first  way
   let myName:"Dev",
   console.log(`Name of student is ${myName}`)
 }

const newArrow =(num1, num2) => num1 +num2            // second way which is used when there is one line of code
const newArrow =(num1, num2) => (num1 + num2)
 
const newArrow =(num1, num2) =>({name:"Dev"})


______________
 
IIFE (Immediately Invoked Function Execution)
 // Put the function inside parenthesis and no need to give object name for call
  ()();

  (function newType(num1, num2){
  console.log(num1+num2) 
        })();


  (const NewType1 = function(parameter1, parameter2){
      const result = parameter1 * parameter2;
      retutn result;
  
  })();      

(nameoffunction(num1,num2) =>{
  // function deifnition
  } )();


  __________________

  How the JS program is run by engine (node, browser(Window is the gobal object in browser))

  Step1: Creation of Global Execution  => stored in this
  Step2: Phase 1 => Memory Allocation => memory is alloted to all the varibales declared and give them as undefined (give the functoin as definition)
  Step3: Phase 2 => Execution Phase => variables are given value and when the operation step arrives then function call is made then 
          
  * A new daughter global execution is created for the function call that was made (Step 2 and 3 will be done again and now the output value will be achieved )
  * The output value is provided back to the parent Global execution
  * * After the work of daughter execution is done it is deleted 
  * The same will be done for all the function call of the operation
  

  ___________________



*/
console.log("Revise Daily to Get Excellence")
