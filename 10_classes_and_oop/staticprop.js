class User{

    constructor (username){
        this.username = username;
    }

    logMe(){

        console.log(`Username: ${this.username}`);
    }
   static createId(){     // User cannt have access to userId (only the system)

        return `123`
    }
}

const dev = new User("Krishna")
//console.log(dev.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
        
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone);