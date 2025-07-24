Rest Operator (...):
        =>The rest operator is used to collect multiple values into a single array or object.
              =>It’s used in function parameters or object/array destructuring.
  Example:
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // Output: 6                =>...numbers collects all arguments into an array
                                        In Array Destructuring (Rest of the values):
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]
                                         In Object Destructuring (Rest of the properties):
const user =
  { 
    name: "Nouman",
   age: 24, 
   city: "Faisalabad"
  };
const { name, ...others } = user;
console.log(name);   // "Nouman"
console.log(others); // { age: 24, city: "Faisalabad" }

| Feature     | Rest Operator                      | Spread Operator                 |
| ----------- | ---------------------------------- | ------------------------------- |
| **Purpose** | Collects multiple values into one  | Expands one value into multiple |
| **Used in** | Function parameters, destructuring | Arrays, objects, function calls |
| **Syntax**  | `function(...args) {}`             | `[...array1, ...array2]`        |

