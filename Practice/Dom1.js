let btn = document.createElement("button");
btn.innerText="Click Me";
console.log(btn);

btn.style.backgroundColor="red";
btn.style.color="white";
let b = document.querySelector("body");
b.prepend(btn);

// Question 2 

let para=document.querySelector("p");
para.getAttribute("class");

// set changes and overrides completely so we use classList
// para.setAttribute("class","newClass"); // font color changed

//classList - list of classes 

para.classList.add("newClass"); // font color remain same as prev class
para.classList.remove("newClass"); 

