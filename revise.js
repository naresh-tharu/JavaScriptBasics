// Syntax
console.log("Hello world")

// variable constants 
// Variables 
let fullName = "Sandesh Bhattarai"
var address = "Kathmandu"

fullName = "Update Name"

var address = "Lalitpur";

{
    let a = 10;
    var b = 10;
}
// a not accessible 
// b is accessible here

// Constants 
const GRAVITY = 9.8

// const GRAVITY = 10
//GRAVITY = 10;

// Data Types
/**
 * a. Number 
 * 
 * b. Boolean 
 *      true, false
 * c. Array 
 *      [], 
*       index: value => index default starts from 0
 * d. String 
 *      "", '', ``
 * e. Object 
 *      {
 *              key: value
 *      }
 * f. Null 
 *      null, "", ''
 * g. Undefined
 * 
 * h. JSON
 *      object 
 *      universal data format
 * i. NaN
 * 
 */

let userDetail = [
    "User Name",
    ["Kathamandu","Bhaktapur"],
    1231231231
]

let userObj = {
    name: "User Name",
    address: ["Kathmandu","Lalitpur"],
    phone: 123123123
}

console.log(userObj.name)
console.log(userObj['name'])

let x;

// Array operations 
let all_users = [];

// insert 
all_users.push("Sandesh")    // last entry  // 0
console.log(all_users);
all_users.push("Second user");  // 1 
console.log(all_users);
all_users.unshift("First User");    // 0 
console.log(all_users)

all_users[3] = "Updated user"
// all_users[1] = "Replaced user"


// size 
console.log(all_users)
console.log(all_users.length)

console.log(all_users.includes("Sandesh"));


// 4
// let first = all_users.shift();  
// 3
// let last = all_users.pop();
// 2

let firstIndex = all_users.splice(1, 1);
// let firstIndex = all_users.slice(1, 2)


console.log(firstIndex)
console.log(all_users)

// operators
    