//                                          ** Strings**
 const name="Nouman"
 const repoCount= 5
 console.log(name + repoCount + "value")

//This is an older trend means not used frequently
//Note:     ` This is the becticks `
 console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


 const gameName= new String("Nouman_Aslam")
 console.log(gameName.__proto__);
  console.log(gameName.length);
  console.log(gameName.toUpperCase()); // ToUppercase is a function we must write () at the end the end of the function name, and this function does not change the original function

  console.log(gameName.charAt('2'));   //charAt is also a function we also must write () at the end of the function name, and this function tells us which character has given index means suppose we give index number 2 so the answer is "u".  

//Note: we can use toggle word wrap by entering in command pallete

console.log(gameName.indexOf('m'));   // output is 3

const newString= gameName.substring(0,4)
console.log(newString);   //output is Noum, and important thing is that last value is not count

const anotherString= gameName.slice(-4,4) // In slice we can give negative value
console.log(anotherString);

const newString1= "           Nouman      "      
console.log(newString1);                    //output is            Nouman 
console.log(newString1.trim());             //Output is Nouman, Trim is used to remove the white spaces

const url= "https://nouman.com/nomi@Software Engineer"
console.log(url.replace("@", "_"));                  // output is https://nouman.com/nomi_Software Engineer . Replace function is used for replacement .

 console.log(url.includes("Nouman"))                  // output is false coz "nouman" is in small letter.
 







  
  
  
 
 
 