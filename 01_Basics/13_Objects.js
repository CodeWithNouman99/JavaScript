                  //      Objects        //  
const User=
  {
    Name : "Nouman,
    Degree: "BS(SE),
    Section: "E2",
  registrationNo : 2023-ag-10427
  }

Task:
Create an object called person with:

name (string)

age (number)

isStudent (boolean)

Then:

Print the entire object

Update the age to age + 5

Add a new property: city (string)

Print just the name and city

Solution:

const person = {
    name: "Nouman",
    age: 20,
    isStudent: true,
};

// 1. Print original object
console.log(person); // { name: "Nouman", age: 20, isStudent: true }

// 2. Update age (+5)
person.age += 5;

// 3. Add new property (city)
person.city = "Faisalabad";

// 4. Print name and city together
console.log(`${person.name} lives in ${person.city}`); // "Nouman lives in Faisalabad"
