// // general function 

// // Function without parameter and without return value
// function fun(){
//     console.log("Hello")

// }
// fun()
// fun()


// function add(){
//     let a = 5
//     let b = 10 
//     console.log(a+b)
// }
// add()


// Function with parameter and without return value

// function add(a , b){
//     let sum=a+b
//     console.log(`${a} + ${b} =${sum}`)
// }
// add(10 , 20)
// add(40 , 60)

//WAP to check even or odd number using general funation with parameter

// function check(a){
//     if(a%2==0)
//         console.log(`${a} is even`)
//     else
//     console.log(`${a} is odd`)
        
// }
// check(10)
// check(3)
// check(7)

// function evnodd(num) { 
//     (num%2==0) ? console.log( `${num} is even number `) : console.log(` ${num} is odd `) 
// }
// evnodd(30)


//wap to print evn number from 25-35 by using gf with parameter

// function evn(num){ 
//     for(num=25 ; num<=35 ; num++)
//         if(num%2==0)
//             console.log(`${num}`) 
// }
// evn()


// function even( a , b){
//     console.warn(`even number from ${a} to ${b}`)
//     for(let i=a ; i<=b ; i++)
//         if(i%2==0)
//             console.log(`${i}`) 
// }
// even(25 , 35)


// //wap to print odd number from 25-35 by using gf with parameter

// function odd( a , b){
//     console.warn(`odd number from ${a} to ${b}`)
//     for(let i=a ; i<=b ; i++)
//         if(i%2!=0)
//             console.log(`${i}`) 
// }
// odd(25 , 35)


//! how to change default value of the parameter

// function demo(x = true){
//     console.log(x)
// }
// demo("hi")
// demo()
// demo("    ")
// demo("100")


function hello(a, b,c=420){
    // let b="is"//error as b is already declared in the function
    var b="is"//it will be executed as var is function scope
    console.log(a , b , c); // as normal it will be executed(but if we reinitilaize using let it gives error as already b is declared in the function , by using var it will be executed)
}
hello("Dinga")
