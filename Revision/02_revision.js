/*
Flow control 

If(condition){
statement
}
else{ statement
    }

    switch key:{
    case value:
        {
           statement
           break
        }

default:
{
statement
break
}
}
 

_______________________

iterations
for() loop, while() loop, do while loop



for of loop


for(const val of ArrayName){


       }

mainly used for array








for in loop


used for objects looping 

// There is no function call in for( const num of arrayName){}  , and for( const num in objectName){}, 
//Whereas there is function call in forEach(), filter(), map(), reduce(),


// There is console.log(`${key} is the shortform of ${arrarName[key]}`);  different way to have the value of key and the name of key 


// These are iterative methods (does the work of both iteraton and methods)
forEach()
arrayName.forEach( function (parameter)  {}      )
just completing a work , doesnt return anything



filter()
objectName.filter(  (parameter) => {} )    // this parameter has the access to the things inside the array or object

used to check conditions and allow only who pass the criteria , returns the value

map()
good for mathematical operations
make a new array

arrayName.map( (num) => {} )


reduce()

this is very powerful and converts large array to a small number

accumulator , current value 
 
 
 arrayName.reduce(  (acc,item) =>  {return acc + item.price} )  // item access the objects inside the array coming from database 


-------------------------
examples and explanation


 // One more diffrerence between [for, while, do while] and that of [for of , for in] is that
 we can call the parameter passed in[ for(const parameter of arrayName) and for(const num in objectName)]
 in console.log(num) // we just need to give the paramter which has all the access to the values of array or object
 
 
 whereas in [for, while, and do while] , in console.log(arrayName[parameter])  we have to write the arrayName[parameter]
 
 const myPractice =[ "dev", "mohan", "rahul", "ritik"]
 
 for(const name of myPractice){
 
 if(name === "rahul"){
 
    console.log(`The wanted name is ${myPractice[name]}`)
 
      }
     console.log(${myPractice[name]}) 
 }
 
 
 
 
 
 const myObject = {
 
     name: "Dev",
	 work: "Software Engineer ",
	 workTime: 7
 }
 for(const data in myObject){
 
 console.log( `The work time will be increased to ${data.workTime +2 }` )
  }
 
 
 
 
 
 
 
 [in for, while, do while loop if the loop is on the index then just do the console.log(index)][but if there is loop on the array or object the we have to do console.log(arrayName[index])]
 
 
 [in for of loop the parameter has the access of element of array ]
 
 [in for in loop the parameter has the access to key of objects passed and to access the value we need to do console.log(objectName[parameter])                     ]
 
 
 [in forEach(function(item){console.log(`The names are ${item.languageName}`)})            ]  // for object inside the array  (item has access to objects so we can use the (.) )
    we dont need to do console.log( arrayName[item.languageName] )  
 
 
 
 
 Now putting all these things inside the const yoyo = coding.forEach(  (item) => {}    )
 
 Now if we call console.log(yoyo) then forEach doesnt return any values
 
 but filter(), map(), reduce() returns the value of yoyo



*/