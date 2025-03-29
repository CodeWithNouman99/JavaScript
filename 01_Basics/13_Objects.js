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

// We can also add object in object like:

const person2= 
{
    Name : "Ali",
    city: "Faisalabad",
    age : 20+5,
    isStudent : false,
    address: {
        city : "LAHORE",
        pinCode : 5678,
        state : "Punjab",
      moreDetails:
        {
          population: 92848684568,
          area: "456 sq km",
    }
      console.log(person2.address.city)
      console.log(person2.moreDetails.area)

// Delete object:

delete person2.address.state  // this is the syntax

// Object.seal():

The Object.seal() method is used to prevent new properties from being added to an object and marks all existing properties as non-configurable (cannot be deleted or reconfigured). However, the values of existing properties can still be modified if they are writable.
  
  Syntax: Object.seal(obj);

  Example:
const user = {
  name: "Alice",
  age: 25,
};

Object.seal(user);

// ✅ Can modify existing properties
user.age = 30; // Works (if 'age' is writable)

// ❌ Cannot add new properties
user.country = "USA"; // Fails (silently or throws in strict mode)

// ❌ Cannot delete properties
delete user.name; // Fails (silently or throws in strict mode)

// ❌ Cannot reconfigure properties
Object.defineProperty(user, "name", { configurable: true }); // Throws error

//Object.freeze():

The Object.freeze() method is used to completely lock an object, making it immutable. This means:

1- No new properties can be added.

2- Existing properties cannot be removed.

3- Existing properties cannot be reconfigured (e.g., changed from writable: true to writable: false).

4- Values of existing properties cannot be modified (if they are not already frozen or nested objects).
  
Example:

const user = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
  },
};

Object.freeze(user);

// ❌ Fails (no additions)
user.country = "USA"; // Ignored (or throws in strict mode)

// ❌ Fails (no deletions)
delete user.name; // Ignored (or throws in strict mode)

// ❌ Fails (no value changes)
user.age = 30; // Ignored (or throws in strict mode)

// ⚠️ Nested objects are NOT frozen!
user.address.city = "Oz"; // Works! (needs deep freeze)

in() Keyword in JavaScript:

The in operator checks if a property exists in an object or its prototype chain. It returns true if the property is found, otherwise false.
  Syntax:
              prop in object:
Example:

const user = { name: "Alice", age: 25 };

console.log("name" in user);      // true  
console.log("address" in user);   // false  
