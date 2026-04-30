// singleton
// if object is made through literals then there is no singleton
// if object is made through contructor then there is singleton

// Object Literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Dev",
    "full name" : "Dev Krishna Yadav",
    age:22,
    [mySym]: "mykey1", // bracket is important while using symbols otherwise it will remain string even when we want symbol 
    location:"Bhubhaneswar",
    email:"ydev09@gmail.com",
    isLoggedIn : false,

}
// console.log(JsUser.email)
// console.log(JsUser["email"])// we have to  give it in DoubleQuotation as it is a string in JS
// We cannot access "full name" object with dot(.) 
// console.log(JsUser["full name"])// learn this format , it is important for efficiency and syntax
//console.log(JsUser[mySym]) // outptut is mykey1

JsUser.email = "DevInGemini.com"
//Object.freeze(JsUser)
JsUser.age =24
//console.log(JsUser.age)

// No differenatiation with variable of function
JsUser.greeting = function()
{
    console.log("Hello Js User")
}
console.log(JsUser.greeting);// [Function (anonymous)] we get a reference of function
//console.log(JsUser.greeting());

JsUser.greetingTwo = function()
{
console.log(`Hello JsUser ${this.age}`)
}
console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());