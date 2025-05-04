                                "Call Stack in JS"
                                
"Call stack" tracks the execution of function calls in a last-in-first-out(LIFO) order. It is how JS engine manages the order in which functions are executed and keeps track of where to return after a function completes.

=> When a fuction is called, it is "Pushed" onto the call stack.
=> When a function returns,it is "Poped" off the stack.
=> If the stack exceeds its limit, a" maximum call stack size exceded" error occurs called "Stack overflow".

                             E.g
function first()
{
    console.log("First function starts");
    second()        // Call second
    console.log("First function ends");
}

function second()
{
    console.log("Second function starts");
    third()
    console.log("Second function ends");
}

function third()
{
    console.log("Third functions satrts");
}

console.log("Program starts");
first()
console.log("Program ends");

    Output:

    Program starts
    First function starts
    Second function starts
    Third function starts
    Second function ends
    First function ends
    Program ends

                        // Example
 function introduceMe()
 {
    console.log("Hi, My name is Nouman");
    introduceMe()
 }
 introduceMe()
 console.log("Program ended");

                    infinite Recursion
                    
If a function call itself"without an exit condition" the call stcak grow indefinitely untill it crashes.
