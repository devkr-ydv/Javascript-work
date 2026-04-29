const marvel_heroes = ["thor","antman","spiderman","ironman"]
const dc_heroes =["superman","flash","batman"]
//marvel_heroes.push(dc_heroes) // the situation here will be array inside array ,
//console.log(marvel_heroes)// it took array as also data
//console.log(marvel_heroes[4]) // access the array

// push() pushes to existing array
//concat() returns new array
// const allHeroes =marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


// spread
//Most people use spread operator in case of more than one array to be combined
// const allNewHeroes = [...marvel_heroes,...dc_heroes]
// console.log(allNewHeroes)


//.flat() method is used to remove nested array and give single array (check the depth till how much required)
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_array.flat(Infinity)
//console.log(real_another_array); //output: [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// console.log(Array.isArray("Dev"))//output:flase
// console.log(Array.from("Dev"))//output:[ 'D', 'e', 'v' ]
// console.log(Array.from({}))//output:[]
// intresting thing for interviews
// if the terminal is unable to convert into array then it will give empty array
//we need to specify if we want to convert the key or string to array
//console.log(Array.from({name:"Krishna"}))//output:[]

let score1 = 100
let score2 =200
let score3 = 300
console.log(Array.of(score1, score2, score3));//output:[ 100, 200, 300 ]
