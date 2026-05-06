// Immediately Invoked Function Expressions (IIFE)

// Things are getting polluted in the inside by the global scope variables
// That is why we use the iife
// file ony with database connection (Example)

// If we put parenthesis the there is automatically a block and work can be done inside it also same as we did in arrow

(function work(){
console.log(`DB CONNECTED`);

}) ();       // Output: DB CONNECTED 

//()()      // First is function definition ; Second is execution call


// Now try if it works in arrow
// (() => {
//     console.log(`DB CONNECTED TWO`);
// } )();       // There will be error if semicolon is not put after function call


// (function workTwo(){   // This is named IIFE 

//     console.log(`DB CONNEDTED TWO`);
// })();
((name)=>{                 // This is unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
})("Krishna");          // There was no problem of arrow function but a problem of semi colon
