const userEmail=[]
// false value
// false , 0 , "",-0,BigInt 0n, null, undefined, NaN
// truth value
// "0", "false", " ", [], {}, function(){}
/* false ==0 => true
    false ="" =>true
    0 == "" => true
    Nullish coalescing operator(??): null defined
    
    */

// if(userEmail)
//     {
//         console.log("Got email");
//     }
//     else{
//         console.log("Dont have email");
//     }

// const emptyobj ={}
// if(Object.keys(emptyobj).length ===0)
//     {
//         console.log("object is empty"); 
//     }

    let val1;
    // val1 = 5 ?? 10

    // val1 = null ?? 10//
    var1 =undefined ?? 15
    console.log(var1)



    // ternary opeator 
const iceTea=100

iceTea >= 90 ? console.log("greater than 90") : console.log("less than 90")