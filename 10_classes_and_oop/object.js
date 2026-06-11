function multiplyBy5(num){

    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5);
//console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // Output({}) methods and internal property

function createUser(username, score){
    this.username = username
    this.score = score

}

createUser.prototype.increment = function(){
  this.score++    // Whoever has called ,increase its value  

}
createUser.prototype.printMe = function(){
    //console.log(`Price is ${this.score}`)
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

//console.log(chai);
//console.log(tea);
chai.printMe();

/*
new keyword makes new object in javascript



*/
