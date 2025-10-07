// // //                                              Loops:
// // // Loops are used to execute a piece of code again and again
// // for(let i=1;i<6;i++)
// //     {
// //         console.log(i)
// // }    
// // console.log("Loop has ended")


// // // Calculate sum 1 to 5
// // let sum=0
// // for(let i=1;i<=5;i++)
// // {
// //     sum=sum+i
// // }
// // // console.log(sum)

// // // Calculate sum 1 to n
// // let sum2=0
// // // let n=Number(prompt("Enter the number"))
// // // for(let i=1;i<=n;i++)
// // {
// //     sum2=sum2+i
// // }
// // // console.log(sum2)


// // //Print each element of an array:
// // let arr=["apple","Mnago","Apricot","Banana","Watermelon"]
// // for(let i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i])
// // }

// // //Reverse count from 10 to 1:
// // for (let i = 10; i >= 1; i--) {
// //   console.log(i);
// // }


// // //                                          Infinite loop
// // // A loop that never ends

// // //                                          While Loop
// // let i=1
// // while(i<=5)
// // {
// //     console.log("i =",i)
// //     i++
// // }

// // //                                          do-while loop
// // do{
// //     console.log("i=",i)
// //     i++
// // }while(i<=10)


// // //                                              for-of loop
// //The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It gives you the values directly instead of indexes
// for (let item of iterable) {
//   // code to execute
// }

// let str="NoumanAslam"
// for(let val of str)
// {
//     console.log(i)
// }

// let colors = ["red", "green", "blue"];
// for (let color of colors) {
//   console.log(color);
// }


// //                                              for in loop
// //The for...in loop in JavaScript is used to iterate over the keys (or property names) of an object. It’s mainly used for objects, not arrays, because it returns property names rather than values
// for (let key in object) {
//   // code to execute
// }


// let person = { name: "Ali", age: 25, city: "Lahore" };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }
// let student=
// {
//     name:"Nouman",
//     class:"BSSE",
//     cgpa: 3.53,
//     isPass:true
// }
// for(let i in student)
// {
//     console.log(i)
// }


//                                      Practice 
//Print all even number from 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2===0)             // for odd if(i%2!===0)
    {
        console.log(i)
    }
}