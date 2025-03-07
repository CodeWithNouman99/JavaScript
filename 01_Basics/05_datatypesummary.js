//    Primitive//

//  7 types: String(""), number(2), Bolean(T/F),  null(0), undefined(Not initialization), symbol(for unique value), bigInt(large value)

// Non-Primitive (Reference)

// types: Arrays, Objects, Functions

//Note: JavaScript is a dynamically typed language means we can store any type of value in any variable e.g value=Nouman

const name="Nouman"         // String
let value=12               // number
const isLoggedIn=true    //Boolean
let username= null       //null
let age= undefined       //undefined
const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId);     //false


const heroes=["Shahrukh khan", "Salman khan", "Amir khan"]  // This is an array

const Actors={
    name: "Shahrukh khan",
    age: 40,
    isFamous:true,
}                        // These are the objects

const myFunction= function()
{
    console.log('Hello world');
    
}
console.log(typeof myFunction);



//Note****
//undefined produces output is "undefined"
// null produes output is "object"



