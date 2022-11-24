console.log('j')

// //object literals

// let name = 'fName'
// let obj = {
//    // key :value // propety
//     "n ame" : "Sabari",
//     //dynamic keys
//     [name]:'fName'

// }


// console.log(obj["n ame"])
// console.log(obj.fName)


// let fName= 'Hari';
// let lName = 'Prasath';

// let obj1 = {
//     fName ,lName
// }

// console.log(obj1)

// //array iterators - loop , forEach


// const a = [1,23,34,345,456,56767]

// const b = [];

//  a.forEach(function(val, idx , array){
//         b.push(val *2)
// })

// //for each mehod is doex not return anything

// console.log(b)

// //map - itertaors but it returns a new array

// const c = a.map((val)=>{
//      return val * 2
// })

// console.log(c)


//filter - it will filter the array and return a new array 
// const arr = [32,43,45,6,54,756,8,76,987]

// const filteredValue = arr.filter((val)=>{
//     return val >20
// })

// console.log(filteredValue)

// const arr = ['hari',20,false,'',,,,,null,undefined,0,NaN,34,554,656,,,,,""]


// const filteredValue = arr.filter((val)=>{
//     return val;
// })

// console.log(filteredValue)

//reduce -

// const num = [12,3,42,34,3,5,435,6];

// const reducedArray = num.reduce((acc,cum,ind,array)=>{
//    return acc + cum
// },10)


// console.log(reducedArray)

// const  a= (b='Guest',c='GuestUser')=>{
//   let greet = `UserName is ${b} . UserPassword is ${c}`
//   console.log(greet)
// }

// a()

// ... spread and rest

// const a = [1,2,23,2,34]
// const b = [123,2,4,234,3,5]

// const c = [...a,...b]

// console.log(c)

// let obj = {
//     name:'Guest',
//     age : 23
// }

// let obj1 = {
//     fName : 'HARII',
//     age :56

// }


// const obj2 = {...obj1,...obj}
// console.log(obj2)


// const arr = [123,2,3,24,,234,32]

// const [c,d,e,f,...rest]=arr

// console.log(c,d,e,f,rest)

const num = [3,4,534,5,45,646];

// every check  all  array value passing this condition

// const check = num.every((val)=>{
//     return val >3
// })

// console.log(check)

//some - any one is passin or not
// const check = num.some((val)=>{
//     return val >645
// })

// console.log(check)


//find method - //return the first passed value in an array


const  finded = num.findIndex((value)=>{
    return value > 5 
})

console.log(finded)