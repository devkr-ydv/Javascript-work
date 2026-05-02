// Function means to put the code in package and can take the copy of the package everywhere and make it work


function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");

}
sayMyName// this is reference
//sayMyName() //

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)

// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result

    return num1+ num2
}
//addTwoNumbers(3,6) // 9
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
//console.log(loginUserMessage("Krishna"))
// Return is different than that of print
console.log(loginUserMessage())
