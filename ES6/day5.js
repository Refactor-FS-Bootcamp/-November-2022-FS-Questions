// //es6 - Escmascript version - 6

// //detructing ,spread and rest, ternary operators, template literals,class in javascript

// // class - protypyle in 


// //class - bluprint for boj

//  class Person {
//    constructor(name,age){
//      this.name = name;
//      this.age = age;
//    }

//    details(){
//      return this.name + "!"
//    }

//  } 

// //  const person1 = new Person('Hari',123)
// //  const person2 = new Person('Sabari',123)

// // console.log(person2)


//  //inhertance

//  class Emplyoee extends Person{
//     constructor(name,age,exp){
//       super(name,age)
//       this.exp = exp;
//     }
//     start(){
//         return this.name
//     }

//  }

//   const person2 = new Emplyoee('Sabari',123,7)


//   console.log(person2)
//   console.log(person2.details())





//destructuring  a array

// const a = [12,2,3,,23,4,6456,5]

// //old ways
// // const b = a[0]
// // console.log(b)
// // const c = a[1]
// // console.log(c)

// //new 

// const [b,,d,,f,g,h]=a

// console.log(b,d,f,g,h)

const person = {
    name: 'John',
    age:23,
    exper:7,
}

// //olds ways 

// // const personName = person.name

// // console.log(personName )

// const {name:personName,age,exper}= person;
// // const personName = name

// console.log(personName,age,exper)

// function detail({name,age}){
//     return name + " "+age
// }

// console.log(detail(person))


// const car ={
//     brand:'Audi',
//     model:2022,
//     price:[
//         {
//             india:200000000
//         },
//         {
//             mala:30003030230
//         }
//     ]
// }


// function price({price:[{india},m]}){
//     console.log(india,m)
//     return ` In india the price of the car is ${india}`
// }

// console.log(price(car))

//declaration

// function car (){

// }

//experssion

// const car = function(){
//     console.log('h')
// }

// car()

// const bike = (n,b) =>{
//   let a = n+b;
//   return a
// }

// bike(2)