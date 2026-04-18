const accountId = 144553
let accountEmail = "devinicc@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState ;

//accountId = 2// not allowed
accountEmail = "dev@gmail.com"
accountPassword = "321"  
accountCity = "Delhi"
/*
Prefer not to use var because of issue in scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.log(accountId);