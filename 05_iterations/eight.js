// reduce () method
// this will be used many times to add the prices of bill

const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log( ` acc:${acc} and currval: ${ currval}  `)
//     return acc + currval
// }, 2)

const myTotal = myNums.reduce( (acc, currval) => acc + currval  )

console.log(myTotal);


const shoopingCart = [

{
    itemName: "Js course",
    price: 2999
},
{
    itemName: "py course",
    price: 3444
},
{
    itemName: "MobileDev course",
    price: 5000
},
{
    itemName: "DataScience course",
    price: 5000
},

]
const priceToPay = shoopingCart.reduce( (acc, item) => acc + item.price ,0 )
console.log(priceToPay);