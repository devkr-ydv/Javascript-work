// Date object in js represent a single moment in a platform
// calculated from Jan 1, 1970 . 
// Suggest an API of Temporal , it is just an proposal
// +++++++++++++=

//let myDate = new Date()
//console.log(myDate); // output 2026-04-26T05:52:27.783Z
// we try to covert the date to string
// console.log(myDate.toString()); // output : Sun Apr 26 2026 05:53:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())//Mon Apr 27 2026
// console.log(myDate.toISOString())//2026-04-27T09:14:45.623Z
// console.log(myDate.toJSON())//2026-04-27T09:14:45.623Z
// console.log(myDate.toLocaleString())//4/27/2026, 9:14:45 AM

let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

// Time Stamp in JS
let myTimeStamp =  Date.now()
//console.log(myTimeStamp);
// Date is an object put .getTime() to put time (used for makking booking app) 
console.log(Math.floor(Date.now()/1000)); // values in mm given , dividing by 1000 to convert to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
// customization of format as per requirement
newDate.toLocaleString('default',{
    weekday: "long"
})