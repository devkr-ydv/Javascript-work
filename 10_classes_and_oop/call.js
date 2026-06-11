function SetUsername(username){
     // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    
    SetUsername.call(thisusername)     // Explicitely call the function using call
    this.email = email              // .call is used to hold the reference
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);