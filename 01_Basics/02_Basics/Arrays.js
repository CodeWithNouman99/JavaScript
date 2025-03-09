   // Arrays           //

const arr=[0,1,2,3,4,5]
console.log(arr[5]);


              //  Arrays methods//

              // Push() This method/function increases the given number into the array//

             arr.push(9)
             console.log(arr);

             // Pop() This function/method remove the last number in the array,we cannot add any number in the ()

             arr.pop()
             console.log(arr);

             arr.unshift(0)         // this function adds the given number in the start
             console.log(arr);
             
             arr.shift()
             console.log(arr);  //This function remove the given numeber(unshift number) means it removes first number

             console.log(arr.includes(9));      // This function checks the given number in the array and gives output in Boolean 

             console.log(arr.indexOf(9));       // This function checks the given number in the array, if the given array has given element it produces the corresponding result value otherwise -1
            
             const newarr=arr.join()            // it adds all the elements of an array into a string
             console.log(newarr);   
             console.log(typeof newarr);          // ouput: String


             // Slice and splice//

             console.log("A" , newarr);

             const myn1=newarr.slice(1,3)
             console.log(myn1);

