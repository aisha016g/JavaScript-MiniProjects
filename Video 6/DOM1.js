alert("Hello!");

 /*console.log- print 
 console.dir - document prep methods 
 DOM- DOM is a way to access html things objects or files in js file */
 console.log(window);
 console.log(document);
 console.log(document.body);

 /* DOM Manipulations 
 Ways to access or select - 
 1- Selecting with id - document.getElementById("myID")
 2- Selecting with class - document.getElementsByClassName("myClass")
 3- Selecting with tag - document.getElementsByTagName("p") */

let heading = document.getElementById("head"); // will return value of h1
console.dir(heading);

let headings=document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let para=document.getElementsByTagName("p");
console.dir(para);

/*Query Selector - return list of all nodes
Query Selector- document.querySelector("myId / .myClass / tag")  - gives 1st element
Query Selector All - document.querySelectorAll("myId / myClass / tag")- return all element 
*/
let firstEl=document.querySelector("p"); // first element
console.dir(firstEl);
let allEl=document.querySelectorAll("p"); // all element
console.dir(allEl);

let classEle= document.querySelector(".heading-class");
console.dir(classEle);

let classEleAll= document.querySelectorAll(".heading-class");
console.dir(classEleAll);


let IdEle= document.querySelector("#head");// id doesn't have All coz it only consist of unique type
console.dir(IdEle);

/* Properties 
get - access
set - change/update
tagName - return tag for element nodes
innerText - return the text content of the element and all its children
innerHTML - return the plain text or html contents in the element
textContent - return textual contenteven for hidden elements
*/ 

document.querySelector("div").children;

let div=document.querySelector("div");
console.dir(div);
div.innerHTML;
div.textContent;

/* Question 1- Create H2 heading element with test - "Hello Js" append "from Apna cllg student"  to this text using JS

Question 2 - Create 3 div with common class name - "box" . Access them and add some unique of them.

*/
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText +" From AC"; // concatenate

let divs=document.querySelectorAll(".box");
// console.log(divs[0]);

// divs[0].innerText = divs[0].innerText + " Unique 1";
// divs[1].innerText = " unique 2";
// divs[2].innerText = " unique 3";
// console.log(divs[1]);
// console.log(divs[2]);
// the above similar work will do the below for of loops 
for(let i of divs){
    console.log(i);
    console.log(i.innerText);
}
let idx=1;
for(let i of divs){
    i.innerText=`new unique value ${idx}`;
    idx++;
}

// Data Manipulation
/* getAttribute(attr) - to get Attribute value
setAttribute(attr,value) - to set attribute value
 */

let div1=document.querySelector("div");
console.log(div1);
let id=div1.getAttribute("id");
console.log(id);