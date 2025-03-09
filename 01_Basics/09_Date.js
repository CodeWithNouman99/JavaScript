let mydate=new Date
console.log(mydate.toString());

console.log(mydate.toDateString());          //SUN MAR 09 2025
console.log(mydate.toISOString());          //2025-03-09T01:54:15.481Z
console.log(mydate.toJSON());               //2025-03-09T01:54:15.481Z
console.log(mydate.toLocaleDateString());   // 3/9/2025

// Interview Question//
console.log(typeof mydate)                  // object


let mycreateddate= new Date(2025, 2, 9)         // Month starts from 0 in Javascript
console.log(mycreateddate.toDateString());






