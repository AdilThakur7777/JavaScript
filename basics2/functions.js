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


function loginUserMsg(userName ='user')
{
    if(!userName){
        console.log("enter the user name ");
        return 
    }
    return `${userName}  just logged in `
}

console.log(loginUserMsg())

function calculateCartPrice(val1,val2,...num1)  //rest operator
{
    return val2
}

console.log(calculateCartPrice(100,200,300,10000));


const user={
    username:"hitesh",
    prices:199
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}


handleObject(user)

const mynewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));