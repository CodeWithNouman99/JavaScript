                                        // Functions

Functions are the building blocks of any programming language. It is used to provide modularity in the programs. Every program have atleast one function known as main function.
Function declarations:
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

1-The name of the function.
2-A list of parameters to the function, enclosed in parentheses and separated by commas.
3-The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.

                                // How to define function
                                
function intro(username)                // Fuction is the keyword and intro is the function name and username is a variable
{
    console.log("Hi");
console.log("My name is : Nouman");
console.log("I am a Front-end web developer");
}

                            // How to call function
intro()
                        // WE can also call function multiple times
 console.log("******************************8")


function intro(username , profession,age)               // these are parameter
{
    console.log(typeof(username));                      // string
    console.log(typeof(profession));                    // string
    console.log(typeof(age));                           // number
                          
console.log("Hi");
console.log(`my name is: ${username}`);
console.log(`I am a ${profession}`);
console.log(`i am a ${age} years old`);
}

intro("Ali", "Softeare Engineer", 28)
intro("Usman"," Mechanical Engineer", 31)             // These are arguments


function addTwoNumbers()
{
console.log(5+6);                       // here the output is 11 and undefined, means when we cannot return any value the compiler gives undefined
return 5+6
}
const result=addTwoNumbers()
console.log(result);                                    // output is: 11      11(This is the return value)
