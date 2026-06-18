// Operators
let a=4,b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);//exponent

//unary
console.log(a++);
console.log(b--);

let c=12.4,d=93.32;
console.log(c==d);
console.log(c===d);// check equal to and datatype
console.log(c!==b);// check not equal to and datatype
console.log(c!=d);

// logical operator
console.log(a<=b && c<=d);
console.log(a<=b || c<=d);

// conditional - if , if else, else if, ternary, switch statements
// ternary
let age=20;
let result=age>18 ? "adult":"minor";
console.log(result);

// MDN Docs - tells about the js things using google search

// Ques 1- get a user to input a number using prompt("Enter a number: "). Check if num is a multiple of 5 or not 
const prompt =require("prompt-sync")();
let num=Number(prompt("Enter a number: "));
if(num%5===0)
    console.log("multiple of 5");
else
    console.log("not a multiple of 5");

let grades=Number(prompt("Enter grades: "));
if(grades>=80 && grades<=100)
    console.log("Grade A");
else if(grades>=70 && grades<=89)
    console.log("Grade B");
else if(grades>=60 && grades<=69)
    console.log("Grade C");
else if(50<=grades<=59)
    console.log("Grade D");
else if(0<=grades>=49)
    console.log("Grade F");
else
    console.log("Invalid");