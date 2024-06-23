//arrays in js 
// arrays in js are resizable and can contain a mix of different datatype
//js arrays are not asssociative arrays 
//shallow copies and deep copies 
const array=[0,1,2,3,4,5];
const villains = new Array("skywalker","Joker","voldmort","darthvader")
// console.log(villains)

// console.log(array[11] )
// console.log(villains[0])


// array.push(60)
// array.push(60)
// array.push(60)
// array.pop();
// array.pop();

// array.unshift(1000)// it puts elements in the starting position of array 0th index but expensive operation
// // console.log(array.indexOf(5));
// const newArr = array.join()
// array.shift()
// for(let i=0;i<array.length;i++)
//     {
//         console.log(array[i]);
//     }
// for(let i=0;i<newArr.length;i++)
//     {
//             console.log(newArr[i]);
    // }
// console.log(typeof newArr);
// console.log(typeof array);

//slice and splice

console.log("A ",array)

const myArray1 = array.slice(1,3)

console.log(myArray1);
console.log(array);
