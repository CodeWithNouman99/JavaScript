// Switch case //
// Q1//

const dayNumber = prompt("enter a day number")

if(dayNumber ===0)
{
    console.log("It is sunday today");
}
else if(dayNumber ===1)
{
    console.log("It is monday today");
}
else if( dayNumber === 2)
{
    console.log("It is tuesday today");
}
else if( dayNumber === 3)
    {
        console.log("It is Wednesday today");
    }
    else if( dayNumber === 4)
        {
            console.log("It is Thursday today");
        }
        else if( dayNumber === 5)
            {
                console.log("It is Friday today");
            }
            else if( dayNumber === 6)
                {
                    console.log("It is Saturday today");
                }
                else 
                {
                    console.log("Please enter a valid  day number");
                }

//Q2//
                        const dayNumber2 = prompt("Enter a day number")
                        switch(dayNumber2)
                        {
                            case "0":
                                console.log("it is sunday today");
                                break;
                                case "1":
                                    console.log("it is monday today");
                                    break;
                                    case "2":
                                        console.log("it is tuesday today");
                                        break;
                                        case "3":
                                            console.log("It is wednesday today");
                                            break;
                                            case "4":
                                                console.log("It is thursday today");
                                                break;
                                                case "5":
                                                    console.log("it is friday today");
                                                    break;
                                                    case "6":
                                                        console.log("It is saturday today");
                                                        break;
                                                        case "7":
                                                            console.log("it is sunday today");
                                                            break;
                        
                        default:
                        console.log("enter a valid number");
                        }

//Q3//
let a = Number(prompt("Enter the 1st number"));  // Convert to number
let b = Number(prompt("Enter the 2nd number")); // Convert to number
let operator = prompt("Enter the operator (+, -, *, /)");

switch (operator) {
    case "+":
        console.log("a + b =", a + b);
        break;
    case "-":
        console.log("a - b =", a - b);
        break;
    case "*":
        console.log("a * b =", a * b);
        break;
    case "/":
        console.log("a / b =", a / b);
        break;
    default:
        console.log("Invalid operator");
}

//Q4//
let grade= prompt("Enter a grade")
switch(grade)
{
    case "A":
    console.log("Excellent!");
    break;
    case "B":
        console.log("Good job!");
        break;
        case "C":
            console.log("Average!");
            break;
            case "D":
                console.log("Needs improvement!");
                break;
                case "F":
                    console.log("Fail!");
                    break;
                    default:
                        console.log("Invalid grade");
}
