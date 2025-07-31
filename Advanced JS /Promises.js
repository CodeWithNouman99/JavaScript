                                                                "Promises"

A Promise in JavaScript is a way to handle things that take time, like loading data from a server. It’s like a guarantee that you’ll get a result in the future — either a success or a failure.                                                                
Example:
           Imagine ordering food online:

The app says: "Your order is being prepared" → (Promise is pending)

Then it arrives → (Promise is fulfilled/resolved)

Or it fails due to no delivery → (Promise is rejected)                                                                            


fetch("https://something.com").then().catch().finally()
                                                    Here we create the promises

const promisesOne=new Promise(function(resolve,reject)
{
    //Do an async task
    // DB calls,cryptography
    setTimeout(function()
{
    console.log("Async task is complete")
    resolve()
},1000)
})
                                // Now here we consume the promises
promisesOne.then(function()
{
    console.log("Promises consumed")
})          

new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    console.log("Async task 2 is completed")
},1000)
}).then(function()
{
    console.log("ASYNC 2 resolved")
})


const PromiseThree= new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    resolve({username:"Chai aur Code",
        email:"mrnoumannomi7@gmailcom",
    })
},1000)
})
PromiseThree.then(function(user)
{
    console.log(user)
})


const PromiseFour= new Promise (function(resolve,reject)
{
    setTimeout(function()
{
    let error=true
    if (!error) {
        resolve({username:"Ali",password:123})
    }
    else
    {
        reject("Error something went wrong")
    }
},1000)
})
PromiseFour
        .then((user)=>
{
    console.log(user)
    return user.username
})
       .then((username)=>
{
    console.log(username)
})
      .catch(function(error)
{
    console.log(error)
}).finally(()=>

    console.log("Finally the promise is either resove or rejected")
)


const promisefive=new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    let error=true
    if(!error)
    {
        resolve({username:"Nouman",
            password:1234
        })
    }
        else{
            reject("Error Nouman something")
        }
    },1000)
})

async function consumepromisefive() {
    try
    {
        const response=await promisefive
        console.log(response)
    }
    catch{
        console.log("error")
    }

}
