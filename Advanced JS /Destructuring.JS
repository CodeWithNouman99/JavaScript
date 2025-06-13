Definition:
              It makes it possible to unpack vlaues from arrays or properties of objects, into distinct variables.
OR:
              It is a convenient way to extract values from array or properties of objects into distinct variables. It simplifies code and makes it more readable.

1. Array Destructuring
Extract values from arrays by position.


Example:
            const colors = ["red", "green", "blue"];

// Old way:
// const first = colors[0];
// const second = colors[1];

// Destructuring:
const [first, second, third] = colors;

console.log(first);  // "red"
console.log(second); // "green"

Another Example:
                 const cities=["FSD","LHR","ISL","KARACHI"]
                // Old way
// const first= cities[0]
// const first= cities[1]
// const first= cities[2]
// const first= cities[3]

                // Destructuring

const [First,Second,third]=cities
console.log(First);     // FSD
console.log(Second);     // LHR
console.log(third);      // ISL

Skipping Items:

const [first, , third] = ["a", "b", "c"];
console.log(first); // "a"
console.log(third); // "c"

2. Object Destructuring:
Extract properties from objects by key name.

const person = { name: "Alice", age: 25 };

// Old way:
// const name = person.name;
// const age = person.age;

// Destructuring:
const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 25


Swapping values:

let a = 1, b = 2;
[a, b] = [b, a]; // Swap
console.log(a, b); // 2, 1


Key Notes
✔ Arrays: Position-based extraction [a, b] = arr
✔ Objects: Property-based extraction { prop } = obj
✔ Default values: Fallback if undefined { a = 1 } = {}
✔ Renaming: { prop: newName } = obj
