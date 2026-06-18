for(let i=0;i<5;i++)
{
    console.log(i);
}
let i=0;
while(i<=5){
console.log(i);
i++;
}
let j=0; 
do{
    console.log("hi");
    j++;
}
while(j<=5)
let str="Abcdefghijkl"
// for of loop - to traverse for strings or arrays
for(let t of str)
    // iterator->character
{
    console.log(t);
}
// for-in loop - to use in object keys

let st={
    name:"Rahul Kumar",
    age:20,
    cgpa:8.9,
};
for(let t in st)
{
    console.log(t,st[t]);
}

//Question 1 - print all even num 1 to 100

for(let t=1;t<=100;t++)
{
    if(t%2==0)
        console.log(t);
}

// Question 2- Guess game a number
let guessNum=64;
const prompt=require("prompt-sync")();
let gameNum=Number(prompt("Enter a number: "));
while(gameNum!=guessNum){
    gameNum= Number(prompt("Entered wrong num guess again!! "));
}

console.log("Right");

//strings
let a="Strings Methods";
let b="String 2";
console.log(a.length);

// template literals are string and denoted by ` `(these are not single inverted commas) but it is a shortcut type to print a sentence mainly for objects 
const obj={
    name:"pen",
    price:10,
};

//  like we want to print a statement using the simple method but it gets complicated like this 
console.log("The name is",obj.name,"price is",obj.price,"rupees");  // is gets complicated to we use this method of template literals
let output=`The name is ${obj.name} and price is ${obj.price} rupees`;
console.log(output);

let str2=`this can also do operations like ${1+2+3}`;
console.log(str2);

// strings methods - manipulate a string 
let str1="  ApdsjbrflRGW rj wrrbjw ef  ";
let c="hello";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());// remove whitespaces
// slice returns part of strings
console.log(str1.slice(4,9));
console.log(str1.charAt(4));
console.log(str1.concat(c));
let temp=str1.replace("wr",9);
console.log(temp);
let temp2=str1.replaceAll("w",9);
console.log(temp2);

// Question 3 - prompt the user to enter full name . Generate a username for them based on the input , Start username with @, followed by thier fullname and ending with the fullname length.

const prompt=require("prompt-sync")();
let name=String(prompt("Enter your full name: "));
let id=`@${name}${name.length}`
console.log(id);
let username="@"+name+name.length;
console.log(username);
console.log("@",name.concat(name.length));