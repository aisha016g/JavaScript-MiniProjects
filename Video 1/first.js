console.log("Welcome to first video");
console.log("Aisha");
// Variables - containers for data
age=20
name="Aisha";
price=234.34;
x=null;// we know what is inside it but it's null or empty
console.log(x);
y=undefined;// in this we don't know about what is inside it
console.log(y);
console.log(name,age);
console.log(price);
isFollow=true;

// Using of let , var and const
/* var - we don't use var because it can redeclare & updated. A global scope variable.
let - cannot be redeclared but can be updated. Block scope variable.
const - cannot be redeclared or updated. block scope variable
*/
let Fname="Krish Shukla";
let num=43948395;
let a;
console.log(a);
// const b; throw error in printing
const b=843;
console.log(Fname,num);

/*  data types- primitive -number , string, boolean, undefined ,null 
nonprimitive- BigInt, Symbol (both are not used ),
objects and functions
objects are a collects */

const st={
    fullName:"Radha Gupta",
    cgpa:9.8,
    n:45545,
    isTrue:false,
};
console.log(st);
console.log(typeof(st));
// edited or updated accessing keys 
st["cgpa"]=6;
console.log(st["cgpa"]);

// Practice Question 1
// create a const object called "product" to store info shown in image
const pen={
    title:"Ball Pen",
    ratings:4,
    deal:true,
    price:270.0,
    offer:5,
};
console.log(pen);

// Question 2 - create a const object called "profile" instagram profile objects to store info shown in picture 
const Profile={
    Name:"aisha_.505",
    Posts:5,
    follower:149,
    following:200,
    addName:"Aisha Gupta",
    Follow:true,
    Bio:"Quiet & Content - PSIT'28",
    ThreadId:"aisha_.505",
    // message=false,
};

console.log(Profile);
console.log(typeof(Profile["Follow"]));
console.log(typeof(Profile["Name"]));