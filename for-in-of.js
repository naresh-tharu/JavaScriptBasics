let products = [
    {
        name: "First",
        price: 1000,
        discount: 10
    }
]
// 0

products[4] = {
    name:"Second",
    price: 2000,
    discount: 10
}

// products => 5 => 0 123 4

// for(let i = 0; i< products.length; i++){
//     let prod = products[i];
// }

for(let i in products){
    let prod = products[i]
    console.log(i)
}

for(let prod of products){
    if(prod){

    }
}


let users = {
    0: {
        name: "",
        email: "",
        address: ""
    },
    1: {
        name: "",
        email: "",
        address: ""
    }
}

// file uploader 
// {0: {filename, path, size, }, 1:{}}
let values = Object.keys(users);
console.log(users);
console.log(values);