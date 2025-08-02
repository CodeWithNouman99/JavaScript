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
