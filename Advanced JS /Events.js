                                                    Events:
ChatGPT said:
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
