// // General Function 
// // Function without para& without return value
// function fun(){
//     console.log("hello")
// }
// fun()
// fun()

// function add(){
//     let a=5
//     let b=10
//     console.log(a+b)
// }
// add()

// Function with parameter and without return value
// WAP  to add two numbers using general function with operator
// function add(a,b){
//     let sum= a+b
//     console.log(${a}+${b}=${sum})
// }
// add(10,20)
// add(25,35)

// wap to check even or odd number using general function with parameter

// function evenOrOdd(a){
//     // if(a%2==0){
//     //     // console.log(${a} is even)   
//     // }else{
//     //         console.log(${a} is odd)   
//     //     }
//     // }
//                        or
//     (a%2==0)?console.log(${a} is even): console.log(${a} is odd)
// } 
//     evenOrOdd(21)
//     evenOrOdd(22)


// wap to print even numbers from 25-35 by using general function with parameter

// function Even(a,y){
//     console.warn(Even number from ${a}-${y})
//     for(  let i=a;i<=y;i++){
//         if(i%2==0){
//             console.log(i)
//         }

//     }
        

// }
// Even(25,35)
// Even(50,60)

// function Odd(a,b){
//         console.warn(Odd number from ${a}-${b})
//         for(  let i=a;i<=b;i++){
//             if(i%2==1){
//                 console.log(i)
//             }
    
//         }
//     }   
//     Odd(30,40) 


// how to change default value of parameter
// we are giving default value as true anf updateing it to "hi"    IMP Interview QUSETION 
// function demo(x=true){   
// console.log(x)
// }
// demo('hi')



// let keyword redecarlation is not possible
// function demo(a,b,c=420){
//    var b="pakka"
//     console.log(a,b,c);
// }demo("Dinga")
// default return type of function is void------------>Imp


// how to change the default value we can assissgn by returning a value to the return 

// function fun(){
//     let x=true
//     return x
// }
// let y=fun()
// console.log(y)

// // WAP to check even or odd number by using general function with return value

// function Even(){
//         let num=12
//         // if(num%2==0){
//         //     return ${num} is Even number
//         // }else{
//         // return ${num} is Odd number
//         // }

//         // or

// return (num%2==0) ? ${num} is Even number :${num} is odd number


//     }
//     let res=Even()
//     console.log(res)


// function demo(user){
// return ("hello "+user)

// }
// let res=demo("dinga")
// console.log(res)


// function Even(num=Number()){
           
//            if(num%2==0){
//                 return ${num} is Even number
//             }else{
//             return ${num} is Odd number
//             }
    
//         }
//         let res=Even(13)
//         console.log(res)

//         // WAP add two numbers by using general function with parameter and return value

//         // function Add(num1,num2){
//         //      return num1+num2
//         // }
//         // console.log(Add(10,20))  
        
        
//         function Add(a=Number(),b=Number()){
//             let sum=a+b
//             return ${a}+${b}=${sum}
//         }
//         let s1=Add(10,20)
//         console.log(s1)
 
//         console.log(Add(20,50))
//         Add()


// Anonymous function
//Function without parameter & without return value
// let fun =function(){
//     console.log("Hello")
// }
// fun()

// Function with parameter & without return value
// example1:
// let fun2=function(a){
//     console.log(10 +" "+a)
// }
// fun2("hello")

// example2:
//     let user=function (){
//         let a=20
//         let b=10
//         console.log(a+b)
//     }
//     user()

// // example3:
// let user1=function(){
//     let a1="Mallika"
//     let b1="Welcome"
//     console.log(a1+" "+b1)
// }
// user1()



// function without parameter & with return value
// example1:
// let fun3=function(){
// return "hello"
// }
// console.log(fun3())


// // example 2:
// let mm=function(){
//     return 10+20+" "+"is" +" "+"Addition"
// }
// console.log(mm())


// // example3:
// let a=function(){
//     return 2%2==0
// }
// console.log(a())

// function with parameter & with return value
// example1:
// let fun1=function(fnm){
// return "hi "+fnm
// }
// let res=fun1("mallika")
// console.log(res)



// Arrow Function
// function with parameter & with return value
// let arrow1=(fnm) =>
// {
//     return ("hi "+fnm)
// }
// let res=arrow1("mallika")
// console.log(res)

// Function without parametr & without return value
// let arr1=() =>{
//    console.log("Hiiiii")
// }
// arr1()


// function without parameter & with return value

// let fun3=() =>{
//     return "hello "+"Mallika"
//     }
//     console.log(fun3())
     
// Function with parameter & without return value

// example1:
// let fun2=(a) => {
//     console.log(10 +" "+a)
// }
// fun2("hello")


// WAP to check even or odd number with arrow function with parameter and with return value
// let even= (num=Number()) =>{
           
//                if(num%2==0){
//                     return ${num} is Even number
//                 }else{
//                 return ${num} is Odd number
//                 }
        
//             }
//              let res=even(14)
//             console.log(even(14))
//             console.log(even(13))


// 4 special Behaviours

//  1: if there is no parameters parentesis is optional
let arrow1= _ =>{
    console.log("hello")
}
arrow1()
// 2:if thier is one print statement {} is option
  let arrow2=_=> console.log("bye") 
  arrow2()     

//   3:if thier is one parameter ( ) is optional
let arrow3 = num =>{
    console.log("hello "+num)
}
arrow3(10)
// 4:if thier is one return type then return keyword and { }is optional
let add=(a,b) => `${a}+${b}=${a+b}`
let res=add(10,20)
console.log(res)

