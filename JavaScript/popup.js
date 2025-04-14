let text1 =()=>{
    let fnm = prompt("enter frst name")
    let lnm = prompt("enter last name")

    alert(` my name is ${fnm} ${lnm}`) 
}

let addtwo = ()=> {
    let num1 = Number(prompt("enter the num1"))
    let num2 = Number(prompt("enter the num2"))

    let res =  num1+num2
    alert(` ${num1} + ${num2} = ${res}`)
}

let demo=()=>{
    let bool = confirm('Do you prepare for Mock');
    bool ? alert("Welcome to mock 😊") : alert("Moye Moye 😂")
}