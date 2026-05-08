
//truthy ( assume that the string have true value, and if string is empty then assume string have false value)
// In case of array empty is taken as true value , 

const userEmail = []

if(userEmail){       // Here we are not checking anything  still the output of if is printed
    console.log("Got user email");  // Output :Got user email
} 
else{
    console.log("Don't have user email"); // Outptut :{}when string is empty
}

// falsy values

// false, 0, -0, BigInt 0n , "", null, undefined, NaN

//truthy values

//true, "0", `false`, " ", [], {}, function (){} // Empty function,

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length=== 0){ // keys convert the object to array then use the length property of array to find the length
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null indefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 // Null Coalescing operator checks the safety of null

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 15  // Output: 10

console.log(val1);

// Ternary Operator

//condition ? true : false

const IceTeaPrice = 100
IceTeaPrice <=89 ? console.log("less than 80") : console.log("More than 80")