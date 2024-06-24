// Immediately Invoked Function Expression (IIFE)
// to remove pollution from global scope
// function chai(){
//     console.log("Db connected ");
// }
// chai()

(function chai(){
    console.log("Db connected ");
})();  //semicolon is mandatory 

// ()() ///first for defintion and 2nd for execution


// (function Test(){console.log("Error 404!");}) (). // named IIFE

// ((name)=>{
//     console.log(`hello   ${name}`)
//     })("Adil")


((name)=>{console.log(`Han Gandu's ${name}`);})("Parveen " + ' aryan' + ' aniket')

