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





*/