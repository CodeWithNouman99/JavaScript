                                        "JS Practices"
Q1) Write a program that prints "Hello World" on the console.
                  console.log("Hello World")                                     
Q2) Write a function that takes two numbers as input and print their sum.
function sum(a,b)
{
    let result;
    result=a+b
    console.log(result)
}
sum(10,10)                       // 20
sum(-1,0)                      // -1
sum(NaN,90)                  // Nan
sum(undefined,10)           // Nan
sum(null,10)               //10
sum(10.90,10)             // 20.9
Q3) Write a function that calculates and prints the area of a rectangle given its length and width.
function rectangle(length,width)
{
    if(length<0)
    {
        throw new Error("Length should be a positive number")
    }
    if(width<0)
    {
        throw new Error("Width should be a positive number")
    }
    let Area
    Area=length*width
    console.log(Area)
}
rectangle(10,10)                        //100
rectangle(200,-900)                      //Width should be a positive number
rectangle(-2000,0)                     // Length should be a positive number
Q4) Write a function that tells if a number is even or odd
function checks(number)
{
    // return number%2==0 ? "Even": "Odd"                          // Another solution with ternary Operator
    if(number%2==0)
    {
        console.log(number,"Number is even")
    }
    else
    {
        console.log(number,"Number is odd")
    }
}
checks(5)                       //Odd
checks(6)                       //Even
checks(0)                       // Even 
checks(-1)                      //Odd
Q5) Write a function that finds and prints the smallest number among three givrn number
function checking(num1,num2,num3)
{
    if (num1<num2)
    {
        console.log("The smallest number is:",num1)
    }
    else if(num2<num3)
    {
        console.log("The smallest number is:",num2)
    }
    else
    {
        console.log("The smallest number is:",num3)
    }
}
checking(3,3,3)         // 3
// Another solution:
function checking(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return "The smallest number is: " + num1;
    } else if (num2 < num3) {
        return "The smallest number is: " + num2;
    } else {
        return "The smallest number is: " + num3;
    }
}

console.log(checking(1, 2, 3));  // Output: The smallest number is: 1
Q6) Write a function that returns the reverse of a string

function reverseAstring(input)
{
    if(typeof input!=="string")
    {
        throw new Error("Plz enter a string")
    }
    for(let i= input.length -1;i>=0;i--)
    {
        console.log(input[i])
    }
}
 reverseAstring("Software Devleopment")
console.log( reverseAstring(12345))

Another: 

let strings= ["Nouman","Ali","Usman","Hamza","Bilal"]
let result= strings.reverse()
console.log(result)

Q7: Write a function that calculates the factorial of a given number
function factorial(input)
{
    let result=1;
    for(let i=1;i<=input;i++)
    {
        result=result*i;
        console.log(result)
    }
}
factorial(0)

Q8: write a function that tells if provided year is a leap year or not.
function leapYear(year)
{
    if(typeof year!=Number)
    {
        throw new Error ("plz enter a valid year")
    }
    if(year%4==0)
    {
        console.log(`${year} is a leap year`)
    }
    else
    {
        console.log(`${year} is not a leap year`)
    }
}
leapYear(2026)

Q9: Write a function that calculates and prints the sum of the digits of a given number.
let arr = [1, 2, 3, 4, 5];
let sum = 0; // Initialize ONCE outside the loop

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add the ELEMENT, not the index
}

console.log(sum); // Output: 15 (1+2+3+4+5)

Q10: Write a function that generates and prints a multiplication table for a given number up to a specified range.
function table(num,range)
{
    if(num<1)
    {
        throw new Error("Please give me the number greater than 1")        
    }
    if(range>10)
    {
      throw new Error("Please give me the number range under 10")     
    }
    for(let i=1;i<=range;i++)
    {
        console.log(`${num} * ${i} =`+num*i)
    }
}
table(5,10)

Q11: Write a function that finds and prints the maximum number in an array of numbers
function findMaxNumber(arr) {
  console.log(Math.max(...arr));
}

// Example usage:
findMaxNumber([3, 7, 2, 9, 1]);  // Prints: 9
findMaxNumber([-5, -2, -10]);     // Prints: -2
