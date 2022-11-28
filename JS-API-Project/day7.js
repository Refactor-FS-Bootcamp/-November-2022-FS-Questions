//callback - promises - async await

//javascript - synchronous - single threaded - interpert

//interperter - 

let a = 10; //memoray

function hello(){ 
    console.log('hai')//memory for funtion
}

// let b = hai//memory
// excute the function


//inital itime  - fast
//when a repeated - then interperter slow down our 

//optimied code
// inital time taking is long

// js engine -  call stack , memory heap


//  js is no wait for any one

// callstack - here code excution 
//memory - //limited memory 


//callstack - firdst in last out 
// function a (){
//     return 'hello'
// }

// function callll(){
//     return a ()
// }

// callll()



// console.log('FILE START"S UPLOADING')

// // if i have a process that takes some time - api,files - setTimeout 
// //uploading a file //
// setTimeout(()=>console.log('file UPLOADING '),3000)

// console.log('YOUR FILE IS SUCCESSFULLY UPLOADED')



// js async - it depend s on web api

//proble - producing code , consuming code //sqeunce control

//call vack - paaing a funciton as a arg to an another function


// console.log(1)

// // api console.log(2)

// console.log(3)
// function output(data){
//     console.log(data)
// }
// //producing a code
// function add(file,display){
//     console.log('file is start uploading...')
//     //time consuming process
//     return display(file)
// }


// add('hari',output)
// async function app(){
// const res= await fetch('https://fakestoreapi.com/products')

//  const data= await res.json()
//   return display(data)
// }
// app()

// function display(data){
//     console.log(data[0].title)
// }

//fetching data - ajax, axios, fetch

// function display(data){
//         console.log(data)
//     }

//  function some(display){
//     //prode

//     display(data)
//  }

//  some(display)

// let myPromise = new Promise(function(resolve,reject){
//     let a=15 ;//timing process
//     if(a === 5 ){
//         resolve('success')
//     }else{
//         reject('error')
//     }

// })


// myPromise.then(
//     (data)=>console.log(data),
//     (error)=>console.log(error)
//   )


// async function app(){
//     let a=15 ;//timing process
//     if(a === 5 ){
//     await resolve('success')
//     }else{
//         reject('error')
//     }

// })


// myPromise.then(
//     (data)=>console.log(data),
//     (error)=>console.log(error)
//   )

console.log("stat");

const myPromise = new Promise(function(resolve){
    
    setTimeout(function(){
        console.log('fetched')
        resolve('completed')
        
    },1000)

})

myPromise.then(
  ((data)=>  console.log(data))
)

