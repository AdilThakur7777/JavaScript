// primitive and non primitive 
//7
/* 
primitive types are call by values 
Number
BigInt
String
Null
Undefined
Symbol
Boolean
is javascript static typed or dynamic typed language ?
*/
// const id=Symbol('1111123')
// const anotherId =Symbol('1230')

// console.log(id===anotherId)
// console.log(anotherId==id);;
//Non primitive (Reference type)
// Arrays
// Objects
// Functions
//
const bigInt=2343225535n
const heros=["Batman","Superman","Spiderman"]
let myObj={
    name:"Adil",
    age:"23",
}
const myFunc=function(){
    console.log("helllo world");
}


// console.log(typeof myFunc)
// console.log(typeof null)
// console.log(typeof myObj)
// console.log(typeof myObj)



/* *************************
Memory  
Stack and Heap 
primitive ==> stack
non primitive ==>heap

 */

let myYoutubeName="adil Thakur"
let anotherName=myYoutubeName
anotherName="RedRider"
console.log(anotherName);
console.log(myYoutubeName);


let user1 = {
    email:"adil.thakur@servicenow.com",
    name:"adil Thakur",
    Salary: 90000,
    age:23
}
let user2 = user1

user2.Salary=100000
console.log(user1.Salary);
console.log(user2.Salary);