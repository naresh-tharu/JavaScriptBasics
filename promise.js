// Object fullfilled, reject
// let myPromise  = new Promise((resolve, reject)=>{
//     // delay 
//     // success
//     //resolve()
//     // failed
//     reject()
//     // code non execute
// })

// myPromise.then().catch()

// stages
// Pending 
    // fullfill 
    // reject 
// settlement 
const login =(usern,pass) => {
    return new Promise((res, rej) => {
        // check db query username, password
        let exists = true   // false
        if(exists){
            res("User Logged in...")
            // rej("")
        } else {
            rej("User not logged in...")
        }
    })
}

// form 
// data 
// 
let loading = true; // loadin init
// login("","")
//     .then((resolve) => {
//         console.log({resolve})
//         //loading =false
//     })
//     .catch((error) => {
//         console.log(error)
//         //loading =false
//     })
//     .finally(() =>{
//         // always exectue
//         loading = false
//     })


// let myPromise1 = new Promise((res, rej) => {
//     //
//     rej("Hello there")  
// })

let myPromise1= Promise.resolve("Hello There")
let myPromise2= Promise.reject("Error: Hello There")

myPromise1.then((res) => {
    //console.log(res)
})
myPromise2.catch((rej) => {
    //console.log(rej)
})

let loginProm = login("","");

let promiseList = [loginProm, myPromise1, myPromise2];

console.log("")
console.log("")

Promise.all(promiseList)
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})

Promise.allSettled(promiseList)
.then((res) => {
    console.log(res)
})
