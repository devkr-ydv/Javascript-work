// switch (key) {

//     case value:
//     break;
    
//     default:
//         break;

// }

// Better than if else
const month = 2
switch (month){
    case 1:
    console.log("January") ;
    
    break;
    case 2:
    console.log("Feb") ;
break;
    case 3:
    console.log("March") ;
    
    break;
default: {
    console.log(`default case match`);
    break;
}

}
// We need to put break and if we dont then the code after matching one is found ,is all executed except the default
 // All we learned till now is based on true and false
