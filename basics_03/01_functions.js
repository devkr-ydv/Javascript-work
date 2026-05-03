// Function means to put the code in package and can take the copy of the package everywhere and make it work


function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");

}
sayMyName// this is reference
//sayMyName() //

 function addTwoNumbers(num1, num2){
     console.log(num1+num2)

 }
 //addTwoNumbers(2,5)// Output : Doesn't return anything
 //console.log(addTwoNumbers(2,4)) // Output : 6

 // For any operation inside function to show in output we must use the return 
function addTwoNumbers(num1, num2){
     let result = num1 + num2;
     return result

    //return num1 + num2
}

//console.log(addTwoNumbers(3,2)) // 9
//addTwoNumbers(3,"6") // 36  As the JS thinks that both are string

const result = addTwoNumbers(2,7);
//console.log("Result:" , result);// Result: undefined
// Printing console doesnt mean that function returns that value


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return

    }
    return`${username}just logged in  `
}
//loginUserMessage("Yadav");
//console.log(loginUserMessage("Krishna"))
// Return is different than that of print


// Shooping Cart
// when we are not aware of the number of parameter to be comeup with

//(...) These three dots means both spread and rest{rest means pack them in one place}

function calculateCartPrice(...num1){
  
return num1
}
//console.log(calculateCartPrice(200, 500, 600)); // output: [ 200, 500, 600 ]

// Now we will learn how to pass an object inside function and use it
const user ={
    name: "Dev",
    price: 199
}
function handleObject(anyobject){
console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

//handleObject(user) // Username is Dev and price is 199
// handleObject({
//     name:"sam",
//     price: 399
// })

// Now we will do array passing inside the function
const myNewArray =[200, 500,600]
function handleArray(getArray){
    return getArray[2]


}
// We need to use console.log because we are just returning the function and we need to use console.log to print it 
console.log(handleArray(myNewArray)); // output:600