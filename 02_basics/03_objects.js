// singleton-> jb object constructor se bnega
// literals se bnega to singleton nhi hoga 


// Object.create  isi ko bola jata h constructor method k through object declare krna

const mySym = Symbol("Key1")

const jsUser = {
    name : "Sachin",
    "full name" : "Sachin Kukkar",   // ab iss value ko dot se access nhi kr skte chahe kuchh b krlo
    [mySym] : "Mykey1",           // this is important for interview pov 
    age : 21,
    location : "Jaipur",
    email : "Sachinkukkar@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}


// below are two methods to access objects in javascript

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

jsUser.email = "Sachin@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "Sachin@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
console.log("Hello JS user ")    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `)    
    }

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())