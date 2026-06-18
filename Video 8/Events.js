/* Events 
change in state of an object is known as event.
Events are fired to notify code of "intresting changes" that may affect code execution.
- Mouse events(click, double click, etc)
- Keyboard events(keypress, keyup, keydown)
- Form event(submit etc)
- Print event & many more.
*/

let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you r inside div");
}

/* Event Object
it is a special object that has details abt the event All event handlers have access to Event Object's properties and methods
node.event = (e) =>{
    // handle here
     }
    e.target, e.type, e.clientX , e.clientY */

btn1.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

/* Event Listeners
node.addEventListener(event,callback)
node.removeEventListener(event,callback)
 callback reference should be same to remove
*/

btn1.addEventListener("click",(evt) =>{
    console.log("button was clicked - handler 1");
    console.log(evt);
});

btn1.addEventListener("click",() =>{
    console.log("button was clicked - Handler 2 ");
});

const handler3 = () => {
    console.log("button 1 was clicked - handler 3 ");
};


btn1.addEventListener("click", handler3);

btn1.addEventListener("click",() =>{
    console.log("button was clicked - Handler 4 ");
});

btn1.removeEventListener("click", () =>{
    console.log("button1 was clicked - handler 3");
});

btn1.removeEventListener("click", handler3);

