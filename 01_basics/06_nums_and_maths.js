const score = 400

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 123.8996

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++ // 

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))

console.log(Math.random())   // gives values between 0 and 1 only
console.log(Math.random()*10+1)  // values left shift krdi by multiplying with 10 but 0 na mil jaye isliye 1 add krdia
console.log(Math.floor((Math.random()*10))+1)

const min = 10 
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)