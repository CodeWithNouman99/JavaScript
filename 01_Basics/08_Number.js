const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString().length);

console.log(balance.toFixed(2));
 

const anotherNumber=23.894567
console.log(anotherNumber.toPrecision(3));

const otherNum=1000000
console.log(otherNum.toLocaleString());             // if number=1000000, this function gives output is 1,000,000


console.log(otherNum.toLocaleString('en-PKR'));      // For country Currency   

                            //**Maths**//


// Math Functions:


// Math.abs() this function produes negative value to positive value but not positive value to negative value
// Math.round() this function round of the value suppose 123.456 it gives 123.46
// Math.ceil() this function takes top value means if we write 4.2 it produce result 5
//Math.floor() this function takes lower value means if we write 4.2 it produces result 4
// Math.min(4,3,6,8) this function checks minimum value in an array and produce result in this case it produces 3
//Math.min(4,3,6,8) this function checks maximum  value in an array and produce result in this case it produces 8
//Math.random() this function produces result in between 0 and 1 
