const score = 400.4321
//console.log(score) // Output is 400
const balance = new Number(200) //Output : Number : 200 Specially deifining the number

//console.log(balance)
//console.log(balance.toString());
//console.log(typeof (balance));  // output is oblect i.e no change is made in original value of balance
// Important for e commerce application to show the client small values
//console.log(score.toFixed(2)); // output is 400.43 because we have fixed the decimal to two significant figures
const otherNumber = 1134.8932
// Precision is also very important
//console.log(otherNumber.toPrecision(5)); // output is based on no. of digits both on right and left of decimal point ,
// toPrecision round offs the value to accomadate the precise value

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 is the output, this function makes easier to see the zeroes 


//+++++++++++Maths+++++++++++++++++==
//we get mathlibrary as default in JS 

// console.log(Math);

// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(5.8));
// console.log(Math.floor(4.8));
// console.log(Math.sqrt(91));
// console.log(Math.min(4,6,6,3,6));


console.log(Math.random()); // we get output between 0 and 1
console.log((Math.random()*10)+1);

// deifine min and max tricks
const min =10 
const max = 20
// Math.random gives value btw 0 and 1  , now we add 1 to avoid the case of 0.001 , now to get the range we put max - min
// Now to get value between 10 and 20 , we add the min to whole
// Math.floor to make it to digits and remove the significant digits
console.log(Math.floor(Math.random() * (max-min+1))+min)
