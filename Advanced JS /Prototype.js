let myusername="Nouman"
console.log(myusername.length)      // 6
let myusername2="nouman      "          
// console.log(myusername2.length)         //12

let heroes=["Salman khan, SRK, KING"]
let heroPower={
    thor: "Hammer",
    spiderman: "sling",
    getspiderpower:function ()
    {
        console.log(`spider power is ${this.spiderman}`)
    }
}
Object.prototype.nouman=function()
{
    console.log(`Nouman is present in all objects`)
}
heroPower.nouman()                              // Nouman is present in all objects
heroes.nouman()                                 //Nouman is present in all objects

Array.prototype.ali=function()
{
    console.log(`ALi says hi`)
}
heroes.ali()                              // it means hum ne sirf arra y ko hi power di ha arrays me accessable ha object me nai ha kue k hum ne usay array me banaya ha object me nai
heroPower.ali()                         // is k pas acccess nai ha object me


// Inheritance:
const user=
{
    name: "Nouman",
    email:"Mrnoumannomi7@gmail.com"
}
const teacher=
{
    makevideos:true,
}
const teachingSupport=
{
    isAvailable:false
}
const support=
{
    makeassignment:true,
    fullTime: true,
    __proto__: support
}
teacher.__proto__=user

//Old syntax:
//     __proto__: support
// }
// teacher.__proto__=user

//Modern Syntax:
object.setPrototypeOf(support,teacher)
// This is all about protypal inheritance
// What is Prototypal Inheritance? 
// Prototypal Inheritance means that in JavaScript, objects can inherit properties and methods from other objects using something called a prototype chain.
