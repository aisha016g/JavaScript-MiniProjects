// FUNCTIONS 
function sum(x,y){
    return x+y;
}

let val= sum(3,5);
console.log(val);

/*Moder JS feature
arrow functions - compact way of writing a function 
syntax- 
const functionName=(param 1 , param 2)=>{
    // do some work
    }
*/

const arrowSum=(a,b)=>{
    return a+b;
}

const mul=(a,b)=>{
    console.log(a*b);
}
let ans=arrowSum(6,8);
console.log(ans);
mul(1,0);

// writing for single line
const msg =()=> console.log("Hello");

msg();

//  Question 1 - create a function using "function" keyword that takes a String as an argument and return the number of vowels in the string
const prompt=require("prompt-sync")();
let name=prompt("Enter a string : ");

const CountVowels=(name)=>{
    let count=0;
    for(let i=0;i<name.length ;i++)
        {
            if(name[i]==='a' || name[i]==='e' || name[i]==='o' || name[i]==='i' ||name[i]==='u')
                count++;
        }
        return count;
    };
function cnt(name){
    let count=0;
    for(let i=0;i<name.length ;i++)
        {
            if(name[i]==='a' || name[i]==='e' || name[i]==='o' || name[i]==='i' ||name[i]==='u')
                count++;
        }
        return count;
}
let vowels=CountVowels(name);
    console.log(vowels);
    let fun=cnt(name);
    console.log(fun);

// METHODS (mainly used in arrays)- methods are functions only but when they are combined with any data structure or object is method
// for each loop in arrays or callback function - callback function is function passed as anargument to another function 
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});

let city=["pune","goa","ita"];
city.forEach((val,idx,city)=>{
    console.log(val.toUpperCase(),idx,city);
});

// forEach is aka Higher order Function /methods
// Question 1 - given array of nums print sqof each val useing forEach

let nums=[1,2,3,4,5,6,7];

nums.forEach((val)=>{
    console.log(val*val);
});

// Map method in array similar to forEach and restuns a new array with result 

let newArr=nums.map((val)=>
{
    return val*2;
});
console.log(newArr);

// Filter - create a new array of elements that give true for a condition / filter 

let arr1=[1,2,3,4,5,6,7];
let evenArr= arr1.filter((val)=>{
    return val%1 !==0;
});
console.log(evenArr);

// Reduce - perform some operation and reduces the array to single value it return that single value
const output=arr1.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(output);

const output1=arr1.reduce((prev,curr)=>{
    return prev<curr?prev:curr;
});
console.log(output1);

// Question 2 - maths marke given filter 90+
let maths=[98,12,48,98,89,1,2,99,93,74,12,33,78];
let topper=maths.filter((val)=>{
    return val>90;
})
console.log(topper);

/* Take n as input create array 1 to n
use reduce to cal sum 
use reduce to cal product */

const prompt= require("prompt-sync")();
let n=Number(prompt("Enter a number : "));
let array1=[];
for(let i=1;i<=n;i++){
    array1[i-1]=i;
}
console.log(array1);

const add=array1.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(add);

const prod=array1.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(prod);
