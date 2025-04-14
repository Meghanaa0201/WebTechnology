// higher order functions

//map() :  map() method is a HOF and it is used to do common operation for all the array elements & it return reult array
// Syntax : map((para1 , para2 , para 3 )=> {})
        //note : para1 = array elements
        //       para2 = index of array elements
        //       para3 = array itself


// arr= [10 , 20 , 30 , 40 , 50 ]
// console.log(arr)

// console.warn("using for loop");
// for(let i=0 ; i<arr.length ; i++){
//     console.log(arr[i])
//     console.log(i)
//     console.log(arr)
// }

// console.warn("using map method");
// arr.map((elem , index , array)=>{
//     console.log(elem)
//     console.log(index)
//     console.log(array)
// })



//example

// let arr= [ 10 , 20 , 30 , 40 , 50]
// console.log(arr)

// console.warn("using for loop");

// let resArr = [] 
// for(let i =0 ; i<arr.length ; i++){
//     console.log(arr[i])

//     resArr[resArr.length] = arr[i]+5 
// }

// console.log(resArr)

// console.warn("using map method ")
// res = arr.map((elem , index , array)=>{
//     return elem+5
// })
// console.log(res)



// filter() : filter() method is a HOF and it is used to  filter the array elements  based on condition & it returns result array
// Syntax : filter((para1 , para2 , para 3 )=> {})
        //note : para1 = array elements
        //       para2 = index of array elements
        //       para3 = array itself


//WAP to print only even numbers from this array list and store it in result  in array

// let arr1=[10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50]
// console.log(arr1)
// let res = []

// let evenarr = arr1.filter((elem)=>{
//     return (elem%2==0)               // if u use map instead of filter it gives like true , false ..... so we use filter 
// }) 
// console.log(evenarr)


// WAP to print only odd numbers from this array list and store result in the array

// let arr = [10 ,15 , 20 ,25 , 30 , 35 , 40 , 45 , 50]
// console.log(arr)
// let res = []

// let odddarr = arr.filter((elem)=>{
//     return (elem%2==1)
// }) 
// console.log(odddarr)

//reduced code of above

// let arr = [10 ,15 , 20 ,25 , 30 , 35 , 40 , 45 , 50]
// console.log(arr.filter(elem=>elem%2==1))



//reduce() : it is used to convert values from all the array elemnts after doing some arithmetic operation & it returns a single value

// reduce ((preval , curval) =>{})

// let arr=[2, 5, 6, 8, 3]
// console.log(arr)
// let sum = arr.reduce(( preVal , curVal)=>{ 
//         // console.log('P=${preval} , c=${curVal}')

//         return(preVal+curVal)
// })
// console.log(sum)


//sort(): it is used to sort the array element in ascending or descending order 
 
// let arr=[ 9, 5, 7, 3, 8, 2, 6, 1, 4]
// console.log(arr)

// console.log(arr.sort())
// console.log(arr.sort().reverse())


let arr= [765,9876, 5567 , 8989 , 7, 1, 298, 47, 5 , 9 , 3 , 92, 109 , 66, 88 , 690 ,  86]
console.log(arr)

let x = arr.sort((a, b)=>{
        // return a-b      // for ascending
        return b-a      // for descending
})
console.log(x)