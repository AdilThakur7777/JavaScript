const marvelHeros = ["thor","spiderman","ironman"," hulk"]
const dcHeros=["Batman","Superman","flash","deadpool"]


// marvelHeros.push(dcHeros)
// console.log(marvelHeros.length);
// console.log(marvelHeros[4][0]);

//  const allheros=marvelHeros.concat(dcHeros)
// console.log( allheros);


//another method
const allHeros=[...marvelHeros,...dcHeros]

console.log(allHeros);

const anotherArray=[1,2,3,[,4,5,6],7,[6,7,[4,5]]]
const realArray=anotherArray.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"adil"}))// interview case


let score1=100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));