// promises needs to be made

// promise is object representing eventual completion

// historically promise was also used Q and BlueBird libraries

const promiseOne = new Promise(function(resolve, reject){
// Do an async rtask
// DB Calls, cryptography, network

 setTimeout(function(){

    console.log('Async task is complete');
    resolve();  
},1000)
})

// then() has connection to resolve
promiseOne.then(function(){      // Consumption of promise is done here

console.log("Promise Consumed");  // Function automatically receives an argument whose work is to return the values of previous works

})


// fetch('https://something.com')

new Promise (function(resolve, reject){

    setTimeout(function(){
     console.log("Async task 2");
     resolve();

    }, 1000)


}).then(function(){
     
  console.log("Async 2 resolved");

    })

    const promiseThree = new Promise(function(resolve, reject) {

     setTimeout(function(){


        resolve({username: "Chai", email: "chai@example.com"})

     },1000)


    })

    promiseThree.then(function(user){   // parameter of resolve are available here

         console.log(user);
    })


    const promiseFour = new Promise(function(resolve, reject){

  setTimeout(function(){
     let error = true
     if(!error){
        resolve({username:"Dev", class:"B.Tech"})
     }
     else{
        reject('ERROR: Something went wrong')
     }
   

  },1000)

    })

    promiseFour
    .then((user)=>{

     console.log(user);
      return user.username
    })
    .then(function(username){
      
        console.log(username);
    })
    .catch(function(error){
     console.log(error);
    
    }).finally(() => console.log("The promise is either resolved or rejected"))

    const promiseFive = new Promise(function(resolve, reject){

       setTimeout(function(){
       let error = true
       if(!error){
        resolve({username:"Deb", pass:"!@S"})

       }
       else{
        reject('ERROR:JS went wrong')
       }

       }, 1000)

    });

   async function consumePromiseFive(){

    const response = await promiseFive
   }
   consumePromiseFive()