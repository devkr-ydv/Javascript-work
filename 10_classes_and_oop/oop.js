const user = {
    username: "Dev",
    loginCount: 8,
    signedIn: true,


    getUserDetails:function(){
          
  console.log("Got user details from database:");
     console.log(this);

   }
}


//console.log(user.username);
//console.log(user.getUserDetails());

// new keyword is constructor function
// make multiple instances from 

function User(username, loginCount, isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Dev", 12, true);
const userTwo = new User("Hitesh",13, false )

console.log(userOne);

// new creates an empty object called instance

// (2) constructor function is called due to new keyword (pack the arguments)
// (3)   this keyword has the values of constructor
// (4)                       

