// let box = document.getElementById('box')

// let redcolor = ()=>{
//     box.classList.add('red')
//     box.classList.remove('green')

// }

// let greencolor=()=>{
//     box.classList.add('green')
//     box.classList.remove('red')

// }


//if 3 colors tn do below

let box = document.getElementById('box')

let redcolor = ()=>{
    box.classList.add('red')
    box.classList.remove('green')
    box.classList.remove('yellow')
}

let greencolor=()=>{
    box.classList.add('green')
    box.classList.remove('red')
    box.classList.remove('yellow')


}
let yellowcolor=()=>{
    box.classList.add('yellow')
    box.classList.remove('red')
    box.classList.remove('green')
}

let onOff = () =>{
    let btn = document.getElementById('btn')
    btn.classList.toggle('on')
    btn.classList.toggle('off');

    (btn.innerText === 'ON')?btn.innerText = 'OFF' : btn.innerText = 'ON'
}


// toggle method is used to return true or false
//if class is present tn it remove ..... if removed  tn it add


let dltHtmlElem = () =>{
    let selectedElem = document.querySelector('h1')
    selectedElem.remove()
}