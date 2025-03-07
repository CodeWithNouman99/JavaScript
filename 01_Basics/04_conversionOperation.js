let score= null;
console.log(typeof score);
console.log(typeof (score));

let valueINNumber= Number(score)
console.log( valueINNumber);

// "33" => 33
//  "33abc" => Nan (Not a number)
// "true" => 1,                               "false"=> 0




let isloggedin= 1         //output is true     if declare 0 then output is false

let booleanIsloggedIn= Boolean(isloggedin)
console.log(booleanIsloggedIn);


// let isloggedin= ""  // output is false


//  let isloggedin="nouman"       output is true

let IsloggedIn= Boolean(isloggedin)
console.log(booleanIsloggedIn);


let someNumber=33
let stringNumber= String(someNumber)
console.log(stringNumber);               //outupt is 33

console.log( typeof stringNumber);          //outupt is string

////                            Operations  /////


let value=3
let negValue=-value
console.log(negValue);

let str1= "Hello"
let str2="     Nouman"
let str3=str1+str2
console.log(str3)

console.log("1" +2);  // output is 12
console.log("2" +1);    // output is 12
console.log("1" +"2");   //output is 12
console.log("1" +2+2);   //output is 122
console.log(1+2 +"2");   //output is 32 
console.log(+ false);
console.log(+"");

let gameCounter=100
gameCounter=gameCounter+5;
console.log(gameCounter);






