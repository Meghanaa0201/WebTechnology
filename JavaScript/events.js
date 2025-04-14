let singleClick = ()=>{
    console.log( "i am single 😊 ")
}

let doubleClick =()=>{
    console.log(" I am mingle 😍")
}

let smile = () =>{
    console.log("smile please 😁")
}

// let  PrintName =()=>{
//     event.preventDefault()

//     let fname =event.target[0].value
//     let lname =event.target[1].value

//     console.log(`my name is ${fname} ${lname}`)
// }

// ---------------------------as the above code event is desprecated so we use below code by passing the arguement as e and ..... and event in html
let  PrintName =(e)=>{
    e.preventDefault()

    let fname =e.target[0].value
    let lname =e.target[1].value

    console.log(`my name is ${fname} ${lname}`)
}