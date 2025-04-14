
//control statements


//if statements
if (true) {
    console.log("condition is true");
}

if (10!=10) {
    console.log("condition is true");
} 

//elseif statements 

if (10==='10') {
    console.log("Hello");
}
else {
    console.log("Bye");
}


let num = 11;
if (num % 2 == 0) {
    console.log(`${num} is Even Number`);
} else {
    console.log(`${num} is Odd Number`);
}


//else if ladder

let num2 = 0;
if (num2 > 0) {
    console.log(`${num2} is +ve Number`);
} else if (num2< 0) {
    console.log(`${num2} is -ve Number`);
} else {
    console.log(`${num2} is neither +ve nor -ve number`);
}


///nested if 


// let num = "100";
// if (typeof num === 'number') {
//     if (num > 0) {
//         console.log(`${num} is +ve Number`);
//     } else if (num < 0) {
//         console.log(`${num} is -ve Number`);
//     } else {
//         console.log(`${num} is neither +ve nor -ve Number`);
//     }
// } else {
//     console.log("It is not a Number");
// }



let num1 = "100";
if (typeof num1 === 'number') {
    if (num1 % 2 == 0) {
        console.log(`${num1} is even No.`);
    } else {
        console.log(`${num1} is odd No.`);
    }
} else {
    console.log("It is not a Number");
}



////switch case

let signal = "green";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Be Ready");
        break;
    case "green":
        console.log("Let's go");
        break;
    default:
        console.log("RTP");
}

//looping statements

// for(let i=1 ; i<=5 ;i++){
//     console.log(i)
// }

// let i=0;
// for(console.log("hello") ; i<=5 ; console.log("world"))
// {
//     console.log("Bye")
//     i=i+2
// }

let p =1;
while(p<=10){
    console.log(p)
    p++
}



// for (let i = 1; i <=5 ; i ++) {
//     console.log(i);
//  }

//  for (let i = 1; i <=100 ; i ++) {
//     console.log(SORRY 😒);
//  }

//  for (let i = 1; i <=25 ; i ++) {
//     if(i%2==0)
//         console.log(i);
//  }

//  for (let i = 10; i <=20 ; i ++) {
//     if(i%2==0)
//          console.log(`${i} is Even No`);
//     else 
//      console.log(`${i} is Odd No`)
//  }

// let i =0 
// for (console.log("Hello") ; i<=5 ; console.log("world")){
//     console.log("Bye")
//     i+=2
// }



let m=1 ;
while(m<=10){
    console.log(m)
    m++ ; 
}







// // Print numbers from 1 to 25 using a while loop
// let i = 1;
// while (i <= 25) {
//     console.log(i);
//     i++;
// }

//Print odd numbers from 60 to 70 using a while loop:
// let i = 61;
// while (i <= 70) {
//     console.log(i);
//     i += 2;
// }


//Print numbers from 15 to 25 in reverse order using a for loop:
// for (let i = 25; i >= 15; i-=2) {
//     console.log(i);
// }


for (let i = 60; i <=70 ; i +=2) {
   console.log(i);
}



