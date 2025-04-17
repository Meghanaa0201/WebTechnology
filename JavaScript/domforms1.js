let formValidation=(e)=>{
    e.preventDefault()
    let email=e.target
    let pswd=e.target
    if (email[0].value===''|| email[0].value===null){
        email[0].style.border='solid 2px red'
    }
    else if(pswd[1]===''|| pswd[1].value===null){
        pswd[1].style.border='solid 2px red'
    }else{
        // console.log(email[0].value,pswd[1].value)
        window.location='./Welcome.html'
    }
}