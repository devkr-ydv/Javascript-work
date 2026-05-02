// const instaUser = new Object() // this is a singleton object
// console.log(instaUser);//{}

const tiktokUser = {}  //this is also an object but not a singleton
tiktokUser.id = "123azx"
tiktokUser.name = "Max"
tiktokUser.isLoggedIn = false

//console.log(tiktokUser);

// Now we will do objects inside object

const regularUser = {
    email: "zxee@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Dev",
            lastname:"Yadav",
        }
    }

}
// console.log(regularUser.fullname);//output:{ userfullname: { firstname: 'Dev', lastname: 'Yadav' } }
// console.log(regularUser.fullname.userfullname);//output:{ userfullname: { firstname: 'Dev', lastname: 'Yadav' } }

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)// merge the objects
// All the objects will go in empty object as target

const obj3 = { ...obj1,...obj2} // here we use the spread technique

//console.log(obj3);
// Object inside the array
const users =[
{
    id:1,
    email:"de@gmail.com",


},
{
    id:2,
    email:"de@gmail.com",


},
{
    id:3,
    email:"de@gmail.com",


}
]
users[1].email
// console.log(tiktokUser);//{ id: '123azx', name: 'Max', isLoggedIn: false }

// console.log(Object.keys(tiktokUser));//[ 'id', 'name', 'isLoggedIn' ]
// Datatype of this output is array , can now make loops and use it in various palces
// Used while working with database
// console.log(Object.values(tiktokUser));//[ '123azx', 'Max', false ]
// console.log(Object.entries(tiktokUser));//[ [ 'id', '123azx' ], [ 'name', 'Max' ], [ 'isLoggedIn', false ] ]
// console.log(tiktokUser.hasOwnProperty('isLoggedIn'));//true
// console.log("good");



// Destructuring
const course = {
    coursename:"Js in hindi",
    fees:"999",
    courseInstructor:"Hitesh"
}
//course.courseInstructor

const {courseInstructor: instructor} = course // way of extracting from the object 
//console.log(courseInstructor);
console.log(instructor);

// consy navbar = ({company}) => { // Destructuring

// }
// navbar(company ="Hitesh")


// API (giving my work to someone else)
    // Now all the values are is JSon
    // {
    //     "name":"Dev"
    //     "coursename": "Js in hindi"
    //     "price":"free"
    // }

    // We will try to convert the API to objects
      // JSon is just like object but without objectName
      //Json is Js object notation and can look like object or array
    [
{},
{},
{},

    ]
    