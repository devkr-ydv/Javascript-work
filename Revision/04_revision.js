/*


task queue
promise (The task is not completed now but promised that it will be completed eventually, in future)
  Three state (1) pending, (2) fulfilled, (3) rejected

File is not accessed directly , kernel does it and it takes time


js is focused on objects and not classes

_________________________________________________________________
Promise Revision and also of fetch
API is the talking medium between two things

(1) backend and frontend
(2) my frontend , others backend
(3) connection btw things


const PromiseOne =  new Promise(function(resolve, reject){

  setTimeout(function(){
  
  console.log("Hello Dev");
  resolve({name:"Dev", branch:"CSE"})
   }, 1000)

})

PromiseOne.then(function(values){

console.log(values);
return values.branch;
})
.then(function(branch){


 console.log(branch)
})

const PromiseThree = new Promise(function(resolve, reject){

  setTimeout(function(){
    console.log("Hello Dev");
	let error = true;
	if(!error){

	resolve({course:"javascript", shortform:"js"})
	}
	else{
	   reject("Error:", );
	  }
  
   },1000)


})

++++++++++++
1st way of solving this

PromiseThree.then(function(values){
  
  console.log(values)
  return values.shortform

 })
 .then(function(shortform){
 
   console.log(shortform)
 })
 .catch(function(error){
   console.log("There is error")
 })
 
 
 ++++++++++++
 2nd way of solving this
 
 async function consumePromiseThree(){
try{
   const response = await PromiseThree ;
   console.log(response);
 }
 
  catch(error){
       console.log("Error:", error)
    }
   }
   consumePromiseThree()
   +++++++++++++
   
   now using fetch
   async function getAllElements(){
     
	 try{
     const response = await fetch('');
	 const data = await response.json();
	 }
	 
	 catch(error){
	 
	 console.log("There was some error in this")}
   
   }
    getAllElements()
   _________________________

async function consumePromise(){
  try{
   await promiseFive
   }
   catch(error){
    console.log("Hello")  
   }
 }

 consumePromise()
+++++++++++++++++
.then(function(value){

})
.catch)()
+++++++++++
Both the things do the same thing of consuming the promise and now fetch also returns a promise

fetch('')
.then(function(response){
   return response.json()
  })
   .then(function(data){
   
     console.log(data)
     })

*/