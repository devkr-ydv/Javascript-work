const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {

// console.log(item);
// }  )
// forEach wants call back function (no need function name )
// as the function is inside the array , value will bring as parameter

// coding.forEach( (item) =>{

//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach(  (item, index, arr)=>{
// console.log(item, index, arr);

// } )

const myCoding = [

{
    languageName: " javascript",
    languageFileName: "js"
},


{
    languageName: " python",
    languageFileName: "py"
},
{
    languageName: " swift",
    languageFileName: "sw"
},

]

myCoding.forEach( (item) => {

    console.log(item.languageName);
}  )

// Every value coming from database is an object and we have to learn iterations
// forEach is very important
