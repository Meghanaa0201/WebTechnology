// // var a;
// // a=10 
// // console.log(a)

// // a="hi"
// // console.log(a)

// // var a;
// // a=true
// // console.log(a)

// // let b;
// // b=10 
// // console.log(b)

// // b="hello"
// // console.log(b)

// // // var b;
// // b=30
// // console.log(b)

// // const c=100;
// // console.log(c)

//primitive data types

//  let num=10                //10
// console.log(num)          //number
 // console.log(typeof num)

// // let s="Hello"         //Hello
// // console.log(s)        //string
// // console.log(typeof s)

// // let bool= true 
// // console.log(bool)        //undefined
// // console.log(typeof bool)        //boolean

// // let u= undefined 
// // console.log(u)             //undefined
// // console.log(typeof u)        //undefined

// // let x             //default value will be executed 
// // console.log(x)           //undefined




// let n= null  
// console.log(n)                   //null
// console.log(typeof n)            //object


// inbuit methods

// let n1= Number(1000) 
// console.log(n1)                  //1000
// console.log(typeof n1)         //number

// let n2= Number('a') 
// console.log(n2)                 //NaN
// console.log(typeof n2)        //number
// console.log(typeof NaN)        //number

// let n3= Number(true) 
// console.log(n3)                //1

// let n4=Number(undefined)
// console.log(n4)                 //NaN

// let n5=Number(null)
// console.log(n5)                //0


// let s1=String('Hi')
// console.log(s1)                //Hi
// console.log(typeof s1)        //String

// let s2=String(100)
// console.log(s2)                //100
// console.log(typeof s2)        //string

// let s3  =String(undefined)
// console.log(s3)


// boolean values

// let b=true
// console.log(b)       //true
// console.log(typeof b)    //boolean

// let b1=Boolean('hi')
// console.log(b1)      //true

// let b2=Boolean(!'Bye')
// console.log(b2)      //true

// let b3=Boolean(!0)
// console.log(b3)     //true

// let b4=Boolean(!false)
// console.log(b4)     //true

// let b5=Boolean(10!=10)
// console.log(b5)     //false

// let b6=Boolean(null)
// console.log(b6)     //false




// default values


// let x
// console.log(x)  //undefined
// console.log(typeof x) 

// let n=Number()
// console.log(n)      //0

// let s = string()
// console.log(s)      //" "

// let b = Boolean()
// console.log(b)      //false



// '+' operators

// let a = 10
// let b = 20
// let c = '10'

// let res = a + b
// console.log(res)
// console.log(typeof res)

// let res1 = a + c
// console.log(res1)
// console.log(typeof res1)

// let res2 = a + b + c
// console.log(res2)
// console.log(typeof res2)

// let res3 = a + c + b
// console.log(res3)






// '+' operators

// console.log(10 + '20'); // 1020
// console.log(10 - '20'); // -10
// console.log(10 - 'hi'); // NaN
// console.log(10 + 20 - 'hi'); // NaN
// console.log(10 + '20' + 'hi'); // 1020hi
// console.log(10 + 20 + 'hi'); // 30hi
// console.log('hi' + 10 + 20); // hi1020

// console.log(true + false); // 1
// console.log(true + 10); // 11
// console.log(true + '1'); // true1
// console.log(true + true + '1'); // 21
// console.log(true + 'true' + 1 + 2); // truetrue12
// console.log(true + true + '1-2'); // NaN
// console.log(true + 1 + '1-2'); // 19
// console.log(true + 1 + '1 -2'); // NaN

// let x
//  console.log(x)  //undefined
//   console.log(typeof x) 





// arithemetic operators

// exp1=10/2+30-8*2+true
// console.log(exp1)

// exp2=10+true +2*(true+true)*10/2-10+'03'+(true+true)+'0'+2+(true*5)-false
// console.log(exp2)


//concatenation 

// let fname = "Dinga";
// let lname = "Raja";
// let place = "Goa";
// let age = 25;

// console.log("My name is " + fname + " " + lname + ", I am from " + place + " & my age is " + age);

// console.log("My name is " + fname + " " + lname + ", I am from " + place + " & my age is " + age);

// // Interpolation 
// console.log(`My name is ${fname} ${lname}, I am from ${place} & my age is ${age}`);

// + Operators
// let a = 10;
// let b = 20;
// let c = "10";
// let res = a + b;
// console.log(res);  // Output: 30
// console.log(typeof res)


// let res1 = a + c;
// console.log(res1);          // Output: "1010" (number + string results in string concatenation)
// console.log(typeof res1)


// let res2 = a +b+ c;
// console.log(res2);          
// console.log(typeof res2)

// let res3 = a +c+b;
// console.log(res3);          
// console.log(typeof res3)




// Logical AND (&&) Operator
// console.warn("Logical &&");


// console.log(true && true);   // Output: true
// console.log(true && false);  // Output: false
// console.log(false && true);  // Output: false
// console.log(false && false); // Output: false


// Logical OR (||) Operator
// console.warn("Logical ||");

// console.log(true || true);   // Output: true
// console.log(true || false);  // Output: true
// console.log(false || true);  // Output: true
// console.log(false || false); // Output: false



// Assignment and shorthand operators
// let x = 10;
// console.log(x);  // Output: 10

// x = x + 10;
// console.log(x);  // Output: 20

// x = x * 2;
// console.log(x);  // Output: 40

// x = x - 5;
// console.log(x);  // Output: 35

// x = x / 5;
// console.log(x);  // Output: 7


//Unary Operator 

// let a = 10;
// let b=5;
// let c = a++ + ++b + a-- + --a;  
// console.log(c);  // Output: 10 + 6 + 11 + 9 = 36




// let A = 5, B = 4;
// let C = A++ + ++B + ++A + B-- + --A + B + A + ++B + ++A +B +A ;
// console.log(C); 



//Ternary operators

// let a = 10;
// let b = 10;

// // Using ternary operator (?:) for comparison
// (a == b) ? console.log("Hello") : console.log("Bye");

// (a === b) ? console.log("Hi") : console.log("Tata");


