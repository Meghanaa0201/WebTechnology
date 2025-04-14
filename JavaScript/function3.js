// ---------------------------------------------Self Invoking Function(SIF / IIF)
 
///can be print inside the function using general function
// (function fun(){
//     console.log("hello");
// }())


//can be print outside the function using general function
// (function fun(){
//     console.log("hello worls")  
// })()



///using arrow function and terminating with semicolon
// (()=>{
//     console.log("hello from arrow function")
// })();


// //using arrow function by assigning to a variable
// let a= (()=>{
//     console.log("hello from arrow function");
// })()


// --------------------------------------------call back function 
// a function that is passed as an argument to another function is called a callback function

// let num =() => {
//     return 100
// }
// //console.log(num())

// let sum =(a, b) => {
//     let add=a+b
//     console.log(add)
// }
// ///in this case we are passing the function as a parameter to another function 
// // if num() , () is not mentioned then it will not work bcz it will be concatenate
// sum(num() , 200)



//a function that takes another function as an argument is called a higher order function
// a function that takes a function as an argument and passed as a arguement in other function is called a higher order function

// let surname = () => {
//     return "kumari"
// }

// let fullname = (fnm, lnm) =>{
//     console.log(`My name is ${fnm} ${lnm}`)
// }
// fullname("meghana " , surname())
// fullname("rachitha " , surname())


  


