//? Object is a non-primitive data type in JavaScript
//? Object is a collection of key-value pairs   
//object is a real world entity (it gives attribute and behavior)

//Direct Literal
// obj={}
// console.log( obj);
// console.log( typeof obj);

// let car ={
//     carname : "audi",
//     carcolor : "red",
//     carmodel : "2020"
// }
// console.log(car);
// console.log( typeof car);

//? Accessing the Properties from an Object

//? 1.  dot operator 
// console.log(car.carname); 

// //? 2.  Subscript operator
// console.log(car["carcolor"]);

//Modification
// todo : updating the object property 
// objectname.propertyname = "newvalue"

// car.carcolor = "blue"
// console.log(car);

//todo : adding new property to the object
//objectname.newpropertyname = "newvalue"3

// car.carRegNo = "KA 50 AB 1234"
// console.log(car);

//todo : deleting the property from the object
// delete(keyword) objectname.propertyname

// delete car.carmodel
// console.log(car);


//todo : example of nested object
// let person = {
//     fname : "John",
//     age : 20,
//     address : {
//         street : "MG Road",
//         city : "Bangalore",
//         state : "karnataka",
//         country : "India"
//     }
// }
// console.log(`${person.fname} age is ${person.age}`)
// console.log(`${person.fname} is from ${person.address.city}`)



// //todo : example 
// let student = {
//     fname : "Dinga",
//     lname : "Raja",
//     place : "Goa",
//     dob :  1999 , 
//     calculateAge : function(){
//         let age = 2025 - this.dob
//         console.log(`${this.fname} age is ${age}`)
//     }
// }

// console.log(`${student.fname} is from ${student.place}`)
// student.calculateAge()
// console.log()



// //using new keyword

// let o = new Object()
// console.log(typeof o);  // object as the default type 

// let car = new Object()
// console.log(car)
// console.log(typeof car);

// car.carName ="BMW"
// car.carColor = "Black"  
// console.log(car)


//-------------------------------------------------------------------date object model`

// let d = new Date() // by using new we are converting the date into object
// console.log(d); // current date and time
// console.log(typeof d); // object


// console.log("Date : " +d.getDate())
// // console.log("Month : " +d.getMonth() +1)  //+1 because it is stored in array and array starts from 0 and it is cancatenating so we dont use this like month is 3 +1 = 31  
// console.log("Month : "+ Number(d.getMonth()+1)) // to convert the month into number
// console.log("Year : " +d.getFullYear())

// console.log("Hours : " +d.getHours())
// console.log("Minutes : " +d.getMinutes())           
// console.log("Seconds : " +d.getSeconds())

// //-------------------------------------Constructor function-------------------

// function person(fname = ''){
//     this.fname = fname
// }

// let p = new person("dinga")
// console.log(p.fname) // dinga
// console.log(typeof p) // object

// let p1 = new person("dingi")
// console.log(p1.fname) // dingi

// let p2 = new person()
// console.log(p2.fname) // undefined



//-------create  student object using constructor function with 5 properties ------------------

function Student(fname , lname ='', age='', place='', dob=''){
    this.fname =fname
    this.lname = lname                                      
    this.age = age
    this.place = place
    this.dob = dob  
}

let s1 = new Student("Dinga", "Raja", 25, "Goa", 1998)
console.log(s1)

let s2= new Student("Dingi", "Rani", 20, "bangalore", 2000)
console.log(s2.lname)

console.log(s2.age)
console.log(s2.place)

let s3 =new Student()
console.log(s3) // empty object
