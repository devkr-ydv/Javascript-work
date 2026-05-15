// reduce () method
// this will be used many times to add the prices of bill

const myNums = [ 1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log( ` acc:${acc} and currval: ${ currval}  `)
    return acc + currval
}, 2)

console.log(myTotal);
