/* There are two types of data (1) Primitive and (2) Non Primitive
 
Call by value and call by reference 
 categorisation is done based on the way the data is stored and accessed in memory

 (1)Primitive (call by value (copy is provided to the user and changes made by user is changed in the copy and not the real data)) 
  7 types : String , Number , Boolean , Null , undefined , Symbol(used to make uniqueness)
             BigInt (scientifc values high)

const score = 100
const scoreValue = 100.4
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')


  (2)Reference Type( Non-Primitive)

    these datatype  will get direct reference into the memory
       They are : Array , Objects ,Functions

*/
// const id = Symbol('123')
// const newValue = Symbol('123')
// console.log(id == newValue)


// Array , Functions , Objects
const heros =[ "ironman", "batman", "spiderman"];
 let obj =
 {
    name: "Dev",
    age: 22,
}


//Function

const myFunction = function(){
    console.log("hello world");

}
console.log(typeof )