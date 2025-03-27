                      // Ternary operator //

It is also called conditional operator, is a shortcut for writing simple if-else statement in a single line.
  
Syntax:

condition ? ExpressionIftrue : Expresion Iffalse;

Standard if-else:                                                  Ternary version:

let age=20                                                           let age=20
let message                                                          let message= age>=18 ? "Adult" : "Minor";        // Output: "Adult"
if(age>=18)
{                                                                              
message= "Adult"
}
else
{
message= "Minor"
} // output: Adult

let isRaining="True"
let activity= isRaining ? "Stay inside" : "Go outside" ;            // Output : Stay inside

true ? "Nouman" : 100                 // Output: Nouman

False ? "Nouman : 100                 // Output : 100
