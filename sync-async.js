// delay 
// setTimeout()
// Callback 

// async 2sec
const func1 = (cb) => {
    setTimeout(function(){
        console.log("I am function1")
        cb()
    }, 2000)
}

// async 1sec
const func2 = () => {
    setTimeout(function(){
        console.log("I am function2")
    }, 1000)
}


// func2 is dependent on func1
func1(func2) // 2sec

let users = [
    {
        name: "User name",
        email: "user@test.com",
        address: "Kathmandu"
    },
    {
        name: "User name2",
        email: "user1@test.com",
        address: "Lalitpur"
    },
    {
        name: "User name3",
        email: "user2@test.com",
        address: "Kathmandu"
    }
]

// for(let user of users){
//     console.log(user.name)
// }

users.map((user, index) => {
    console.log(user.name)
});

users.forEach((user, index) => {
    console.log(user.name)
})

// filter 
let userKtm = users.filter((user, index) => user.address === 'Kathmandu')

// users.map((user, index) => {
//     if(user.address === 'Kathmandu'){
//         userKtm.push(user)
//     }
// })
console.log({ktm: userKtm})

let products = [
    {
        name: "Product one",
        price: 100,
        discount: 10
    },
    {
        name: "Product Two",
        prrice: 200,
        discount: 10
    }
]

function prodLoop(prod, index) {
    let after = prod.price - prod.price * prod.discount/100
    prod.afterDiscount = after 
}

products.map(prodLoop)
console.log(products);

// by using map and foreach 
// calculate after discount and assign it to the respective 
// array element and print the whole array


// fs.write(..., (err, success) => {

//})

function login(username, password, cb){
    // login logic 
    // success failure
    cb(true, false) // error 
    cb(false, true) // truth
    cb(false, false) // random 
}

login("","", (err, sucess) =>{
   if(err) {
    console.log("error: ", err)
   } else {
    console.log("Succes:", success)
   }
})