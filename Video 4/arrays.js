let marks=[324,657,64,2,3,65,3334,876,11];
let info=["rahul",45,true];
console.log(marks);
console.log(info);
console.log(info.length);

//  for loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

// for of

for(let mark of marks){
    console.log(mark);
}

//  Question 1 - gievn marks of students find avg of marks

let StMarks=[85,97,44,37,76,60];
let n = StMarks.length ;
let sum1=0,sum2=0;
for(let i = 0; i < n; i++){
sum1+=StMarks[i];
}
for(let i of StMarks){
    sum2+=i;
}

let avg1=sum1/n;
let avg2=sum2/n;
console.log(avg1,avg2);

// Question 2 - array of prices every item has 10% off change after applying offer

let prices=[250,645,300,900,50];
for(let i=0; i<prices.length;i++){
    prices[i]-=(prices[i]*.1);
}
console.log(prices);

/* array methods
push() - add to end
pop() - delete from end
toString() - converts array to string 
concat() - join multiple arrays and return result
unshift() - add to start
shift() - delete from start and return 
*/

let food=["potato","tomato","apple","litchi","corn"];
console.log(food);
food.push("mango");
console.log(food);
food.pop();
console.log(food);
console.log(food.toString());
let marks1=[324,657,64,2,3,65,3334,876,11];
console.log(marks1.toString());
let total=marks1.concat(food);
console.log(total);


/* slice - return a piece of array (not change in original array) 
slice(startIdx,endIdx);
and 
splice - change original array (add, remove,replace)
splice(startIdx,delCount,newEle(....)) */ 

let marks2=[324,657,64,2,3,65,3334,876,11];

console.log(marks2.slice(2,5));

let arr=[1,2,3,4,5,6,7,8];
console.log(arr.splice(2,2,101,102));
console.log(arr);

// add element
console.log(arr.splice(2,0,45));
console.log(arr);

/* Question 3 - create an array and perform - 1-remove first company from arry 
2-remove uber and add ola in its place
3-add amazon at end */

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

console.log(companies.shift);
console.log(companies);
console.log(companies.splice(2,1,"OLA"));
console.log(companies);
companies.push("Amazon");
console.log(companies);