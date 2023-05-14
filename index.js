//console.log("New Console output");

let name = "Sandesh Bhattarai"
var address = "Kathmandu"

name = "Test User";
address = "Banepa"

// Comments 
/** Comment  */

// Block scope 
// Global 
let a = 10;
console.log(a);         // 10
{
    // block scope
    let a = 20;         
    console.log(a)      // 20
}
console.log(a);         // 10

let b = 10;
//let b = 20;
b = 20;

var c = 10;
var c = 20;

// const 
const GRAVITY = 9.8
// GRAVITY = 10;