// for 

for(let index =0; index < 10; index++){

    const element = index;
    if(element == 5){
       // console.log("5 is the best number")

    }
    //console.log(element);
}

for (let i = 0; i <= 10; i++) {          // Outer loop runs 1 then inner loop runs 10 times , Outer loop runs 2 then inner loop runs 10 times
   // console.log(`Outer loop value: ${i}`)
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value: ${j}  and Inner Loop ${i}`)
       // console.log(i + '*' + j + '='+ i*j )
    }
    
}

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// // No need to print whole loop

// // break and continue

// for (let index = 1; index <=20; index++) {
    
//     if(index == 5){                      // We want to stop at 5
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`)
    

// }
for (let index = 1; index <=20; index++) {
    
    if(index == 5){                      // We want to stop at 5
        console.log(`Detected 5`);
        continue                // Ek bar maaf kar do , ignore the mistake and continue the printing work
    }
    console.log(`Value of i is ${index}`)
    

}
