const balance=1000
if(balance===1000)
  console.log("hi")
console.log("hiiiiiii")

const email="nomi7@gmail.com"

if (email) {
  {
    console.log("Got")
  }
  }
  else{
    console.log("Don't")
  }
  

  Note: 
  Falsy values:
  => false, 0 ,-0, BigInt(on),"",null,undefined,NaN
  truthy values:
  => "0",'false'," ",[],{},function(){}


                Nullish Coalescing operator(??): null, undefined
  let val1
  val1=5 ?? 10
  console.log(val1)            //5 
