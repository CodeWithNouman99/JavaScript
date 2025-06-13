Definition:
             => It is a powerful syntax introduced in ES6  that unpacks elements  from arryays, objects or strings into indiviual items.
             => It is like opening box and placing its contents separately.

Example:
const num1=[1,2,3,4,5]
const num2=[6,7,8,9,10]
num1.concat(num2)          // [1,2,3,4,5,,6,7,8,9,10]


const array1=[1,2,3,4,5]
const array2=[6,7,8,9,10]
const name="Nouman"
const joinedarrray=[...num1,...num2,...name]
console.log(joinedarray)        // [1,2,3,4,5,,6,7,8,9,10,'N','O,'U','M','A','N']

Example(Object):
const username=
{
name: "Nouman',
age: 20,
}
const updateduser=
{
}
console.log({...username,city:"FSD'})             // {name:Nouman,age:20,,city:"FSD"}
