/* DOM Manipulations
Attributes - 
getAttribute(attr)- to get the attribute value
stAttribute(attr,value)- to set the attribute value(change it )
Style
node.style
*/
let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
// changes the class name in html (inspect in element column in browser)
console.log(para.setAttribute("class","newClass"));

// let div=document.querySelector("div");
// console.log(div);

div.style.backgroundColor="green";
div.style.fontSize="50px";
div.innerText="hello";

// div.style.visibility="hidden";//to hide the box


/*
 Insert Elements
let el= document.createElement("div")
node.append(el) - adds at the end of the node(inside)
node.prepend(el) - adds at the start of the node(inside)
node.before(el)- adds before the node (outside)
node.after(el)- adds after the node (outside)

    Delete Elements- 
node.remove() - removes the node
*/
let newBtn=document.createElement("button");
console.log(newBtn);
newBtn.innerText="CLICK !!";
console.log(newBtn);

let div1=document.querySelector("#box1");
// console.log(div1);

// div1.prepend(newBtn);// btn will add at before in box
// div1.append(newBtn);// btn will add at last in box
// div1.before(newBtn);// add just before div starts
// div1.after(newBtn);// add just after div ends

let para1= document.querySelector("p");
para1.remove();  // removes the paragraph
