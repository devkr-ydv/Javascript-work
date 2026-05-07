// All code should not be running at once
// Different code for logged in and logged out
// This is control flow or logic flow to make which code to run

//if
if(true){
//scope

}
// if (flase){

//       // this code will not be executed as in (if) only true is executed
// }
// const isUserLoggedIn = true
// const temp = 54
// if(temp < 50){
//                             // We need to bring true anyhow to the if passing
// console.log("temperature is less than 50")
// }
// else{
//     console.log("Temperature is more than fifty brother")
// }
// console.log("Temp is more than 50") // THis will be executed everytime
//< , >, <=, >=, ==, != , ===

// ---------
// scope
// const score = 50
// if (score > 20){
//     const power = "fly"
//     console.log(`User power:${power}`)
// }
// console.log(`User power:${power}`)//   This cannt be run outside the block of if


// Short Hand notation
// const balance = 1000

// //if(balance >500) console.log("test");  // This will be in one line only

// // nested conditions
// if(balance < 500){
// console.log("less than");

// } else if(balance < 750){
// console.log("less then 750")
// } else if (balance < 900){
//     console.log("Less than 900")
// }

// else{
//     console.log("Less than 1200")
// }


// We do online shopping and create account

const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){

    console.log(`Allow to do shopping`);
}
if(loggedInFromGoggle || loggedInFromEmail){
console.log(`User Logged In`);

}
 