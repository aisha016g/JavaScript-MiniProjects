console.log("one");
console.log("two");
console.log("three");

/* Asynchronous 
due to synchronous prog,sometimes imp inst get blocked due to some prev inst, which causes a dealy in UI Async code execution allows to execute next inst immediately & doesn't block the flow
*/

function hello(){
    console.log("hello1");
}

setTimeout(hello,2000); // 2s=2000ms
//or

setTimeout(() => {
    console.log("hello2");
},4000);

console.log("three");
console.log("four");// these doesn't wait for setTimeout

/* Callback is a function passed as an argument to another function */

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,1,sum);

// Callback Hell -(is a problem) nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom )  this style of prog becomes difficult to understand and manage

function getData (dataId){
    setTimeout(() =>{
        console.log("data - ",dataId);
    },2000);
}

getData(384);

// we want data serially 1,2,3 but each after a 2s delay but this we execute together 
getData(1);
getData(2);
getData(3);

// so
function getnewData(dataId,getNextData){
    setTimeout(() => {
        console.log("data- ",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}


//Promise chaining 
getnewData(1)
.then((res) => {
    return getnewData(2);
})
.then((res ) => {
    return getnewData(3);
});


// callback hell is a problem a nested confusing structure


// getnewData(1,() =>{
//     console.log("getting data 2...");
//     getnewData(2,() => {
//         console.log("getting data 3...");
//         getnewData(3);
//     });
// });

/* promises - solution of callback hell
is for "eventual" completion of task it is an object in JS.
let promise = new Promise((resolve,reject)+>{...})
resolve and reject are callback provided by JS

A JS Promise object can be:
Pending : the result is defined
Resolved : the result is a value resolve(result)
Rejected : the error is an error object reject(error)
*/

let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    reject("this is a reject it will show an error");
});

// use of promise by .then() - when promise is fulfilled & .catch() - when promise is rejected

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise in function");
        resolve("Success !!");
        // reject("Network Failure");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled ",res);
});

promise.catch((err) => {
    console.log("Rejected!! ",err);
});


// Promise chaining
 
function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
 
function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}

console.log("fetching data 1 ...");
asyncFunc1.then((res) =>{
    console.log("fetching data 1 ...");
    asyncFunc2.then((res) => {});
});

/* Asynce-Await
async func always return a promise
await pauses the execution of its surrounding async func until promise is settled */

async function greet(){
    console.log("Hello");
}

greet();

function api(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
};

async function getWeather(){
    await api(); //1st call
    await api(); // 2nd call
}
