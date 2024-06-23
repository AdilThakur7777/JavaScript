//singleton    when we use with constructor => Object.create
//object literals
const mySym=Symbol("key1")
const jsUser={
    name:'Adil Thakur',
    age:23,
    mySym:"mekey1",
    Company:"ServiceNow",
    Email:"adil.thakur@servicenow.com",
    lastlogin : ["mondays","Friday"],
    Salary:90000,
    "full name":"Adil Thakur"
}

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.Email = 'adilthakur7777@gmail.com'
// Object.freeze(jsUser)
// jsUser.name='amit'

// console.log(jsUser);

jsUser.greet= function(){
    console.log("hello Js User")
}

jsUser.greet2= function(){
    console.log(`hello Js User , ${this.name}`)
}
console.log(jsUser.greet());
console.log(jsUser.greet2());
