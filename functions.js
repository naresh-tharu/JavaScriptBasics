// functions, method, events, macro
// Builtin, custom functions 
let a = 10;
let b = 20;

function addNumber(a, b){
    // code block 
    let c = a+b
    return c;
}



const addNumber1 = function(a, b){
    return (a+b)
}

// Arrow functions 
let z;
const addNumber2 = (a, b) => {
    return (a + b)
}
const helpers = {
    addNumber: (a, b) => {
        return a+b;
    },
    addNumber1: function(a, b) {
        return a+b;
    }
}

let response = helpers.addNumber(10,20);

let result = addNumber2(10, 20);

// console.log(a, b, c)
