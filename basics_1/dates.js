// 1st january 1970 date
//TC39
//Temporal ko global bnane ka concept he 

// let myDate= new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate  = new Date(2024,11,12)
// let myCreatedDate  = new Date(2024,11,12,5,3)
// let myCreatedDate  = new Date("2023-01-14")
let myCreatedDate  = new Date("05-14-2024")


// // console.log(myCreatedDate.toLocaleString());
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    weekday:"long"
})