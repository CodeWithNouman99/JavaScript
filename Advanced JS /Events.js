                                                    Events:
In JavaScript, an event is an action or occurrence that happens in the browser and can be detected by JavaScript. Examples of events include a user clicking a button, moving the mouse, pressing a key, submitting a form, or the page loading. JavaScript allows you to write code that "listens" for these events and responds when they occur using event listeners.

For example:
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
Pracctice:

                                                        // HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="Events.js" defer></script>
    <link rel="stylesheet" href="Index.css">
</head>
<body style="font-family: cursive;">
    <h1>Event Listeners</h1>
    <div class="container">
        <div class="card add-card">+</divclass>
    </div>
</body>
</html>


                                      //CSS
.container
{
    color: green;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.card
{
    width: 100px;
    height: 120px;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:4px;
    font-size: 36px;
}
h1{
    background-color: red;
}
.add-card
{
    cursor: pointer;
}


                              // Javascript


// const h1=document.querySelector('h1')
// {
//     function sayHi()
//     {
//         console.log("Hello")
//     }
// }
// h1.onclick=sayHi
// h1.addEventListener('click',sayHi)
// h1.addEventListener('click',function (){
//     console.log("Second hello")
// })
const container=document.querySelector('.container')
const div1=document.querySelector('.card')
{
    function sayHi(){
    console.log("Card selected")
}
}
 let count=1
div1.addEventListener('click',()=>
{
    const newcard=document.createElement('div')
    newcard.classList.add('card')
   newcard.innerText=count
   count++
     container.append(newcard)
})

                                          // Another day Practice
  
                                          **Event propagation**


               => It means how an event (like a mouse click) moves through the elements on a webpage. It happens in **three steps**:

1. Capturing phase:
                     The event starts from the top (like `<html>` or `<body>`) and goes down to the element that was clicked.
2. Target phase:
                     The event reaches the exact element that was clicked.
3. Bubbling phase:  
                     Then the event moves back up to the top.

By default, 
              JavaScript handles events in the **bubbling phase**, but you can choose to catch them in the **capturing phase** too.

Example:
If you click a button inside a div, the event goes from `<body>` → `<div>` → `<button>` (capture), then back `<button>` → `<div>` → `<body>` (bubble).

  Practice:
document.getElementById('images').addEventListener('click',function(e){
    console.log("Clicked inside the url")
},false)

document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl Clicked")
},false)


                        "Concept of e.stopPropagation()"

=> When you click an element inside another element (like a button inside a div), the event will trigger for both — first the button, then the div (this is bubbling).
                      => If you don't want the parent elements to react to the event, you use e.stopPropagation().

Example:
<div onclick="alert('DIV clicked')">
  <button onclick="event.stopPropagation(); alert('Button clicked')">Click me</button>
</div>



                                              // Events Whole Practice
                //To apply  event First approach is:
document.getElementById('owl').onclick=function()
{
    alert('hello')
}

                                           // 2nd approach (Recommended)
document.getElementById('owl').addEventListener('click',function(e){
    console.log("Owl Clicked")
},true)   
// type,timestamp, defaultPrevented
// target,toElement,srcElement,currentTarget
// clientX,clientY,screenX,screenY
// We can use attachEvent()
document.getElementById('images').addEventListener('click',function(e){
    console.log("Clicked inside the url")
},true)

document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl Clicked")
},true)


document.getElementById('Google').addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation()
        console.log("Google")
},false)


// Practice: I want to remove the pic when i clicked on that.
document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode)
    let removeIt=e.target.parentNode
    removeIt.remove()
},false)
