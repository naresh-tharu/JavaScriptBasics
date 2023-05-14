const addNumber = () => {
    c = a + b;
    return c;
    // non executable 
}

let a = 10;
let b = 20;
let add, sub, mul, div;
const calculation = (a, b) => {
    add  = a + b;
    sub = a - b;
    mul = a * b;
    div = a / b;
    
}
var c;
let result = addNumber();

calculation(a, b);
console.log({add})
console.log({sub})
console.log({mul})
console.log({div})
// 

//console.log(c);



const func1 = ({a,b,c,d,e}) => {
    console.log(a,b,c,d,e)
}

func1({a: 10, b: 10, c: 10, d: 10, e: 10})



const func2 = (a = 0, b = 0, c) => {
    let d = a + b + c;
    return d
}

console.log(func2());   // 0
console.log(func2(1));  // 1
console.log(func2(1,2));    // 3
console.log(func2(1,2, 3));    // 6


// getRequest(url, login){ // login value }
// getRequest("/url")


// synchronous and Asynchronous 

// clouser 
// callback 
// async functions 
    // then-catch
    // try-catch with async-await