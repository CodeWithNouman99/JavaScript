//                           **Stack and Heap memory **


//stack:
          // Stack memory Is used in all primitive datatypes means we declare any variable we get copy
          

          //heap:
                  // Heap memory is used in all non-Primitive(reference) data types, here we receive reference

                let myYoutubename= "Nouman@com"
                let anotherName= myYoutubename
                let anothername= "nomi"
                console.log(anothername);
                console.log(anotherName);
                


                let userone= {
                  email:"mrnooumannomi7@gmail.com",
                  number: "00000",
                  name: "nomi",
                  address: "Faisalabad,"
                }
                 let usertwo=userone
                 usertwo.email= "nomi@gmail.com",
                 console.log(userone.email);
                 console.log(usertwo.email);
                 
                 