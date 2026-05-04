//var c =300  // global scope
let a = 400
// Curley braces are scope 
// Cureley braces with function and if else is called scope
// Curley braces with object is not called a scope
if(true){
    let a = 10
const b = 20         // block scpoe
var c = 30
//console.log("Inner Value", a);
}


//console.log(a) // Output: ReferenceError: a is not defined
// console.log(b) // Output : ReferenceError: a is not defined
 //console.log(c)// Output: 30
//  var donst work as expected as block scope
// We must avoid var
// Vlaue of block scope must not be available to global scope
 // node in this environment of code is different(global scope)
 // node in the console of browser is different



// Nested Scope

// Icecream rule of small and adult people
function one(){
    const username ="Dev"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // Error : website is not defined c
    //two() // Output : Dev // As inner function can access the variable of outside function


}
//one()

if(true){
    const username ="Dev"
    if(username === "Dev"){
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website); // Error : cant access website outside the curley braces of if

}
//console.log(username); // Error: username cannt be access outside the curley braces of if


//++++++++++++++ interesting +++++++++++++

// Here we are just declaring the function
//addone(5) // Here we can call the function before the declaration of the function
function addone(num){
    return num + 1

}
addone(5)

// Here we are declaring the function and holding it to a variable
//addTwo(4)// There will be error when we try to call the function before its declaration

const addTwo = function(num){
    return num + 2
}
addTwo(5)


//Hoisting = How the  function are declared , where they are stored
//           how the JS treats the variables and how JS makes tree