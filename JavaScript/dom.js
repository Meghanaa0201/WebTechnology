let changeContent =() =>{
    let selectedElem = document.getElementById('text')
    selectedElem.innerText = ' I am A web developer'

    // selectedElem.style.color = 'red'
    // selectedElem.style.backgroundColor = 'yellow'

    // updated property 
    // if we use in next line it will give eroor ....so we can use backtick symbol to avoid erros

    selectedElem.style.cssText = `color:red ;
                                background : yellow ; 
                                 text-align:center `

}



// let changeDesign =()=>{
//     let boxes = document.getElementsByClassName('box')
//     boxes[0].innerText ='welcome'
//     boxes[1].style.background = 'red'
//     boxes[2].style.cssText = 'border-radius:50% ; background:yellow'
// }




//----next

let boxes = document.getElementsByClassName('box')


let changeDesign =()=>{
    boxes[0].innerText ='welcome'
    boxes[1].style.background = 'red'
    boxes[2].style.cssText = 'border-radius:50% ; background:yellow'
}


let doubleClick =()=>{
    boxes[0].innerText ='bye'
    boxes[1].style.background = 'border-radius:50% ; background:green'
    boxes[2].style.cssText = 'border-radius:0% ; background:blue'
}


// let colorchange=()=>{
//     let colorask= prompt("which colour do u want ?")
//     changeBack(colorask);
// }

// let changeBack = (color)=>{
//     document.body.style.backgroundColor = color ;
// }

let colorchange =() =>{
    document.body.style.backgroundColor = prompt("which colour do u want ?")
}

//above code is also crct 

let changeimg =() =>{
    // let image = document.getElementsByTagName("img");
    // image[0].src = '../amazon/images/b12.jpg '
    // //above stores in array format 

    // let image = document.querySelector('img')
    // image.src = '../amazon/images/b12.jpg '

    let image = document.querySelectorAll('.pic')
    image[0].src = '../amazon/images/b12.jpg '

    // querySelectorAll ....takes in the form of array ...we can pass in the form of class or id but tagname only allows tag 

}

let onOff = () =>{
    let btn = document.querySelector("#btn");
    let text = btn.innerText;
    if(text==='ON'){
        btn.innerText = 'OFF'
    }
    else{
        btn.innerText = 'ON'
    }

}

let daynight=() =>{
    let hi = document.querySelector("#day");
    let text = hi.innerText;

    if(text === 'day'){
        hi.innerText= 'Night'
    }
    else{
        hi.innerText='day'
    }
}