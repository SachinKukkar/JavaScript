function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");
}

// sayMyName();

// function addTwoNumber(number1,number2){    // input jo lete hai -> parameters and jab call krte time krte hai unhe -> arguements kehte hai
//     // console.log(number1+number2);
//     console.log(`The sum of the two numbers is : ${number1+number2}`)
 
// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // console.log("sachin");
    return number1+number2;
    
}

const result = addTwoNumbers(5,3);
console.log("Result : " ,result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));