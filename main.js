// let a=10;
// function outer(){
//     let b=20
//     function inner(){
//         let c=30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()
// closure
// inner fn remembers the value of the outer fn
// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//         return inner
// }
// const fn=outer()
// fn()
// fn()
// fn()
// fn()

// function sum(a, b, c){
//     return a+b+c
// }
// console.log(sum(2,3,5))

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                return fn(a, b, c) 
//             }
//         }
//     }
// }

// const curriedSum=curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2=curriedSum(2)
// const add3=add2(3)
// const add5= add3(5)
// console.log(add5)


//  this kw
// function sayMyName(name){
//     console.log(`my name is ${name}`)
// }
// sayMyName(`walter white`)
// sayMyName('heisenberg')

// implicit binding

const person={
    name: 'vishwas',
    sayMyName:function(){
        console.log(`my name is ${this.name}`)
    }
}


// 

const person2={
    name:'riddhima',
    sayMyName:function(){
        console.log(`my name is ${this.name}`)
    }

}
person.sayMyName()
person2.sayMyName()

//  explicit binding
function sayMyName(){
    console.log(`my name is ${this.name}`)
}

sayMyName.call(person)
sayMyName.call(person2)

// new binding
// using the new ky which creates an empty obj constructor mem allocation

function Person(name){
    this.name=name
}
const p1=new Person(`batman`)
const p2=new Person(`superman`)
console.log(p1.name,p2.name)

// default binding 
// this will rely on global object ie global scope
sayMyName()
