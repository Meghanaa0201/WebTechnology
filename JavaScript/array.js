//array
//array is a object 
// array is a collection of items of same type      


// let arr=[10 , 'hi' , true , undefined, null , () => {} , {} , []]
// console.log(arr)
// console.log(typeof arr) // object

// console.log(arr[2]) // true
// console.log(typeof arr[2]) // boolean

// console.log(arr.length)

//--------------- Example programs -------------------

// 1, write a program to print only even numbers from the given array and result store it  in array
//Note : without using any javascript inbuilt method

// let arr = [10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50]
// console.log(arr)
// let even = [] 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) 
//     {
//         even[even.length] = arr[i]
//     }

// }
// console.log(even)


// 2. write a program to print only numbers from the given array and result store it  in array
//Note : without using any javascript inbuilt method

// let array = [10 , 'hi' , 50 , true , false , {} , 'Bye']
// console.log(array)

// let num=[]

// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == 'number') 
//     {
//         num[num.length] = array[i]

//     }

// }
// console.log(num)

//array methods

// let arr= [10 , 20 , 30 , 40 , 50 ]
// console.log(arr)

//push() : it is used to add the array elements at the last and it returns the new length
// Note : at a time we can add multiple array elements to the array lists

// let x= arr.push('Hi ' , true)
// console.log(arr)
// console.log(x)  // returns the new length of the array


// pop() :it is used to remove the array elements from the last &  it returns the delted array element from the array list 
// NOTE: at a time we can delete only one arry element from last

// let d= arr.pop()
// let d1=arr.pop()
// console.log(arr)
// console.log(d1)

//unshift() : it is used to add the array elements at the first and it returns the new length
// Note : at a time we can add multiple array elements to the array lists

// let d2 =arr.unshift( 'hlo' , 'bye' , false)
// console.log(arr)
// console.log(d2)

//shift() : it is used to remove the array elements from the first & it returns the delted array element from the array list 
// NOTE: at a time we can delete only one array element from last

// let d3 = arr.shift()
// console.log(arr)
// console.log(d3)




//slice() : it is used to copy the array elements from the array list & it returns the copied array elements
// Note : it will not change the original array list


// splice() : it is used to add and delete the array elements from the array list & it returns the deleted array elements

// syntax : splice(indexPos , deleteCount , addElements)

// let arr1 =[10 , 20 , 30, 40 , 50]
// console.log(arr1)

// //deleting array elements from the array list 
// let deletedElem =arr1.splice(2, 1)
// console.log(arr1)
// console.log(deletedElem)

// //adding array elements to the array list
// arr.splice(3, 0 , 'new1' , 'new2')
// console.log(arr)


// //both adding & deleting the array elements from the array list 
// let x= arr.splice(1, 2 , 'hi' , 'bye')
// console.log(arr)
// console.log(x)

//reverse
 
// let arr=["I" , "LOVE" , 'YOU']
// console.log(arr)
// console.log(arr.reverse()) // it will reverse the array elements

//indexOf() & LastIndex(): it will check the index position of array element if data is matching or else it return -1

//indexOf() :it returns the index position of the first occurrence of the element 
//lastIndexOf() :  it returns the index of the last occurrence of the element 

// let arr= ["maldives" , 'goa' , 'mysore' , 'goa' , 'karnataka'  , "dubai ", 'goa'  , "china"]
// console.log(arr)
// console.log(arr.indexOf('goa')) // it returns the index of the first occurence of the elements

// console.log(arr.lastIndexOf("goa")) // it returns the index of the last occurence of the elements

// console.log(arr.indexOf('hyderbad')) // it returns -1 because the element is not present in the array list


// //includes() : it is used to check whether the data is present or  not & it returns boolean value ,   if data presnt-> true else false

// let arr= ["maldives" , 'goa' , 'mysore' , 'goa' , 'karnataka'  , "dubai ", 'goa'  , "china"]
// console.log(arr)
// console.log(arr.includes('karnataka')) // checks whether it is present or not

// console.log(arr.includes("hyd"))

//flat() : it is used to flatten the array elements and it returns the new array list
// Note : it will remove the nested array elements and it returns the new array list
// let arr =[ 10 , 20 , 30 , ['a ' , 'b' , 'c'] , 40 , 50 , ['d' , 'e' , 'f'] ]
// console.log(arr)
// console.log(arr.flat()) // it will flatten the array elements


// //join() : it is used to convert the array elements into string and it returns the string
// let arr1=["I" , "LOVE" , 'JAVASCRIPT']
// console.log(arr1)
// console.log(arr1.join()) // it will join the array elements with comma by default


// //split() : it is used to convert the string into array and it returns the array
// let str1="I LOVE JAVASCRIPT"
// console.log(str1)
// console.log(str1.split()) // it will convert the string into array and it returns the array
// console.log(str1.split(' '))  // words
// console.log(str1.split(''))     // letters


