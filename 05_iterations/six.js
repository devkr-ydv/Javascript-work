
// forEach doesnt return any values


// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {

//     console.log(item);
//     return item

// }     )

// console.log(values);

// filter returns the values and forEach doesnt return

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// if we open the scope the we have to put the return 
// const newNums = myNums.filter( (num) => {
//    return num > 4
// } )


// const newNums = []

// myNums.forEach( (num) => {

//     if (num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const books = [

{},
{},
{},
{},
{}
]
// bk is the object inside array
let  userBooks = books.filter( (bk) => bk.genre === 'History' )

 userBooks = books.filter( () => {
    
    return bk.publush >= 1995 && bk.genre === "History"

} )

console.log(userBooks)