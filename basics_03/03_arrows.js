const user = {
username: "Dev",
price: 999,

welcomeMessage: function(){
    // 'this' is used to access the current context like username and price
    //Inside the console.log() we cann't simply put username or price
    // console.log(`${this.username} , Welcome to website`);
    // console.log(this);

}

}
// user.welcomeMessage()  // 
// user.username ="sam" // sam is our context and now the context is changed from dev to sam
// user.welcomeMessage()
 //console.log(this) // output: {} , because in node the global context is empty

 // Previously js was run in browser as engine 
 // Now we took out the engine and named it as node , etc
 // When the engine runs on the browser the most global object is Window



// this doesnt work inside function 
// this works in object

// function chai(){
//     let username ="Dev"
//    // console.log(this.username); // Undefined
// }
// chai(); // This inside function as console

// Defining the arrow function (remove the function ad put arrow)
const chai = () =>{
    let username ="Dev"

console.log(this); // This cannot work in function and arrow
}
//chai()


// // Now serious about the arrow function
// const addTwo = (num1, num2)=>{
// return num1 + num2

// }

// Now implicit return   
//const addTwo = (num1, num2)=> num1 + num2
//const addTwo = (num1, num2)=> (num1 + num2)
const addTwo = (num1, num2)=> ({username:"Dev"})



console.log(addTwo(3,5)); //8

const myArray =[2,5,4,3,2,2]
//myArray.forEach(() =>)