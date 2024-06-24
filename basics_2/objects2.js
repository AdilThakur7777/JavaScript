//singleton objects
// const tinderUser = new Object()
const tinderUser={}

tinderUser.id=406262
tinderUser.name='Abdul'
tinderUser.isloggedIn="false"
const regularUser={
    email : "anil@gmail.com",
    fullname : {
        firstname:"anil",
        lastname:'bhandari'
    }
}
// console.log(regularUser.fullname.firstname);
// console.log(tinderUser);

//merging objects

const obj1={
    1:"a",
    2:"b",
    3:"c"
}

const obj2={
    4:"a",
    5:"b",
    6:"c"
}

// // const obj3=  {obj1,obj2}
// const obj3 = Object.assign({},obj1 , obj2)


// console.log(obj3);



const obj4={...obj1,...obj2}
console.log(obj4);

const users = [
    {
        id: 1,
        email:"adilthakr777@gmail.com"
    },
    {
        id: 2,
        email:"amitkumar789@gmail.com"
    }
]

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



console.log(tinderUser.hasOwnProperty('isloggedIn'))
//value we get are array 