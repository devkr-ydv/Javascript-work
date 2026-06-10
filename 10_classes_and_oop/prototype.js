// let myName = "Dev     "

// console.log(myName.truelength);


let myHeroes = ["thor", "spiderman"]



let heroPower = {

    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


Object.prototype.dev = function(){

    console.log(`Dev is present in all objects`);
}

Array.prototype.heyDev = function() {
    console.log(`Dev says hello`);
}
//heroPower.dev()

myHeroes.dev()
myHeroes.heyDev()
//heroPower.heyDev()


// Inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {

    makeVideo: true,

}
const TeachingSupport = {
    isAvaialble: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User      // Teacher can also use the properties of User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // {a can use the properties of b}

let anotherUsername = "ChaiAurCode          "

String.prototype.trueLength= function(){

    console.log(`${this}`);
   
      console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength()

"Dev".trueLength()
"iceTea  ".trueLength()