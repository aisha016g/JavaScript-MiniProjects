let arr = ['apple','mango ','pear'];

/* A JS object is an entity having state and behaviour(properties & methods)
JS objects have a special property called prototype
We can set prototype using __proto__ (it's a refernece) */

const emp = {
    calcTax() {
        console.log("tax is 30%");// this will execute on calling
    },
// if someone has same method name and prototype then the method containes it execute the method on calling
};
const karan = {
    salary:50000,
    calcTax() {
        console.log("tax is 0%");
    },
};
const karan2 = {
    salary:50000,
};
const karan3 = {
    salary:50000,
};
const karan4 = {
    salary:50000,
};
const karan5 = {
    salary:50000,
};

// set a prototype use objects of other functions
karan.__proto__= emp;
karan2.__proto__= emp;
karan3.__proto__= emp;
karan4.__proto__= emp;
karan5.__proto__= emp;



/* Classes
class is a program code template for creating objects 
Those objects will have some state (variables) & some behaviour (functions) inside it

class MyClass{
constructor(){...}
MyMethod() {...}
}

let obj = new MyClass();
*/

class ToyotaCar{
    
/* Constructor 
Constructor is a method 
automatically invokes by "new" 
initialise object
*/
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start car");
    }

    stop(){
        console.log("stop car");
    }

    setBrand(brand){
        this.brand= brand;
    }

}

let fortuner = new ToyotaCar("fortuner",90);
fortuner.setBrand("fortuner");
fortuner.start();
console.log(fortuner);

/*Inheritance*/

class Person{
    constructor(){
        this.species = "human";
    }

    eat(){
        console.log("Person is eating");
    }
    sleeping(){
        console.log("Person is sleeping");
    }
    work(){
        console.log("Not working");
    }
}

class Engineer extends Person{
    work(){
        console.log("Engineer is working");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treating Patient");
    }
}

let obj1 = new Engineer();
obj1.eat();
obj1.work(); // will execute the child one overrides it

let p = new Person();
console.log(p);
let e1 = new Engineer();
console.log(e1);

/* super keyword
is used to call the constructor of its parent class to access the parent's properties & methods 
super(args) - calls parent's constructor
super.parentMethod(args) */

class Animal{
    constructor(){
        console.log("Enter parent constructor");
        this.animal = "animal";
    }
    legs(){
        console.log("Has four legs");
    }
    tail(){
        console.log("Has one tail");
    }
}

class Dog extends Animal{
    constructor(breed){
        console.log("Enter child constructor");
        super();// to invoke parent class constructor
        this.breed = breed;
        console.log("Exit child constructor");

    }
    sound(){
        super.tail();
    console.log("Barks");
    }
}

class cat extends Animal{
    sound(){
        console.log("Meows");
    }
}

let obj2 = new Dog("Puppy");

/* Error Handling 
try- catch
try{
....normal code
}
catch(err){
..handling error
}
*/

let a=2;
let b=8;

try{
    console.log(a+c);
}
catch(err){
    console.log("error");
}
console.log(a+b);