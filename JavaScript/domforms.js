let handleSubmit =(e) =>{
    // event is deprecated so event is passed as an arguement in html and ...s as parameter in js ...so e.anything is accessed
    // prevent Default is used to run the code ...continuously without disapppering.......to avoid reloading

    e.preventDefault()
    let res=document.getElementById('res')
    let fnm = document.getElementsByName('fnm')[0].value
    let lnm = document.getElementsByName('lnm')[0].value

    //as at 0 index we are collecting only invidiual value soo
    //we can do by like this also below but we r not using this method
    // console.log('fnm[0].value')

    res.innerText = `My name is ${fnm} ${lnm}`

}