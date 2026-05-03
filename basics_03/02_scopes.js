//var c =300  // global scope
let a = 400
// Curley braces are scope 
// Cureley braces with function and if else is called scope
// Curley braces with object is not called a scope
if(true){
    let a = 10
const b = 20         // block scpoe
var c = 30
console.log("Inner Value", a);
}


console.log(a) // Output: ReferenceError: a is not defined
// console.log(b) // Output : ReferenceError: a is not defined
 console.log(c)// Output: 30
//  var donst work as expected as block scope
// We must avoid var
// Vlaue of block scope must not be available to global scope
 // node in this environment of code is different(global scope)
 // node in the console of browser is different
