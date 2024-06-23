

function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("L");
    
}


// sayMyName();

// function addTwoNumbers(a, b)    //parameters 
// {
//     console.log(a + b)
// }

// function addTwoNumbers(a, b)    //parameters 
// {
//     let ans = a  +  b
//     return ans
// }

function addTwoNumbers(a, b)    //parameters 
{
    return a + b
}


const ans = addTwoNumbers(3,10)          //arguments
//console.log(ans);


function loginUserMsg(userName = 'user')
{
    if(!userName){
        console.log("enter the user name ");
        return 
    }
    return `${userName}  just logged in `
}

console.log(loginUserMsg())