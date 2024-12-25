const accoundId = 102  // it cannot be change once declared 

let accountEmail = "sachinkukkar@google.com"   

var accountPassword = "1234567"

accountCity = "Jaipur"

// accoundId = 2    // this is not allowed 

accountEmail = "sk@sk.com"
accountPassword = "sachinkukkar123"
accountCity = "Bangalore"

// console.log(accoundId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);


/* prefer not to use 'var' for declaring variables because of issue in block scope and functional scope*/

console.table([accoundId,accountEmail,accountPassword,accountCity])   // ye ek table ki form me print krke dedega