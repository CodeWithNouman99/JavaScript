const month=["JAN","FEB","MARCH,","APRIL"]
const capitalMonth=month.map((month,index)=>
{
    console.log(index,month)
    return month.toLowerCase()
})

                                            //E.g
//Q: Use .map() to double each number in an array.                                        
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers);

//Q: Use .map() to return the square of each number in an a
const num=[2,4,6,8]
const square=num.map((value)=>
{
    var value2=value**2
   console.log(value2) 
})

//Q:Use .map() to add 10 to each number in an array.
const num=[1,2,3,4,5]
const adding=num.map((value)=>
{
    let plus10=value+10
    console.log(plus10)
    return plus10
})

//Q: Use .map() to convert numbers to strings in an array.
const num=[1,2,3,4,5]
const conversion=num.map((value)=>
{
    let converting=value.toString()
    console.log(converting)
    return converting
})

//Q: Use .map() to return true if a number is even, false if odd.

const input = prompt("Enter numbers separated by commas");  // e.g., "1,2,3,4"
const numArray = input.split(",").map(Number);              // Converts to [1, 2, 3, 4]

const check = numArray.map((number) => {
    const isEven = number % 2 === 0;
    console.log(isEven);
    return isEven;
});
                                            // Filter()
                                            //E.g
const num=[1,2,3,4,5,6,7,8]                                            
const onlyEven=num.filter(value=>value%2===0)
console.log(onlyEven)




                // Some() Method Examples
Q1:Use .some() to check if an array contains any even number.                
const numbers=[0,2,4,6,9]
const evenNumbers=numbers.some((value)=>
{
   const check= value%2==0
    console.log(check)
    return check
})

//Q2: Use .some() to check if any number in an array is greater than 10.
const num=[5,10,4,90]
const numbers=num.some((value)=>
{
    const checking=value>10
    console.log(checking)
    return checking
})

//Q3: Use .some() to check if an array of strings includes any word with length > 5.
const ch = ["Nouman", "Ali", "Usman", "Hassan"];
const characters = ch.some((values) => {
    if (values.length > 5) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
});

//Q4:Use .some() to check if a string array contains the word "apple".
let words=["Mango","Banana","Apricot","Apple"]
let ch=words.some((values)=>
{
    if(values.includes("Apple"))            // Another-Logic: if(values=="Apple")
    {
        console.log(true)
        return true
    }
    else{
        console.log(false)
        return false
    }
})


                                    // Every()  Method       E.g
//Q: Use .every() to check if all numbers in an array are positive.                                    
let num=[2,3,-4,5,6,7,8]
let check=num.every((value)=>
{
   let result= value>0
   console.log(result)
   return result
})

//Q: Use .every() to check if all elements in an array are strings.
let strings=["Ali","Usman","Bilal",21]
let num=strings.every((value)=>
{
    let result=typeof value==="string"
    console.log(result)
    return result
})

//Q: Use .every() to check if all ages in an array are 18 or older.
let ages=[21,45,90,81,1]
let check=ages.every((value)=>
{
    const result=(value>=18)
    console.log(result)
    return result
})
