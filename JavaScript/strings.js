 let palindrome=(str) =>{
    console.log(str)   
    let res= str.split('').reverse().join('');
    return(str===res) ? 'palindrome' :  'not palindrome'
}
let x= palindrome("Hello")
console.log(x)


console.log(palindrome("amma"))