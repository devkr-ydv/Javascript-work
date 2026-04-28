 const firstArray = [1,4,6,3,5]
// console.log(firstArray);
// let secondArray = ["dev" , "B.Tech" ,"CSE" ]
// console.log(secondArray)
// Array is an object
// Array are resizable in JS 
console.log()
// Array in JS make shallow copies(changes are made in original copies)
const myHeros = ["spiderman","antman"]
// We get prototype access in array 
console.log(myHeros[0]);

// Array Methods
// .push() adds the value to the array
// firstArray.push(5) //output [ 1, 4, 6, 3, 5, 5 ]
// firstArray.push(8)
// firstArray.pop() // remove the last value from the array

// firstArray.unshift(5)// add the value to the beginning of array
// firstArray.shift() // remove the first element from array



// console.log(firstArray.includes(6)) // check whether the number is present in the array or not
// console.log(firstArray.indexOf(6)) // give the index of the value

// join() is used to bind our array and convert our array to string
// const newArr = firstArray.join() // 
// console.log(newArr); // output : 1,4,6,3,5
// console.log(typeof newArr); //string
// console.log(firstArray);  // [1,4,6,3,5]


// slice , splice method

console.log("A", firstArray); // output : A [ 1, 4, 6, 3, 5 ]
const myn1 = firstArray.slice(2,4)
// In slice() method the right index number is not included in the output 
// And aslo no change is made in original array in slice() operation

console.log(myn1); // output : [ 6, 3 ]
console.log("A",firstArray) // output :A [ 1, 4, 6, 3, 5 ]
// In splice()method the last index is also included in the output 
// Change is also made in original array after the use of slice() method

const myn2 = firstArray.splice(1,4)
console.log("B",myn2); //output : B [ 4, 6, 3, 5 ]
console.log("C",firstArray); // output : C[1]
