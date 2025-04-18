// variable hoisting 

var a ;  // dec
a = 100 ; //init
console.log(a)


b = 200 ; // init
let b ;    //dec
console.log(b)

// function hoisiting
fun()
function fun(){
    console.log("hello")
}

fun(){
    var fun = () =>{
        console.log("bye`")
    }
}